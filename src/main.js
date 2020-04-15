import Vue from "vue";
import App from "./App.vue";
import { routes } from "./routes";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import store from "./Store/store";
import vuelidate from "vuelidate";
import wysiwyg from "vue-wysiwyg";

import {
  MdCard,
  MdButton,
  MdDialog,
  MdContent,
  MdTable,
  MdDialogConfirm
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(MdCard);
Vue.use(MdButton);
Vue.use(MdDialog);
Vue.use(MdContent);
Vue.use(MdTable);
Vue.use(MdDialogConfirm);

Vue.use(vuelidate);
Vue.use(wysiwyg, {});

import Button from "./components/UI/Button.vue";
Vue.component("app-button", Button);

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.use(VueResource);
Vue.http.options.root = "https://game-spot-ecaed.firebaseio.com/";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
