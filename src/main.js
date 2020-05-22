// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render:h=>h(App),
  router, //使用上vue-router
  store // 使用上vuex
})