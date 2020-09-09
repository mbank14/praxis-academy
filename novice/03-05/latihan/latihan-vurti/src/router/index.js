import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    }
  },
  {
    path: "/lop",
    name: "Lop",
    component: function() {
      return import(/* webpackChunkName: "lop" */ "../components/Lop.vue");
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
