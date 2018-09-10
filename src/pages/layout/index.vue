<!-- 整体布局 -->
<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <navbar />
      <tags-view />
      <app-main />
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, TagsView } from './children'
export default {
  name: 'Layout',
  data () {
    return {
    };
  },

  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView
  },

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
@import '../../styles/mixin.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  @include wh(100%,100%);
}
</style>