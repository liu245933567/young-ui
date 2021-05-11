import { App } from 'vue';
import Toast from './packages/toast/index.vue';
import Button from './packages/button/index.vue';

function install(app: App) {
  const packages = [Toast,Button];
  packages.forEach((item:any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}
export { Toast,Button  };
export default { install, version:'1.0.0'};