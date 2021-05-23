import { RouteConfig } from "vue-router";

const NAME = 'date-picker';

const route: RouteConfig = {
  path: `/${NAME}`,
  name: NAME,
  component: () => import('./index.vue'),
  children: [{
    path: '/',
    name: `${NAME}-index`,
    component: () => import('./demo1.vue')
  }],
};

export default route;
