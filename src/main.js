
// main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { CursorFx } from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';

// Install
Vue.component(
    CursorFx
);

Vue.config.productionTip = false

new Vue({
  router, // Make sure router is passed to the Vue instance
  render: h => h(App)
}).$mount('#app')

