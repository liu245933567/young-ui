import Icon from './icon.vue';

Icon.install = function (Vue) {
  Vue.component(Icon.name, Button);
};

export default Icon;