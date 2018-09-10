<!-- 右侧主体部分 -->
<template>
  <div class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='scss' scoped>
.app-main {
  // 84 = navbar + tags-view = 50 + 34
  min-height: calc(100vh-84px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>