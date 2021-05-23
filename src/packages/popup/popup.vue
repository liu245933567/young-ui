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
$popup-mask-bgc: rgb(37, 38, 45);
$popup-mask-opacity: 0.4;

.jt-popup {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  pointer-events: none;

  .jt-popup_mask {
    pointer-events: auto;

    .jt-popup-mask {
      display: block;
    }
  }

  .jt-popup-mask, .jt-popup-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .jt-popup-mask {
    display: none;
    overflow: hidden;
    background-color: $popup-mask-bgc;
    opacity: $popup-mask-opacity;
    pointer-events: auto;

    // fix some android webview opacity render bug
    &::before {
      content: '.';
      display: block;
      width: 1px;
      height: 1px;
      background-color: rgba(0, 0, 0, 0.1);
      margin-left: -10px;
    }
  }

  .jt-popup-container {
    transform: translate(100%, 100%);
  }

  .jt-popup-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    transform: translate(-100%, -100%);
    pointer-events: auto;
  }

  .jt-popup-center, .jt-popup-right, .jt-popup-left {
    .jt-popup-content {
      top: -50%;
      left: -50%;
      width: auto;
      max-width: 100%;
      transform: translate(0, 0);
    }
  }

  .jt-popup-right, .jt-popup-left {
    .jt-popup-content {
      height: 100%;
      top: -100%;
    }
  }

  .jt-popup-center {
    .jt-popup-content {
      transform: translate(-50%, -50%);
    }
  }

  .jt-popup-top {
    .jt-popup-content {
      top: -100%;
      left: -100%;
      transform: translate(0, 0);
    }
  }

  .jt-popup-right {
    .jt-popup-content {
      top: -100%;
      right: 100%;
    }
  }

  .jt-popup-left {
    .jt-popup-content {
      left: -100%;
    }
  }
}
</style>
