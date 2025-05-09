import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Gifts from "./views/Gifts.vue";
import Letter from "./views/Letter.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/gifts", component: Gifts },
  { path: "/letter", component: Letter },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
