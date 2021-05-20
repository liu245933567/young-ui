<template>
  <section class="link">
    <button @click="toCkeck">
      点击
    </button>
  </section>
</template>

<script>
export default {
 name: 'link',
  components: {},
  data() {
    return {

    };
  },
  watch: {},
  mounted() {},
  methods: {
     toCkeck() {
      this.$router.push({path: '/test'});
    }
  }
};
</script>

<style scoped lang="scss">

</style>
