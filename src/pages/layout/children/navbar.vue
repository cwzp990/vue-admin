<!-- 头部导航 -->
<template>
  <div class="navbar">
    <div class="navbar-branding">
      <a href="#">
        <h1>VueAdmin</h1>
      </a>
      <span class="toggle-btn">
        <svg-icon icon-class="menu"></svg-icon>
      </span>
    </div>
  </div>
</template>

<script>
import SwitchBtn from '@/components/switch/index'
export default {
  name: 'NavBar',
  components: {
    SwitchBtn
  }
}

</script>
<style lang='scss' scoped>
.navbar {
  height: 50px;
  line-height: 50px;
}
</style>