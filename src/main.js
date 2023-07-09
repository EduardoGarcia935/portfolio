import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import "./assets/css/reset.css";

import messages from "./assets/translation.js";

const i18n = createI18n({
  locale: "pt",
  fallbackLocale: "en",
  messages,
});

const app = createApp(App);

app.use(i18n);

app.mount("#app");
