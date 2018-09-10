<!-- 页面标签 -->
<template>
  <div class="tags-view-container">
  </div>
</template>

<script>
export default {
  name: 'TagsView'
}

</script>
<style lang='scss' scoped>
@import '../../../styles/mixin.scss';
.tags-view-container {
  @include wh(100%, 34px);
  background: #fff;
  border-bottom: 1px solid $juzi;
}
</style>