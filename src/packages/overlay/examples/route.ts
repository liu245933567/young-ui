import { RouteConfig } from "vue-router";

const NAME = 'overlay';

const route: RouteConfig = {
  path: `/${NAME}`,
  name: NAME,
  component: () => import('./index.vue')
  // children: [{
  //   path: '/',
  //   name: `${NAME}-index`,

  // }],
};

export default route;
