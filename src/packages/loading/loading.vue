<template>
  <div class="jt-loading">
    <span
      class="jt-loading-spinners"
      :style="style"
    >
      <i
        v-for="item in balde"
        :key="item"
        class="jt-loading-spinners-item"
      />
    </span>
  </div>
</template>

<script>
export default {
  name: 'jt-loading',
  props: {
    size: {
      type: Number,
      default: 12
    }
  },
  data() {
    return {
      balde: 12
    };
  },
  computed: {
    style() {
      if (!this.size) {
        return;
      }
      const value = `${this.size}px`;
      return {
        width: value,
        height: value
      };
    }
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
