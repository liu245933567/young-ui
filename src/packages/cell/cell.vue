<template>
  <div class="jt-cell" @click="cellClickHandler">
    <div class="jt-cell-inner-wrapper">
      <div class="jt-cell-left-wrapper">
        <slot name="left">
          {{ title }}
        </slot>
      </div>
      <div class="jt-cell-right-wrapper">
        <slot name="right">
          {{ value }}
          <!-- <img v-if="to" class="jt-cell-goto-icon" src="../../../src/assets/images/right-arrow.png"> -->
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jt-cell',
  props: {
    title: {
      type: String
    },
    value: {
      type: String
    },
    to: {
      type: String
    }
  },
  methods: {
    cellClickHandler() {
      if(this.to) {
        location.href = this.to
      }
    }
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
