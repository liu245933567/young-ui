import Vue from 'vue'
import PickerComponent from './Picker.vue'

const PickerConstructor = Vue.extend(PickerComponent)

const init = (propsData) => {
  return new PickerConstructor({
    propsData
  }).$mount(document.createElement('div'))
}

const Picker = (options = {}) => {
  const instance = init({
    showItemCount: options.showItemCount,
    slots: options.slots,
    transition: options.transition,
    maskOpacity: options.maskOpacity,
    maskColor: options.maskColor,
    confirmText: options.confirmText,
    cancelText: options.cancelText,
    title: options.title,
    isShowCancelButton: options.isShowCancelButton === undefined ? true : options.isShowCancelButton
  })
  instance.value = options.open || true
  instance.onMaskClick = options.onMaskClick ? options.onMaskClick.bind(null, instance) : (() => {})
  instance.onConfirm = options.onConfirm ? options.onConfirm.bind(null, instance, instance.datas) : (() => {instance.value = false})
  instance.onCancel = options.onCancel ? options.onCancel.bind(null, instance) : (() => {instance.value = false})
  instance.onShow = options.onShow ? options.onShow.bind(null, instance) : (() => {})
  instance.onHide = options.onHide ? options.onHide.bind(null, instance) : (() => {})
  instance.onChange = options.onChange ? options.onChange.bind(null, instance) : (() => {})
  document.body.appendChild(instance.$el)
  return instance
}

Vue.prototype.$picker = Picker;

export default Picker
