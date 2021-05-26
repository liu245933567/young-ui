import Scroll from "./scroll";
import Picker from "./picker";
import Button from "./button";
import Icon from "./icon";
import Loading from "./loading";
import DatePicker from "./date-picker";
import Overlay from "./overlay";

const components = [Scroll, Picker, Button, DatePicker, Icon, Loading, Overlay];

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

export { install, Scroll, Picker, DatePicker, Button, Icon, Loading, Overlay };
