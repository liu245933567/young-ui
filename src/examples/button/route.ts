import { RouteConfig } from "vue-router";

const route: RouteConfig = {
  path: "/button",
  name: "button",
  component: () => import('./index.vue'),
  children: [{
    path: '/',
    name: 'button-index',
    component: () => import('./linktest.vue')
  },
  {
    path: '/test',
    name: 'button-test',
    component: () => import('./test.vue')
  }],
};

export default route;
