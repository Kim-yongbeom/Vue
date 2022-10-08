import Vue from "vue";
import VueRouter from "vue-router";
import route from "./route";

Vue.use(VueRouter);

const routes = [...route];

export const router = new VueRouter({
  mode: 'history',
  routes,
});
