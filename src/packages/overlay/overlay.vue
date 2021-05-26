<template>
  <transition name="jt-fade">
    <div
      v-show="show"
      :style="style"
      :class="['jt-overlay', className]"
      @touchmove="lockScroll ? preventTouchMove : () => {}"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
const COMPONENT_NAME = 'jt-overlay';
import { isDef } from '@utils/common';
import { preventDefault } from '@utils/enent';
export default {
  name: COMPONENT_NAME,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: [Number, String],
      default: undefined
    },

    duration: {
      type: [Number, String, null],
      default: null
    },
    className: {
      type: String,
      default: ''
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    customStyle: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    style() {
      return {
        zIndex: this.zIndex,
        ...this.customStyle,
        ...(isDef(this.duration) && {
          animationDuration: `${this.duration}s`
        })
      };
    }
  },
  methods: {
    preventTouchMove(event) {
      preventDefault(event, true);
    }
  }
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>