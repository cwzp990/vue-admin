<!-- 列表 -->
<template>
  <div class="list">
    <el-form :inline="true"
             :model="param"
             class="sosoparam">
      <el-form-item label="地铁线路">
        <el-input v-model="param.line"
                  placeholder="线路名称"></el-input>
      </el-form-item>
      <el-form-item label="开通标识">
        <el-select v-model="param.mark"
                   placeholder="请选择">
          <el-option label="已开通"
                     value="1"></el-option>
          <el-option label="规划建设中"
                     value="0"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-table>
      <el-table-column label="地铁线路"></el-table-column>
      <el-table-column label="排序值"></el-table-column>
      <el-table-column label="开通标识"></el-table-column>
      <el-table-column label="总站点数"></el-table-column>
      <el-table-column label="站点管理"></el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      param: {
        line: '',
        mark: ''
      }
    }
  }
}

</script>
<style lang='scss' scoped>
</style>