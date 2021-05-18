<template>
  <div class="jt-loading">
    <span class="jt-loading-spinners" :style="style">
      <i class="jt-loading-spinners-item" v-for="item in balde" :key="item"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "jt-loading",
  data() {
    return {
      balde: 12,
    };
  },
  props: {
    size: {
      type: Number,
    },
  },
  computed: {
    style() {
      if (!this.size) {
        return;
      }
      const value = `${this.size}px`;
      return {
        width: value,
        height: value,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
