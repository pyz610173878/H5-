/*
 * @Author: hacker 610173878@qq.com
 * @Date: 2024-03-22 15:52:02
 * @LastEditors: hacker 610173878@qq.com
 * @LastEditTime: 2024-04-11 18:56:47
 * @FilePath: \H5-\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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

const app = createApp(App);
app.use(store);
app.use(router);
app.component("ExamineDisplay", ExamineDisplay);
app.mount("#app");
