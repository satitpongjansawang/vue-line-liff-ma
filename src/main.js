const { createApp } = require('vue');
import App from "./App.vue";
import { BootstrapVue , IconPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
createApp(App).mount("#app");

Vue.use(BootstrapVue)
Vue.use(IconPlugin)