<template>
  <section class="demo1">
    <jt-button @click="base">
      基础
    </jt-button>
    <jt-button @click="customOrder">
      自定义顺序
    </jt-button>
  </section>
</template>

<script>
export default {
  methods: {
    base() {
      const picker = this.$datePicker({
        title: '日期选择',
        min: new Date(2008, 7, 8),
        max: new Date(2020, 9, 20),
        value: new Date(),
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      });
      picker.show();
    },
    customOrder() {
      const picker = this.$datePicker({
        title: 'Time Picker',
        min: [8, 0, 0],
        max: [20, 59, 59],
        value: new Date(),
        startColumn: 'hour',
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      });
      picker.show();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
