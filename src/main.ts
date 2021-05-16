import Vue from "vue";
import Button from "./packages/button/index.vue";
import Icon from "./packages/icon";

function install() {
  const packages = [Button, Icon];
  packages.forEach((item: any) => {
    console.log({...item})
    if (item.install) {
      Vue.use(item);
    } else if (item.name) {
      console.log('item.name = ', item.name)
      Vue.component(item.name, item);
    }
  });
}
export { Button, Icon };
export default { install, version: "3.0.0-beta.14" };
