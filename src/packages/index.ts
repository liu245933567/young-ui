import Scroll from "./scroll";
import Picker from "./picker";
import Button from "./button";

const components = [Scroll, Picker, Button];

function install(Vue) {
  //@ts-ignore
  if (install.installed) {
    return;
  }
  //@ts-ignore
  install.installed = true;
  components.forEach((Component) => {
    Component.install(Vue);
  });
}

export { install, Scroll, Picker, Button };
