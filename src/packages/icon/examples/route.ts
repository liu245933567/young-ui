import { RouteConfig } from "vue-router";

const route: RouteConfig = {
  path: "/icon",
  name: "icon",
  component: () => import('./index.vue')
  // children: [{
  //   path: '/',
  //   name: 'icon-index',
  //   component: () => import('./index.vue')
  // }],
};

export default route;
