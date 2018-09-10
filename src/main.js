import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'

import '@/styles/reset.scss'  // css resets
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/index.scss'   // gloval css

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
