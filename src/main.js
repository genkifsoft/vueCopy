import Vue from 'vue'
import App from './App.vue'
import VueAuth from '@websanova/vue-auth';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from '../router/router'
import VueRouter from 'vue-router';
// import data from "../data.json";
import auth from '../router/auth';
import mixin from '../library/mixin';

Vue.use(VueAxios, axios);
window.axios = axios;

Vue.router = router;
App.router = Vue.router;
Vue.use(VueRouter);
Vue.use(VueAuth, auth);
Vue.mixin(mixin);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
