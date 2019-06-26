import Vue from 'vue'
import App from './App.vue'
import VueImageTag from './components/vue-imagetag.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


const install = function (Vue) {
  if (install.installed) return

  Vue.component(VueImageTag.name, VueImageTag)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const version = '1.0.0'
export {
  install as default,
  version,
  VueImageTag
}
