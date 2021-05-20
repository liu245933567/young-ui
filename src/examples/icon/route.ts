import { RouteConfig } from "vue-router";

const route: RouteConfig = {
  path: "/icon",
  name: "icon",
  children: [{
    path: '/',
    name: 'icon-index',
    component: () => import('./index.vue')
  }],
};

export default route;
