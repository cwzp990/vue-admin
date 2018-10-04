<!-- 技能树 -->
<template>
  <div class="skill-tree">
    <div class="img-wrapper">
      <img src="../../assets/box-card.png"
           width="100%"
           height="100%">
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
</style>
