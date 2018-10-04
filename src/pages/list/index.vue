<!-- 列表 -->
<template>
  <div class="list">
    <div class="list-wrapper">
      <el-form :inline="true"
               :model="param"
               class="sosoparam">
        <el-form-item label="地铁线路">
          <el-input v-model="param.line"
                    placeholder="线路名称"></el-input>
        </el-form-item>
        <el-form-item label="开通标识">
          <el-select v-model="param.opened"
                     placeholder="请选择">
            <el-option label="已开通"
                       value="1"></el-option>
            <el-option label="规划建设中"
                       value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-button type="primary"
                   @click="settingForm = true">添加地铁</el-button>
        <el-button type="parmary">查询</el-button>
      </el-form>
      <el-table stripe
                :data="list">
        <el-table-column prop="line"
                         label="地铁线路"></el-table-column>
        <el-table-column prop="torder"
                         label="排序值"></el-table-column>
        <el-table-column prop="opened"
                         label="开通标识"></el-table-column>
        <el-table-column prop="num"
                         label="总站点数"></el-table-column>
        <el-table-column label="站点管理">
          <template slot-scope="scope">
            <el-button type="text"
                       size="small"
                       @click="gotoAddress('/list/index/options')">配置</el-button>
          </template>
        </el-table-column>
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
      <el-dialog title="添加/修改地铁线路"
                 :visible.sync="settingForm">
        <el-form :model="listForm">
          <el-form-item label="地铁线路"
                        :label-width="formLabelWidth">
            <el-input v-model="listForm.name"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="开通标识"
                        :label-width="formLabelWidth">
            <el-radio v-model="listForm.opened"
                      label="1">已开通</el-radio>
            <el-radio v-model="listForm.opened"
                      label="0">规划建设中</el-radio>
          </el-form-item>
          <el-form-item label="排序值"
                        :label-width="formLabelWidth">
            <el-input v-model="listForm.torder"
                      autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer"
             class="dialog-footer">
          <el-button @click="settingForm = false">取 消</el-button>
          <el-button type="primary"
                     @click="submit">确 定</el-button>
        </div>
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
    <router-view></router-view>
  </div>
</template>

<script>
import { getList } from '@/api/list'
export default {
  name: 'List',
  data () {
    return {
      param: {
        line: '',
        mark: ''
      },
      list: [],
      settingForm: false,
      formLabelWidth: '120px',
      listForm: {
        name: '',
        opened: '1',
        torder: ''
      },
      currentPage: 1
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      getList(this.param).then(res => {
        this.list = res.data
      })
    },
    setClick (row) {
      console.log(row)
    },
    handleEdit (index, row) {
      this.settingForm = true
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
      this.settingForm = false
      console.log(this.listForm)
    },
    gotoAddress (path) {
      this.$router.push(path)
    }
  }
}

</script>
<style lang='scss' scoped>
@import '../../styles/mixin.scss';
.list {
  position: relative;
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