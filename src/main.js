import { createApp } from "vue";
import "@/assets/css/style.css";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import Antd from "ant-design-vue";
import { createPinia } from "pinia";
import persist from "pinia-plugin-persistedstate";

import "@/mock/index";

const pinia = createPinia();
pinia.use(persist);

createApp(App).use(pinia).use(Antd).use(i18n).use(router).mount("#app");
