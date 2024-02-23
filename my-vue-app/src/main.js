import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import HomePages from "./pages/HomePages.vue";
import LoginPages from "./pages/LoginPages.vue";
import ContactPages from "./pages/ContactPages.vue";
import QuiSommesNousPages from "./pages/QuiSommesNousPages.vue";
import Error404Pages from "./pages/Error404Pages.vue";

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
  {
    path: "/contact",
    name: "Contact",
    component: ContactPages,
  },
  {
    path: "/quisommesnous",
    name: "QuiSommesNous",
    component: QuiSommesNousPages,
  },
  {
    path: "/error404pages",
    name: "Error404Pages",
    component: Error404Pages,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
