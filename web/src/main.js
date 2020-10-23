import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store/store';
import App from './App.vue';
import routes from './routes';

import './assets/reset.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({routes});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
