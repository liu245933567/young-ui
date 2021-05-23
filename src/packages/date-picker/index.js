import DatePicker from './date-picker.vue';
import creatApi from '@utils/helpers/create-api';

DatePicker.install = function (Vue) {
  Vue.component(DatePicker.name, DatePicker);
  creatApi(Vue, DatePicker, ['select', 'cancel', 'change']);
};

export default DatePicker;

