import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { Vuetify } from "vuetify";
import Store from "./Store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store: Store,
  render: h => h(App)
}).$mount("#app");
