import { RouteConfig } from "vue-router";

const NAME = 'loading';

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
