import { RouteConfig } from "vue-router";

const route: RouteConfig = {
  path: "/cell",
  name: "cell",
  children: [{
    path: '/',
    name: 'cell-index',
    component: () => import('./index.vue')
  }],
};

export default route;
