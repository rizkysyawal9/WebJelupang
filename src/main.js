// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/css/bootstrap.min.css";
import "~/assets/css/style.css";
import BootstrapVue from "bootstrap-vue";

import "bootstrap-vue/dist/bootstrap-vue.css";
import "~/assets/css/custom.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(BootstrapVue);
}
