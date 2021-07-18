import Vue from "vue";
import store from "./store";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
