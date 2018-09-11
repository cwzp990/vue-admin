<!-- 401 -->
<template>
  <div class="errPage-container">
    <el-button type="primary">返回</el-button>
    <el-row>
      <el-col :span="12"
              class="tips">
        <h1 class="title">OOPS!</h1>
        <p class="text">我们似乎无法找到您要的页面。</p>
        <p class="code">错误代码:404</p>
      </el-col>
      <el-col :span="12">
        <div class="img-container">
          <img src="../../assets/401.gif"
               alt="401">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'errPage_401'
}

</script>
<style lang='scss' scoped>
@import '../../styles/mixin.scss';
.errPage-container {
  width: 800px;
  max-width: 100%;
  margin: 100px auto;
  .tips {
    .title {
      font-size: 125px;
      margin: 25px 0 15px;
    }
    .text {
      font-size: 28px;
      margin: 25px 0 15px;
    }
    .code {
      @include sc(14px, #767676);
      margin: 25px 0 15px;
    }
  }
}
</style>