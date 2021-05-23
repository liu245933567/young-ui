import Picker from './picker.vue';
import creatApi from '@utils/helpers/create-api';

Picker.install = function (Vue) {
  Vue.component(Picker.name, Picker);
  creatApi(Vue, Picker, ['select', 'value-change', 'cancel', 'change']);
};

export default Picker;

