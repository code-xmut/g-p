import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "View",
    component: import("../pages/home.vue"),
  },
];

export default routes;
