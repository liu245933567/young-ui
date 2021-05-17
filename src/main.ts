import Vue from "vue";
import Button from "./packages/button/index.vue";
import Icon from "./packages/icon/index.vue";
import Cell from "./packages/cell/index.vue";
import Picker from "./packages/picker";

function install() {
  const packages = [Button, Icon, Cell, Picker];
  packages.forEach((item: any) => {
    if (item.install) {
      Vue.use(item);
    } else if (item.name) {
      Vue.component(item.name, item);
    }
  });
}
export { Button, Icon };
export default { install, version: "3.0.0-beta.14" };
