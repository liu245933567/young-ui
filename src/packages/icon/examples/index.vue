<template>
  <div class="demo">
    <div class="icons-wrapper">
      <div
        v-for="icon in glyphs"
        :key="icon.font_class"
      >
        <jt-icon
          :name="icon.font_class"
          size="1rem"
          class="icon-cus"
        />
        <div class="icon-name">
          {{ icon.font_class }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { glyphs } from '@/styles/font/iconfont.json';
export default {
  name: 'demo-button',
  components: {},
  data() {
    return {
      glyphs
    };
  },
  watch: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.icons-wrapper {
  display: flex;
  flex-wrap: wrap;
  & > div {
    width: 25%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: .2rem;
    padding-bottom: .3rem;
    .icon-cus {
      color: #333333;
    }
    .icon-name {
      height: 1rem;
      text-align: center;
    }
  }
}
</style>
