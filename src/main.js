import Vue from 'vue'
import App from './App'
import Axios from './api'
import router from './router'
import ElementUI from 'element-ui';
import './styles/global.styl'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.prototype.$http = Axios
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
