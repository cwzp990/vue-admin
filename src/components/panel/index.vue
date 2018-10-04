<!-- 面板组件 -->
<template>
  <div class="panel-wrapper">
    <div class="header">
      <h3>{{title}}</h3>
      <div class="btn">
        <svg-icon icon-class="refresh"></svg-icon>
        <svg-icon icon-class="max"></svg-icon>
        <svg-icon icon-class="min"></svg-icon>
        <svg-icon icon-class="close"></svg-icon>
      </div>
    </div>
    <div class="main"
         v-show="mainShow">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel',
  props: {
    title: {
      type: String,
      default: ''
    },
    mainShow: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../styles/mixin.scss';
.panel-wrapper {
  @include wh(100%, 100%);
  .header {
    display: flex;
    justify-content: space-between;
    background: #fafafa;
    color: #666;
    line-height: 40px;
    .btn {
      display: flex;
    }
  }
}
</style>
