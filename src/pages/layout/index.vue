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
import { Navbar, Sidebar, AppMain, TagsView } from './components'
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
</style>