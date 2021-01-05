import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入 axios
import axios from '@/api/http'
// 需要将对应的内容挂载到vue原型上( 后续每次使用不必每次import )

Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
