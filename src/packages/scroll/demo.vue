<template>
  <div class="demo">
    <h2>基础用法</h2>
    <jt-scroll class="scroll-wrapper-1" :options="{pullDownRefresh: true}">
      <ul>
        <li v-for="item in mockdata1" :key="item">{{item}}</li>
      </ul>
    </jt-scroll>
  </div>
</template>

<script>
export default {
  name: "demo-icon",
  data() {
    return {
      mockdata1: [...new Array(100).keys()].map(i => `假数据 ---- ${i}`)
    };
  },
  components: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.scroll-wrapper-1 {
  height: 5rem;
  background: #fff;
  ul {
    li {
      line-height: .8rem;
      padding: 0 .266667rem /* 20/75 */;
      font-size: .373333rem /* 28/75 */;
    }
  }
}
</style>
