<template>
  <router-view />
</template>
<script>
export default {
  name: 'app'
};
</script>

<style lang="scss">
::selection {
  background: $doc-default-color;
  color: #fff;
}
#doc {
  background: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: $doc-header-height;
}
</style>