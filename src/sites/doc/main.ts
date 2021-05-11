import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { isMobile } from '@/sites/assets/util';
import '@/sites/assets/styles/reset.scss';
import '@/sites/assets/styles/md-style.scss';

if (isMobile) {
  location.replace('demo.html' + location.hash);
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#doc');
