<template>
  <i
    :class="`jt-icon i-${name}`"
    :style="style"
  />
</template>

<script>
export default {
  name: 'jt-icon',

  props: {
    name: {
      type: String,
      default: '',
      required: true
    },
    size: {
      type: String,
      default: '.186667rem'
    }
  },
  computed: {
    style() {
      return {
        fontSize: this.size
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/font/iconfont.css";
</style>
