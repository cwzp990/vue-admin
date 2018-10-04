<!-- 面板组件 -->
<template>
  <div class="panel-wrapper">
    <div class="header">
      <h3 class="title">{{title}}</h3>
      <div class="btn">
        <svg-icon icon-class="refresh"
                  @click="onRefresh"></svg-icon>
        <svg-icon icon-class="max"
                  @click="onMax"></svg-icon>
        <svg-icon icon-class="min"
                  @click="onMin"></svg-icon>
        <svg-icon icon-class="close"
                  @click="onClose"></svg-icon>
      </div>
    </div>
    <div :id="wrapperName"
         class="wrapper"
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
    wrapperName: {
      type: String,
      default: 'charts-main'
    },
    mainShow: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onRefresh () {
      console.log('refresh')
    },
    onMax () {
      console.log('max')
    },
    onMin () {
      console.log('min')
    },
    onClose () {
      console.log('close')
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
    box-sizing: border-box;
    padding: 0 10px;
    .title {
      @include sc(12px, #666);
      font-weight: 700;
      line-height: 40px;
    }
    .btn {
      display: flex;
      align-items: center;
      .svg-icon {
        @include svg(14px, #b2b2b2);
        margin-right: 10px;
      }
    }
  }
  .wrapper {
    min-height: 300px;
  }
}
</style>
