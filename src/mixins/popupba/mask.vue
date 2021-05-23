<template>
  <transition name="wd-mask-fade">
    <div
      v-if="show"
      class="wd-mask"
      :style="maskStyle"
      @click="handleClick"
    />
  </transition>
</template>

<script>
export default {
  name: 'wd-mask',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function
    },
    opacity: {
      type: Number,
      default: 0.4
    },
    color: {
      type: String,
      default: '#000'
    },
    zIndex: {
      type: Number
    }
  },
  data() {
    return {};
  },
  computed: {
    maskStyle() {
      return {
        opacity: this.opacity,
        'background-color': this.color,
        position: this.fixed ? 'fixed' : '',
        'z-index': this.zIndex
      };
    }
  },
  methods: {
    handleClick() {
      if (this.onClick) {
        this.onClick();
      }
    }
  }
};
</script>

<style lang="scss">
.wd-mask {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  &-fade-enter-active,
  .wd-mask-fade-leave-active {
    transition: opacity 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &-fade-enter,
  &-fade-leave-active {
    opacity: 0 !important;
  }
}
</style>
