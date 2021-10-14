import Vue from "vue";
import VueRouter from "vue-router";
import Reminders from "../views/Reminders.vue";
//import About from "../views/About.vue";
import Calendar from "../views/Calendar.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";

import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Reminders",
    component: Reminders,
    beforeEnter: (to, from, next) => {
      if (store.state.session == undefined) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
