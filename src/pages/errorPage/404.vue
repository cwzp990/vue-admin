<!-- 404 -->
<template>
  <div class="errPage-container">
    <el-row>
      <el-col :span="12">
        <div class="img-container">
          <img src="../../assets/404.png"
               alt="404"
               width="100%"
               height="100%">
        </div>
      </el-col>
      <el-col :span="12"
              class="tips">
        <h1 class="title">OOPS!</h1>
        <p class="text">网管说这个页面你不能进...</p>
        <p class="code">请检查你输入的地址是否正确，点击以下按钮返回主页或发送错误报告</p>
        <el-button type="primary"
                   round>返回首页</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'errPage_404'
}

</script>
<style lang='scss' scoped>
@import '../../styles/mixin.scss';
.errPage-container {
  width: 800px;
  max-width: 100%;
  margin: 200px auto;
  .img-container {
    @include wh(100%, 100%);
  }
  .tips {
    .title {
      @include sc(32px, #1482f0);
      line-height: 40px;
      margin-bottom: 20px;
      font-weight: 900;
    }
    .text {
      @include sc(20px, #222);
      line-height: 24px;
      margin-bottom: 10px;
      font-weight: 900;
    }
    .code {
      @include sc(13px, #767676);
      line-height: 21px;
      margin-bottom: 30px;
    }
  }
}
</style>