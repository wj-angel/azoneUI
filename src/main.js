// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import $ from "jquery"
import Highlight from "./assets/highlight/hightlight"
import AzoneUI from  "./packages/index"
import uploader from 'vue-simple-uploader'
import vcolorpicker from 'vcolorpicker'



Vue.prototype.$echarts = echarts;

Vue.use(Highlight)
Vue.use(AzoneUI)
Vue.use(uploader)
Vue.use(vcolorpicker)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render(h){
    return h(App)
  }
})
