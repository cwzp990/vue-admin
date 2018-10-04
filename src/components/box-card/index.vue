<!-- 技能树 -->
<template>
  <div class="skill-tree">
    <div class="img-wrapper">
      <img src="../../assets/box-card.png"
           width="100%"
           height="100%">
      <div class="icon-wrapper">
        <div class="icon">
          <img src="../../assets/avatar.gif"
               width="100%"
               height="100%">
        </div>
      </div>
    </div>
    <div class="skills">
      <p>
        Vue
        <el-progress :percentage="70"></el-progress>
      </p>
      <p>
        JS
        <el-progress :percentage="50"></el-progress>
      </p>
      <p>
        CSS
        <el-progress :percentage="50"></el-progress>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill'
}
</script>

<style lang='scss' scoped>
@import '../../styles/mixin.scss';
.skill-tree {
  .img-wrapper {
    position: relative;
    img {
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.1);
      }
    }
    .icon-wrapper {
      position: absolute;
      left: 10px;
      bottom: -30px;
      @include wh(75px, 75px);
      border-radius: 50%;
      background: #fff;
      .icon {
        @include center;
        z-index: 999;
        @include wh(60px, 60px);
        border-radius: 50%;
        overflow: hidden;
        &:hover {
          transform: rotate(-110deg);
        }
      }
    }
  }
  .skills {
    margin-top: 35px;
  }
}
</style>
