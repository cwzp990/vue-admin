<!-- 整体布局 -->
<template>
  <div class="app-wrapper">
    <navbar />
    <div class="main-container">
      <sidebar class="sidebar-container" />
      <tags-view />
      <app-main />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, TagsView } from './children'
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView
  }
}

</script>
<style lang='scss' scoped>
@import '../../styles/mixin.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  @include wh(100%, 100%);
}
</style>