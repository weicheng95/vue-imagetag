<template>
  <div id="imgtag_row">
    <div id="imgtag_container" ref="imgtag" :style=" { backgroundImage:'url(' + image + ')' } ">
      <v-popover trigger="manual" :open="isOpen" class="popover_wrapper">
        <template slot="popover">
          <div>
            <input
              class="popover_tag_input"
              v-model="tag"
              :placeholder="placeholder"
              v-on:keyup.enter="addTag"
            >
            <CloseIcon class="close_icon" v-close-popover/>
          </div>
        </template>
      </v-popover>
    </div>

    <div id="imgtag_showing" v-if="addedLoading">
      <v-popover
        v-for="(t,i) in location"
        :key="i"
        trigger="manual"
        :open="isAddedOpen"
        :auto-hide="false"
        class="popover_wrapper"
        :style="{left: setPosition(t.XAxis, containerwidth), top: setPosition(t.YAxis, containerheight)}"
      >
        <template slot="popover" class="col-100">
          <div class="col-100">
            <span>{{t.Tag}}</span>
            <CloseIcon class="close_icon" @click="removeTag(t)"/>
          </div>
        </template>
      </v-popover>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { VPopover, VClosePopover } from "v-tooltip";
import CloseIcon from "@/assets/close.svg";
import "@/styles/popover.css";

//register components
Vue.component("v-popover", VPopover);
Vue.directive("close-popover", VClosePopover);

export default {
  name: "imagetag",
  props: {
    image: String,
    enable: Boolean,
    placeholder: String,
    show: Boolean,
    tags: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      imageLoaded: false,
      isOpen: false,
      isAddedOpen: this.show ? this.show : true,
      addedLoading: true,
      tag: "",
      containerinfo: undefined,
      containerwidth: 0,
      containerheight: 0,
      location: []
    };
  },
  components: { CloseIcon },

  watch: {
    show() {
      this.isAddedOpen = this.show;
    },

    image() {
      this.imageLoaded = true;
    },

    enable() {
      if (this.enable && this.image) {
        this.addClickEvent();
      }
    },

    imageLoaded() {
      setTimeout(() => {
        this.getContainerInfo();
        window.addEventListener("resize", this.windowResize);
        window.addEventListener("scroll", this.windowScroll);
        this.handleTag();
      }, 100);
    }
  },

  methods: {
    getClickPosition(e) {
      let xPosition = e.clientX - this.containerinfo.left;
      let yPosition = e.clientY - this.containerinfo.top;

      let xInPercentage = xPosition / this.containerwidth;
      let yInPercentage = yPosition / this.containerheight;

      this.setLocation(xInPercentage, yInPercentage);
      this.crtpoint = { XAxis: xInPercentage, YAxis: yInPercentage };
    },

    handlePopupBox() {
      this.isOpen = false;
      setTimeout(() => {
        this.isOpen = true;
        this.handleInputFocus();
      }, 100);
    },

    handleInputFocus() {
      let ele = document.getElementsByClassName("popover_tag_input")[0];
      if (ele) {
        ele.focus();
      }
    },

    handleTag() {
      this.addedLoading = false;
      setTimeout(() => {
        this.addedLoading = true;
      }, 100);
    },

    addTag() {
      if (this.tag != "") {
        let crttag = this.tag;
        this.crtpoint.Tag = crttag;
        //add to array for showing purpose
        this.location.push(this.crtpoint);
        //reset input
        this.resetInputTag();
        //refresh
        this.handleTag();
        //emit event
        this.$emit("onTagAdd", crttag, this.location);
      }
    },

    resetInputTag() {
      //clean input field
      this.tag = "";
      //clean location
      this.crtpoint = undefined;
      //hide popup
      this.isOpen = false;
    },

    removeTag(tag) {
      //remove from location array
      this.location = this.location.filter(x => {
        return !(
          x.Tag == tag.Tag &&
          x.XAxis == tag.XAxis &&
          x.YAxis == tag.YAxis
        );
      });

      //refresh
      this.handleTag();

      this.$emit("onTagRemove", tag, this.location);
    },

    getContainerInfo() {
      let container = document.getElementById("imgtag_container");
      let info = container.getBoundingClientRect();

      this.containerinfo = info;
      this.containerwidth = info.width;
      this.containerheight = info.height;
    },

    setLocation(x, y) {
      let popover_wrapper = document.getElementsByClassName(
        "popover_wrapper"
      )[0];
      popover_wrapper.style.left = x * this.containerwidth + "px";
      popover_wrapper.style.top = y * this.containerheight + "px";

      this.handlePopupBox();
    },

    addClickEvent() {
      this.$refs.imgtag.addEventListener("click", this.getClickPosition, false);
    },

    windowResize() {
      this.getContainerInfo();
      this.handleTag();
    },

    windowScroll() {
      this.getContainerInfo();
    },

    setPosition(axis_value, containe_value) {
      return axis_value * containe_value + "px";
    }
  },

  mounted() {
    if (this.image) {
      this.imageLoaded = true;
    }

    if (this.enable && this.image) {
      this.addClickEvent();
    }

    if (this.tags.length) {
      this.location = this.tags;
    }
  }
};
</script>

<style>
.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: black;
  z-index: 1;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
  min-width: 100px;
  text-align: center;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, 0.1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s, visibility 0.15s;
}

.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}
#imgtag_container {
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: auto;
  background-position: center;
}

.popover_wrapper {
  position: absolute;
  padding: 0 5px;
  visibility: hidden;
  height: 0;
}

.correct_icon {
  cursor: pointer;
}

.popover_tag_input {
  margin-right: 5px;
  background-color: #2a2828;
  border: none;
  color: white;
  padding-left: 5px;
  font-size: 16px;
  width: 100px;
  font-family: arial;
}

*:focus {
  outline: 0;
}

.tooltip-inner.popover-inner {
  background: #2a2828 !important;
  color: white !important;
  padding: 5px 10px !important;
  border-radius: 20px !important;
  font-family: arial !important;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.tooltip.popover .popover-arrow {
  border-color: #2a2828;
}

.close_icon {
  padding-right: 5px;
  cursor: pointer;
  fill: white;
  width: 10px;
  height: 17px;
  float: right;
  padding-left: 10px;
}

.popoverbtn {
  position: absolute;
  width: 0 !important;
  height: 0 !important;
  padding: 8px 3px;
  border: none;
  visibility: hidden;
}
</style>

