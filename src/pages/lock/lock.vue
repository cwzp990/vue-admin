<!-- 锁屏界面 -->
<template>
  <div class="lock">
    <div class="logo">VueAdmin</div>
    <div class="lock-main">
      <p>欢迎您回来</p>
      <p>使用图案进行解锁</p>
      <div class="lock-box">
        <ul>
          <li v-for="(item,index) in list" :key="index" v-if="index<=8">
            <div class="dots"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lock',
  data () {
    return {
      time: ''
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../styles/mixin.scss';
.lock {
}
</style>
