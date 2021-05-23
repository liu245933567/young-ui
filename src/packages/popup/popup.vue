<template>
  <div
    v-show="isVisible"
    class="jt-popup"
    :style="{ 'z-index': zIndex }"
    :class="rootClass"
  >
    <div
      class="jt-popup-mask"
      @touchmove.prevent
      @click="maskClick"
    >
      <slot name="mask" />
    </div>
    <div
      class="jt-popup-container"
      :class="containerClass"
      @touchmove.prevent
    >
      <div
        v-if="$slots.default"
        class="jt-popup-content"
      >
        <slot />
      </div>
      <div
        v-else
        class="jt-popup-content"
        v-html="content"
      />
    </div>
  </div>
</template>

<script>
import visibilityMixin from '@mixins/visibility';
import popupMixin from '@mixins/popup';
const COMPONENT_NAME = 'jt-popup';
const EVENT_MASK_CLICK = 'mask-click';

export default {
  name: COMPONENT_NAME,
  mixins: [visibilityMixin, popupMixin],
  props: {
    type: {
      type: String,
      default: ''
    },
    mask: {
      type: Boolean,
      default: true
    },
    content: {
      type: String,
      default: ''
    },
    center: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  },
  computed: {
    rootClass() {
      const cls = {
        'jt-popup_mask': this.mask
      };
      if (this.type) {
        cls[`jt-${this.type}`] = true;
      }
      return cls;
    },
    containerClass() {
      const center = this.center;
      const position = this.position;
      if (position) {
        return {
          [`jt-popup-${position}`]: true
        };
      }
      if (center) {
        return {
          'jt-popup-center': true
        };
      }
      return '';
    }
  },
  methods: {
    maskClick(e) {
      this.$emit(EVENT_MASK_CLICK, e);
      if (this.maskClosable) {
        this.hide();
      }
    }
  }
};
</script>

<style lang="scss">
@import './index.scss'
</style>
