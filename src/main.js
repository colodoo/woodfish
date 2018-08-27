// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './register'
import './analog.js'

Vue.config.productionTip = false

// start mobile touch event
var VueTouch = require('vue-touch')
Vue.use(VueTouch, { name: 'v-touch' })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
