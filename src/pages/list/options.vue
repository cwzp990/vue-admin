<!-- 列表配置页 -->
<template>
  <div class="listOptions">
    <div class="list-wrapper">
      <el-form :inline="true"
               :model="param"
               class="sosoparam">
        <el-form-item label="地铁站点">
          <el-input v-model="param.name"
                    placeholder="请输入站点名称"></el-input>
        </el-form-item>
        <el-button type="primary"
                   @click="$router.back(-1)">返回线路查询</el-button>
        <el-button type="parmary"
                   @click="mapForm = true">添加地铁站点</el-button>
        <el-button type="parmary">查询</el-button>
      </el-form>
      <el-table stripe
                :data="list">
        <el-table-column type="index"
                         label="站点序号"
                         width="100px"></el-table-column>
        <el-table-column prop="name"
                         label="站点名称"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini"
                       @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini"
                       type="danger"
                       @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="编辑站点"
                 :visible.sync="mapForm">
        <el-form :model="listForm"
                 :inline="true">
          <el-form-item label="站点名称"
                        :label-width="formLabelWidth">
            <el-input v-model="listForm.name"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="站点序号"
                        :label-width="formLabelWidth">
            <el-input v-model="listForm.index"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="parmary"
                       @click="submit">保存</el-button>
          </el-form-item>
        </el-form>
        <div class="map-container"></div>
      </el-dialog>
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page.sync="currentPage"
                     :page-size="20"
                     layout="prev, pager, next, jumper"
                     :total="100"
                     class="fenye">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getListOptions } from '@/api/list'
export default {
  name: "ListOptions",
  data () {
    return {
      param: {
        name: ''
      },
      list: [],
      mapForm: false,
      formLabelWidth: '120px',
      listForm: {
        name: ''
      },
      currentPage: 1
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      getListOptions(this.param).then(res => {
        this.list = res.data
      })
    },
    setClick (row) {
      console.log(row)
    },
    handleEdit (index, row) {
      this.mapForm = true
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
    },
    submit () {
      this.mapForm = false
      console.log(this.listForm)
    }
  }
}

</script>
<style lang='scss' scoped>
@import '../../styles/mixin.scss';
.listOptions {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  @include wh(100%, 100%);
  background: #fff;
  .list-wrapper {
    @include clearfix;
    .el-table {
      text-align: center;
    }
    .fenye {
      float: right;
      margin-top: 20px;
    }
  }
}

// 深度选择器
.el-table /deep/ th {
  text-align: center;
}
</style>