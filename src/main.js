// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './common/style/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import axios from 'axios'
import FastClick from 'fastclick'
import 'babel-polyfill'
import util from './common/util.js'

FastClick.attach(document.body)
Vue.use(util);

axios.defaults.withCredentials = true
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
