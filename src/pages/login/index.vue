<!-- 登陆界面 -->
<template>
  <div class="login-container">
    <el-form ref="loginForm"
             :model="loginForm"
             :rules="loginRules"
             class="login-form">
      <div class="title-container">
        <h3 class="title">后台管理系统</h3>
      </div>
      <el-form-item prop="username">
        <el-input type="text"
                  v-model="loginForm.username"
                  placeholder="请输入用户名"
                  auto-complete="on"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password"
                  v-model="loginForm.password"
                  placeholder="请输入密码"
                  auto-complete="on"
                  @keyup.enter.native="onLogin"></el-input>
      </el-form-item>
      <el-button :loading="loading"
                 type="primary"
                 @click.native.prevent="onLogin">登录</el-button>
      <div class="tips">
        <span>账号:admin</span>
        <span>密码:admin</span>
      </div>
      <div class="tips">
        <span>账号:admin</span>
        <span>密码:admin</span>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    const validateUser = (rule, value, cb) => {
      if (value === '') {
        cb(new Error('请输入用户名！'))
      } else {
        cb()
      }
    }
    const validatePsw = (rule, value, cb) => {
      if (value.length < 6) {
        cb(new Error('密码长度不得小于6位！'))
      } else {
        cb()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUser }],
        password: [{ required: true, trigger: 'blur', validator: validatePsw }]
      },
      loading: false
    }
  },
  methods: {
    onLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('loginByUsername', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          return false;
        }
      })
    }
  }
}

</script>
<style lang='scss' scoped>
@import '../../styles/mixin.scss';
.login-container {
  @include allcover();
  background: #2d3a4b;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 530px;
    max-width: 100%;
    padding: 35px 35px 15px;
    margin: 120px auto;
    .title-container {
      .title {
        @include sc(26px, #fff);
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: 900;
      }
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .el-button {
      width: 100%;
      margin-bottom: 30px;
    }
    .tips {
      @include sc(14px, #fff);
      margin: 8px 0;
      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
  }
}
</style>