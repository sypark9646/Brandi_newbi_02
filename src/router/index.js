import Vue from "vue";
import Router from "vue-router";
import Exhibition from "../components/exhibition";
import Ing from "../components/ing";
import End from "../components/end";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "exhibition",
      component: Exhibition,
      children: [
        {
          path: "",
          name: "ing",
          component: Ing,
        },
        {
          path: "ing",
          name: "ing",
          component: Ing,
        },
        {
          path: "end",
          name: "end",
          component: End,
        },
      ],
    },
  ],
});
