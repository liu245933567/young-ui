<template>
  <transition
    :name="pickerTransition"
    @after-enter="onShow()"
    @after-leave="onHide()"
  >
    <div
      class="jt-picker"
      ref="popup"
      v-if="visible"
      :style="{ 'z-index': zIndex }"
    >
      <header class="jt-picker-header">
        <p
          class="jt-picker-header-cancel"
          v-if="isShowCancelButton"
          @click="onCancel"
        >
          {{ cancelText }}
        </p>
        <p class="jt-picker-header-confirm" @click="onConfirm">
          {{ confirmText }}
        </p>
        <p class="jt-picker-header-title" v-if="title">{{ title }}</p>
      </header>
      <div
        class="jt-picker-slots-container"
        :style="`height: ${containerHeight}px;`"
      >
        <jt-picker-slot
          v-for="(slot, index) in slots"
          @getItemHeight="setItemHeight"
          @change="slotChangeHandler"
          :slotIndex="index"
          :showItemCount="showItemCount"
          :content="slot.content"
          :type="slot.type"
          :values="slot.values"
          :flex="slot.flex"
          :textAlign="slot.textAlign"
          :key="'slot' + index"
          :defaultValue="slot.defaultValue"
          :ref="'slot' + index"
        ></jt-picker-slot>
        <div class="jt-picker-slots-fence-upline"></div>
        <div class="jt-picker-slots-fence-downline"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import PickerSlot from "./PickerSlot.vue";
import Popup from "../../mixins/popup";

export default {
  name: "jt-picker",
  mixins: [Popup],
  components: {
    [PickerSlot.name]: PickerSlot,
  },
  props: {
    title: {
      type: [String, Number],
      default: "",
    },
    value: {
      type: Boolean,
      default: false,
    },
    transition: {
      type: String,
      default: "slide-bottom",
    },
    showItemCount: {
      type: Number,
      default: 5,
      validator(value) {
        return value > 0 && value % 2 === 1;
      },
    },
    slots: {
      type: Array,
    },
    confirmText: {
      type: [String, Number],
      default: "确定",
    },
    cancelText: {
      type: [String, Number],
      default: "取消",
    },
    isShowCancelButton: {
      type: Boolean,
      default: true,
    },
    onShow: {
      type: Function,
      default: () => {},
    },
    onHide: {
      type: Function,
      default: () => {},
    },
    onConfirm: {
      type: Function,
      default: () => {},
    },
    onCancel: {
      type: Function,
      default: () => {},
    },
    onMaskClick: {
      type: Function,
      default: () => {},
    },
    onChange: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      visible: false,
      lineHeight: 0,
      datas: {},
    };
  },
  computed: {
    pickerTransition() {
      if (this.transition) {
        return `picker-${this.transition}`;
      } else {
        return "";
      }
    },
    containerHeight() {
      return this.lineHeight * this.showItemCount;
    },
  },
  created() {},
  watch: {
    value(val) {
      this.visible = val;
    },
    visible(val) {
      this.$emit("input", val);
    },
  },
  mounted() {},
  methods: {
    maskClick() {
      this.onMaskClick();
    },
    slotChangeHandler(index, val) {
      if (`slot${index}` in this.datas) {
        let oldSlotValue = this.datas[`slot${index}`];
        this.$set(this.datas, `slot${index}`, val);
        this.$emit("change", this.datas);
        this.onChange({
          changedSlotIndex: index,
          oldSlotValue: oldSlotValue,
          newSlotValue: val,
          val: this.datas,
        });
      } else {
        this.$set(this.datas, `slot${index}`, val);
      }
    },
    setSlotValues(index, values, valueIndex) {
      values.index = valueIndex;
      this.slots[index].values = values;
    },
    setItemHeight(height) {
      this.lineHeight = height;
    },
  },
};
</script>

<style lang="scss">
$button-color: #4990e2;
$button-text-size: 32px;
$fence-color: #cdcdcd;
$picker-header-line-height: 1.173333rem /* 88/75 */;
$picker-padding: .533333rem /* 40/75 */;
$picker-slot-line-height: .96rem /* 72/75 */;

.jt-picker {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;

  &-header {
    overflow: hidden;
    line-height: $picker-header-line-height;
    align-items: center;

    &-cancel {
      float: left;
    }

    &-confirm {
      float: right;
    }

    &-title {
      color: #404040;
      text-align: center;
    }
  }

  & > p {
    padding: 0 $picker-padding;
    color: $button-color;
    font-size: $button-text-size; /* px */
  }

  &-slots-container {
    display: flex;
    position: relative;
    line-height: $picker-slot-line-height;
    -webkit-mask-box-image: linear-gradient(
      0deg,
      transparent,
      transparent 5%,
      #fff 20%,
      #fff 80%,
      transparent 95%,
      transparent
    );
    overflow: hidden;

    &-slots-fence-upline {
      position: absolute;
      height: 0;
      width: 100%;
      top: 50%;
      left: 0;
      border-top: 1px solid $fence-color; /* no */
      transform: translate3d(0, -36px, 0);
    }

    &-slots-fence-downline {
      position: absolute;
      height: 0;
      width: 100%;
      top: 50%;
      left: 0;
      border-top: 1px solid $fence-color; /* no */
      transform: translate3d(0, 36px, 0);
    }
  }

  .picker-slide-bottom-enter-active,
  .picker-slide-bottom-leave-active {
    transform: translate3d(0, 0, 0);
    opacity: 1;
    transition: all 0.3s;
  }

  .picker-slide-bottom-enter,
  .picker-slide-bottom-leave-active {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }
}
</style>
