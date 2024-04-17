import { createApp } from "vue";
import { store } from "./store";

// normalize.css
import "normalize.css/normalize.css";
// 全局样式
import "./styles/index.less";
// tailwindcss
import "./styles/tailwind.css";
// svg icon
import "virtual:svg-icons-register";
// 全局注册组件
import ExamineDisplay from "./components/Examine/ExamineDisplay.vue";

import App from "./App.vue";
import router from "./router";
import message from "./utils/global"

const app = createApp(App);
app.use(store);
app.use(router);
app.use(message);
app.component("ExamineDisplay", ExamineDisplay);
app.mount("#app");
