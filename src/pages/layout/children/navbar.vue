<!-- 头部导航 -->
<template>
  <el-menu class="navbar">
    <div class="navbar-branding">
      <a href="#"
         class="navbar-brand">
        <h1 class="title">VueAdmin</h1>
      </a>
      <span class="toggle-btn"
            @click="toogleSidebar">
        <svg-icon icon-class="menu"></svg-icon>
      </span>
    </div>
    <div class="btn-left"
         @click="onFull">
      <svg-icon icon-class="full"></svg-icon>
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
          Welcome VueAdmin
        </el-dropdown-item>
        <el-dropdown-item>
          <svg-icon icon-class="info"></svg-icon>
          信息
          <span class="count">{{user.info}}</span>
        </el-dropdown-item>
        <el-dropdown-item>
          <svg-icon icon-class="friends"></svg-icon>
          好友
          <span class="count">{{user.friends}}</span>
        </el-dropdown-item>
        <el-dropdown-item>
          <svg-icon icon-class="setting"></svg-icon>
          账户设置
        </el-dropdown-item>
        <el-dropdown-item divided>
          <svg-icon icon-class="logout"></svg-icon>
          退出
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="btn-right">
      <a target="_blank"
         href="https://github.com/cwzp990/vue-admin">
        <svg-icon icon-class="github"
                  @click="gotoAddress"></svg-icon>
      </a>
      <svg-icon icon-class="signal"></svg-icon>
    </div>
  </el-menu>
</template>

<script>
import SwitchBtn from '@/components/switch/index'
export default {
  name: 'NavBar',
  data () {
    return {
      user: {
        info: 5,
        friends: 6
      }
    }
  },
  methods: {
    toogleSidebar () {
      this.$store.dispatch('toogleSidebar')
    },
    onFull () {
      let el = document.documentElement
      let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen
      if (typeof rfs != "undefined" && rfs) {
        rfs.call(el)
      }
    },
    gotoAddress () {
    }
  },
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
  border-bottom: 1px solid #e7e7e7;
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
        @include svg(24px, #666);
      }
    }
  }
  .btn-left {
    display: inline-block;
    .svg-icon {
      @include svg(20px, #666);
      cursor: pointer;
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
  .btn-right {
    float: right;
    .svg-icon {
      @include svg(20px, #666);
      margin-right: 15px;
      cursor: pointer;
    }
  }
}

.el-dropdown-menu__item {
  width: 150px;
  text-align: left;
  .svg-icon {
    @include svg(16px, #666);
  }
  .count {
    display: inline-block;
    margin-top: 10px;
    @include wh(18px, 18px);
    border-radius: 50%;
    overflow: hidden;
    background: $juzi;
    color: #fff;
    line-height: 18px;
    text-align: center;
    float: right;
  }
}

.el-dropdown-menu__item:first-child {
  @include sc(12px, #666);
  font-weight: 700;
}
</style>