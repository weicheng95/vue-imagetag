(function(t){function e(e){for(var i,s,r=e[0],c=e[1],l=e[2],u=0,p=[];u<r.length;u++)s=r[u],o[s]&&p.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("7f7f"),n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"50%"},attrs:{id:"app"}},[n("vue-image-tag",{attrs:{id:"imagetag",image:"https://www.wallpaperup.com/uploads/wallpapers/2015/10/11/818120/3cc4176c428464bfe5a0a96ffaf67ff5-1000.jpg",enable:!0,show:!0,tags:t.tags},on:{onTagRemove:t.onTagRemove,onTagAdd:t.onTagAdd}})],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"imgtag_row"}},[n("div",{ref:"imgtag",style:{backgroundImage:"url("+t.image+")"},attrs:{id:"imgtag_container"}},[n("v-popover",{staticClass:"popover_wrapper",attrs:{trigger:"manual",open:t.isOpen}},[n("template",{slot:"popover"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tag,expression:"tag"}],staticClass:"popover_tag_input",attrs:{placeholder:t.placeholder},domProps:{value:t.tag},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTag(e)},input:function(e){e.target.composing||(t.tag=e.target.value)}}}),n("CloseIcon",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"close_icon"})],1)])],2)],1),t.addedLoading?n("div",{attrs:{id:"imgtag_showing"}},t._l(t.location,function(e,i){return n("v-popover",{key:i,staticClass:"popover_wrapper",style:{left:t.setPosition(e.XAxis,t.containerwidth),top:t.setPosition(e.YAxis,t.containerheight)},attrs:{trigger:"manual",open:t.isAddedOpen,"auto-hide":!1}},[n("template",{staticClass:"col-100",slot:"popover"},[n("div",{staticClass:"col-100"},[n("span",[t._v(t._s(e.Tag))]),n("CloseIcon",{staticClass:"close_icon",on:{click:function(n){return t.removeTag(e)}}})],1)])],2)}),1):t._e()])},r=[],c=n("e37d"),l={functional:!0,render(t,e){const{_c:n,_v:i,data:o,children:a=[]}=e,{class:s,staticClass:r,style:c,staticStyle:l,attrs:d={},...u}=o;return n("svg",{class:[s,r],style:[c,l],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 47.971 47.971"},d),...u},a.concat([n("path",{attrs:{d:"M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z"}})]))}};n("7e03");i["a"].component("v-popover",c["b"]),i["a"].directive("close-popover",c["a"]);var d={name:"imagetag",props:{image:String,enable:Boolean,placeholder:String,show:Boolean,tags:{type:Array,default:function(){return[]}}},data:function(){return{imageLoaded:!1,isOpen:!1,isAddedOpen:!this.show||this.show,addedLoading:!0,tag:"",containerinfo:void 0,containerwidth:0,containerheight:0,location:[]}},components:{CloseIcon:l},watch:{show:function(){this.isAddedOpen=this.show},image:function(){this.imageLoaded=!0},enable:function(){this.enable&&this.image&&this.addClickEvent()},imageLoaded:function(){var t=this;setTimeout(function(){t.getContainerInfo(),window.addEventListener("resize",t.windowResize),window.addEventListener("scroll",t.windowScroll),t.handleTag()},100)}},methods:{getClickPosition:function(t){var e=t.clientX-this.containerinfo.left,n=t.clientY-this.containerinfo.top,i=e/this.containerwidth,o=n/this.containerheight;this.setLocation(i,o),this.crtpoint={XAxis:i,YAxis:o}},handlePopupBox:function(){var t=this;this.isOpen=!1,setTimeout(function(){t.isOpen=!0,t.handleInputFocus()},100)},handleInputFocus:function(){var t=document.getElementsByClassName("popover_tag_input")[0];t&&t.focus()},handleTag:function(){var t=this;this.addedLoading=!1,setTimeout(function(){t.addedLoading=!0},100)},addTag:function(){if(""!=this.tag){var t=this.tag;this.crtpoint.Tag=t,this.location.push(this.crtpoint),this.resetInputTag(),this.handleTag(),this.$emit("onTagAdd",t,this.location)}},resetInputTag:function(){this.tag="",this.crtpoint=void 0,this.isOpen=!1},removeTag:function(t){this.location=this.location.filter(function(e){return!(e.Tag==t.Tag&&e.XAxis==t.XAxis&&e.YAxis==t.YAxis)}),this.handleTag(),this.$emit("onTagRemove",t,this.location)},getContainerInfo:function(){var t=document.getElementById("imgtag_container"),e=t.getBoundingClientRect();this.containerinfo=e,this.containerwidth=e.width,this.containerheight=e.height},setLocation:function(t,e){var n=document.getElementsByClassName("popover_wrapper")[0];n.style.left=t*this.containerwidth+"px",n.style.top=e*this.containerheight+"px",this.handlePopupBox()},addClickEvent:function(){this.$refs.imgtag.addEventListener("click",this.getClickPosition,!1)},windowResize:function(){this.getContainerInfo(),this.handleTag()},windowScroll:function(){this.getContainerInfo()},setPosition:function(t,e){return t*e+"px"}},mounted:function(){this.image&&(this.imageLoaded=!0),this.enable&&this.image&&this.addClickEvent(),this.tags.length&&(this.location=this.tags)}},u=d,p=(n("89be"),n("2877")),g=Object(p["a"])(u,s,r,!1,null,null,null),h=g.exports,f={name:"app",components:{VueImageTag:h},data:function(){return{tags:[{Tag:"this is so cute!!!",XAxis:.714371617558629,YAxis:.7376597344024054}]}},methods:{onTagRemove:function(t,e){console.log(t,e)},onTagAdd:function(t,e){console.log(t,e)}}},v=f,m=(n("034f"),Object(p["a"])(v,o,a,!1,null,null,null)),w=m.exports;n.d(e,"default",function(){return y}),n.d(e,"version",function(){return T}),n.d(e,"VueImageTag",function(){return h}),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(w)}}).$mount("#app");var y=function t(e){t.installed||e.component(h.name,h)};"undefined"!==typeof window&&window.Vue&&y(window.Vue);var T="1.0.0"},"64a9":function(t,e,n){},"7e03":function(t,e,n){},"89be":function(t,e,n){"use strict";var i=n("cad7"),o=n.n(i);o.a},cad7:function(t,e,n){}});