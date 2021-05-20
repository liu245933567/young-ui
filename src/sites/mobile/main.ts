import './fixable';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/sites/assets/styles/reset.scss';
// import Jetair from '@packages/index';

// Jetair.install()


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');