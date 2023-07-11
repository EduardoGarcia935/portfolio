import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import "./assets/css/reset.css";
import { createPinia } from "pinia";
import Aos from "aos";
import "aos/dist/aos.css";

import messages from "./assets/translation.js";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});

const app = createApp(App);

app.use(i18n);
app.use(createPinia());

Aos.init();

app.mount("#app");
