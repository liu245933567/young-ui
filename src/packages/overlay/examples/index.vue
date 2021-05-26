<template>
  <div class="demo">
    <h2>基础用法</h2>
    <jt-overlay show>
      <div class="test">
        awdfwafwaf
      </div>
    </jt-overlay>
  </div>
</template>

<script>
export default {
  name: 'demo-overlay'
};
</script>

<style scoped lang="scss">
.test {
  position: absolute;
  width: 3rem;
  height: 3rem;
  background: #fff;
}
</style>
