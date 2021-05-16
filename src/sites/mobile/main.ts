import './fixable';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/sites/assets/styles/reset.scss';
// import '@/utils/touchEmulator';
import Jetair from '@/main';
// Vue.use(Jetair)
Jetair.install()


var $vueIns = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

console.log('sefgfgfgfgfgfgfg ------', $vueIns)