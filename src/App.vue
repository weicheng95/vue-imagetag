<template>
  <div id="app" style="width: 50%;">
    <vue-image-tag
      id="imagetag"
      image="https://www.wallpaperup.com/uploads/wallpapers/2015/10/11/818120/3cc4176c428464bfe5a0a96ffaf67ff5-1000.jpg"
      :enable="true"
      @onTagRemove="onTagRemove"
      @onTagAdd="onTagAdd"
      :show="true"
      :tags="tags"
    ></vue-image-tag>
  </div>
</template>

<script>
import VueImageTag from "./components/vue-imagetag.vue";

export default {
  name: "app",
  components: {
    VueImageTag
  },
  data() {
    return {
      tags: [
        {
          Tag: "this is so cute!!!",
          XAxis: 0.714371617558629,
          YAxis: 0.7376597344024054
        }
      ]
    };
  },
  methods: {
    onTagRemove(tag, taglist) {
      console.log(tag, taglist);
    },
    onTagAdd(tag, taglist) {
      console.log(tag, taglist);
    }
  }
};
</script>

<style>
#imagetag #imgtag_container {
  padding: 30%;
}
</style>
