<!-- 整体布局 -->
<template>
  <div :class="classObj"
       class="app-wrapper">
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
  computed: {
    sidebar () {
      return this.$store.state.app.sidebar
    },
    classObj () {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation
      }
    }
  },
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
    height: calc(100vh - 50px);
    background: #304156;
  }
  .main-container {
    transition: margin-left 0.3s;
    float: left;
    width: calc(100vw - 185px);
  }
}

.hideSidebar {
  .sidebar-container {
    width: 48px;
  }
  .main-container {
    float: left;
    width: calc(100vw - 53px);
  }
}
</style>