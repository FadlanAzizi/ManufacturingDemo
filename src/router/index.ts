import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home/Home.vue";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import User from "../views/User/User.vue";
import UserSettings from "../pages/PageUser/DetailUser/UserSettings/UserSettings.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/User",
    name: "User",
    component: User,
  },
  {
    path: "/UserSettings",
    name: "UserSettings",
    component: UserSettings,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
