<!-- 头部导航 -->
<template>
  <el-menu class="navbar">
    <div class="navbar-branding">
      <a href="#"
         class="navbar-brand">
        <h1 class="title">VueAdmin</h1>
      </a>
      <span class="toggle-btn">
        <svg-icon icon-class="menu"></svg-icon>
      </span>
    </div>
    <el-dropdown class="avatar-container"
                 trigger="click">
      <div class="avatar-wrapper">
        <img src="../../../assets/avatar.gif"
             alt="user"
             width="100%"
             height="100%">
      </div>
      <el-dropdown-menu slot="dropdown"
                        class="user-dropdown">
        <el-dropdown-item>
          消息
        </el-dropdown-item>
        <el-dropdown-item>
          好友
        </el-dropdown-item>
        <el-dropdown-item>
          账户设置
        </el-dropdown-item>
        <el-dropdown-item>
          通知
        </el-dropdown-item>
        <el-dropdown-item divided>
          退出
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
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
@import '../../../styles/mixin.scss';
.navbar {
  height: 50px;
  line-height: 50px;
  .navbar-branding {
    position: relative;
    float: left;
    @include wh(180px, 100%);
    margin-right: 10px;
    overflow: hidden;
    .navbar-brand {
      display: inline-block;
      @include wh(105px, 50px);
      padding-left: 15px;
      @include sc(17px, #666);
      line-height: 50px;
    }
    .toggle-btn {
      float: right;
      cursor: pointer;
      @include wh(60px, 100%);
      @include sc(15px, #666);
      line-height: 50px;
      text-align: center;
      .svg-icon {
        @include svg(14px, #666);
      }
    }
  }
  .avatar-container {
    float: right;
    margin-right: 30px;
    height: 50px;
    .avatar-wrapper {
      @include wh(50px, 50px);
      border-radius: 10px;
      overflow: hidden;
      cursor: pointer;
    }
  }
}
</style>