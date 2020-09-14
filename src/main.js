import Vue from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import "babel-polyfill";

Vue.config.productionTip = false

new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})