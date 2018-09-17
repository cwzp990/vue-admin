<!-- 整体布局 -->
<template>
  <div class="app-wrapper">
    <navbar />
    <sidebar class="sidebar-container" />
    <div class="main-container">
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
  .sidebar-container {
    transition: width 0.3s;
    float: left;
    width: 180px;
    min-height: calc(100vh - 50px);
    background: #000;
  }
  .main-container {
    transition: margin-left 0.3s;
    float: left;
    width: calc(100vw - 185px);
  }
}
</style>