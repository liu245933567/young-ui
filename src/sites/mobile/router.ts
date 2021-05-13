import Vue from "vue";
import Router, { RouteConfig } from "vue-router";
import Index from './components/Index.vue';

Vue.use(Router);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: '/',
    component: Index
  }
];

//@ts-ignore
const modulesPage = import.meta.glob('/src/packages/**/demo.vue');
for (const path in modulesPage) {
  let name = (/packages\/(.*)\/demo.vue/.exec(path) as any[])[1];
  routes.push({
    path: '/' + name,
    component: modulesPage[path],
    name
  });
}

routes.push({
  name: 'NotFound',
  path: '/:path(.*)+',
  redirect: () => '/'
});

const router = new Router({
  routes
});

export default router;
