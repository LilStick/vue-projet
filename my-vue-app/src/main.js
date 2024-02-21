import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import HomePages from "./pages/HomePages.vue";
import LoginPages from "./pages/LoginPages.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePages,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPages,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
