import { RouteRecordRaw } from "vue-router";
import Home from "../components/HelloWorld.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "View",
    component: Home,
  },
];

export default routes;
