import Vue from "vue";
import App from "./App.vue";

// ------------------------------
// x5-modal plugin install START
// ------------------------------

const GOOGLE_KEY = process.env.VUE_APP_GOOGLE_KEY
    ? process.env.VUE_APP_GOOGLE_KEY
    : "";

import x5GMaps from "../src";
Vue.use(x5GMaps, {
    key: GOOGLE_KEY,
    libraries: ["visualization"],
});

// ------------------------------
// x5-modal plugin install END
// ------------------------------

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount("#app");
