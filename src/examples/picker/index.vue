<template>
  <div class="demo">
    <h2>基础用法</h2>
    <!-- <jt-button @click.native="sigle">单行Picker</jt-button> -->
  </div>
</template>

<script>
export default {
  name: 'demo-picker',
  components: {},
  data() {
    return {};
  },
  watch: {},
  mounted() {},
  methods: {
    sigle() {
      console.log('this.$picker', this.$picker);
      this.$picker({
        slots: [
          {
            type: 'data',
            flex: 1,
            values: ['北京', '上海', '广州', '深圳', '杭州'],
            textAlign: 'center'
          }
        ],
        onConfirm: (instance, datas) => {
          alert(datas.slot0);
          instance.value = false;
        }
      });
    }
  }
};
</script>

<style scoped lang="scss"></style>
