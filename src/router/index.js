import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Counter from "../pages/Counter.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/counter",
    name: "counter",
    component: Counter,
  },
  {
    path: "/404",
    name: "not-found",
    component: NotFound,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
