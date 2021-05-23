<template>
  <button
    :type="nativeButtonType"
    :disabled="disabled"
    :class="[
      'jt-button',
      `jt-button-${type}`,
      {
        'jt-button-ghost': ghost,
      },
    ]"
    @click="handleClick"
  >
    <label class="jt-button-text"><slot /></label>
  </button>
</template>

<script>
/*
 * jt-button
 * @desc 按钮
 * @param nativeButtonType {string} button 原生类型
 * @param type {string} 样式类型
 * @param disabled {boolean} 是否为禁用状态
 * @param ghost {boolean} 是否为幽灵按钮
 */

export default {
  name: 'jt-button',
  props: {
    nativeButtonType: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'gray', 'default', 'dark'].indexOf(value) > -1;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    ghost: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(event) {
      if (this.disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      this.$emit('click', event);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>