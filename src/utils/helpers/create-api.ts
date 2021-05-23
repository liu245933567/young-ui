import createAPIComponent from "vue-create-api";

export default function createAPI(Vue, Component, events, single = false) {
  Vue.use(createAPIComponent, { componentPrefix: "jt-", apiPrefix: "$" });
  const api = Vue.createAPI(Component, events, single);
  return api;
}
