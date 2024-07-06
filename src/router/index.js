import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/index.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/attractions",
      name: "attractions",
      component: () => import("@/views/Attractions/index.vue"),
    },
    {
      path: "/attractionsDetail/:id",
      name: "attractionsDetail",
      component: () => import("@/views/AttractionsDetail/index.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("@/views/NotFound/index.vue"),
    },
    {
      path: "/testDetail",
      name: "testDetail",
      component: () => import("@/views/testDetail/index.vue"),
    },
  ],
});

export default router;
