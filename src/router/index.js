import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: () => import("@/views/Home.vue"), name: "Home" },
  {
    path: "/about",
    component: () => import("@/views/About.vue"),
    name: "About",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
