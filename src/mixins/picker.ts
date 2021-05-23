export default {
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    cancelTxt: {
      type: String,
      default: ''
    },
    confirmTxt: {
      type: String,
      default: ''
    },
    swipeTime: {
      type: Number,
      default: 2500
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    _cancelTxt () {
      return this.cancelTxt || '取消'
    },
    _confirmTxt () {
      return this.confirmTxt || '确定'
    }
  }
}
