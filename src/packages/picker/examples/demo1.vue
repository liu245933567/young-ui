<template>
  <section class="demo1">
    <jt-button @click="openSigle">
      单行
    </jt-button>
  </section>
</template>

<script>
export default {
  methods: {
    openSigle() {
      const column1 = [
        { text: '剧毒', value: '剧毒' },
        { text: '蚂蚁', value: '蚂蚁' },
        { text: '幽鬼', value: '幽鬼' }
      ];
      const picker = this.$picker({
        title: 'Picker',
        data: [column1],
        maskClosable: true
      });
      picker.show();
    }
  }
};
</script>

<style scoped lang="scss">
</style>
