
// main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router, // Make sure router is passed to the Vue instance
  render: h => h(App)
}).$mount('#app')

