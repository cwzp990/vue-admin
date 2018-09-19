import Vue from 'vue'
import ElementUI from 'element-ui'
import VueAMap from 'vue-amap'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/utils/permission'

import '@/styles/reset.scss' // css resets
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // gloval css

import './icons' // icons

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '9469f7cacce232236b078588b218aa94',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
