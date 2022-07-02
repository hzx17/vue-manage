import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from './store/index.js'
// 引入element-ui
import ElementUI from 'element-ui'
// 引入element-ui全局样式
import 'element-ui/lib/theme-chalk/index.css'
// 引入全局自定义样式
import '@/assets/styles/reset.less'
// 引入样式
// 使用element-ui
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
