import Vue from "vue";
import VueRouter from "vue-router";
import Reminders from "../views/Reminders.vue";
//import About from "../views/About.vue";
import Calendar from "../views/Calendar.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Reminders",
    component: Reminders,
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
