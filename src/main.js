import Vue from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import "babel-polyfill";
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import {rtdbPlugin} from 'vuefire'
Vue.use(rtdbPlugin);

Vue.config.productionTip = false

new Vue({
  store,
  el: '#app',
  template: '<App/>',
  vuetify,
  components: { App }
})