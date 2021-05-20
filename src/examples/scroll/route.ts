import { RouteConfig } from "vue-router";

const NAME = 'scroll';

const route: RouteConfig = {
  path: `/${NAME}`,
  name: NAME,
  children: [{
    path: '/',
    name: `${NAME}-index`,
    component: () => import('./index.vue')
  }],
};

export default route;
