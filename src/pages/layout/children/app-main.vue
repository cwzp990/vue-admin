<!-- 右侧主体部分 -->
<template>
  <div class="app-main">
    <transition name="fade-transform"
                mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppMain'
}

</script>
<style lang='scss' scoped>
.app-main {
  // 84 = navbar + tags-view = 50 + 34 + 1
  min-height: calc(100vh - 85px);
  position: relative;
  overflow-y: auto;
  padding: 10px 20px;
  box-sizing: border-box;
}
</style>