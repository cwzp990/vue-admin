<!-- charts图表 -->
<template>
  <div class="charts-container">
    <el-tabs :v-model="activeName"
             type="border-card"
             class="chartsForm">
      <el-tab-pane label="商业贷款">
        <el-form v-model="charts.business"
                 ref="business">
          <el-form-item label="计算方式">
            <el-select v-model="charts.business.calc"
                       placeholder="请选择计算方式">
              <el-option label="按贷款总额计算"
                         value="all"></el-option>
              <el-option label="根据面积单位计算"
                         value="area"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="贷款金额">
            <el-input v-model="charts.business.money"></el-input>
          </el-form-item>
          <el-form-item label="贷款期限">
            <el-select v-model="charts.business.time"
                       placeholder="请选择期限">
              <el-option v-for="item in data.time"
                         :key="item.value"
                         :label="item.name"
                         :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="贷款年利率">
            <el-select v-model="charts.business.interest"
                       placeholder="请选择年利率">
              <el-option v-for="item in data.business"
                         :key="item.value"
                         :label="item.name"
                         :value="item.value"></el-option>
            </el-select>
            <el-input v-model="charts.business.number"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       @click="drawCharts(charts.business)">开始计算</el-button>
            <el-button @click="resetForm('business')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="公积金贷">
        <el-form v-model="charts.public"
                 ref="public">
          <el-form-item label="计算方式">
            <el-select v-model="charts.public.calc"
                       placeholder="请选择计算方式">
              <el-option label="按贷款总额计算"
                         value="all"></el-option>
              <el-option label="根据面积单位计算"
                         value="area"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="贷款金额">
            <el-input v-model="charts.public.money"></el-input>
          </el-form-item>
          <el-form-item label="贷款期限">
            <el-select v-model="charts.public.time"
                       placeholder="请选择期限">
              <el-option v-for="item in data.time"
                         :key="item.value"
                         :label="item.name"
                         :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="贷款年利率">
            <el-select v-model="charts.public.interest"
                       placeholder="请选择年利率">
              <el-option v-for="item in data.public"
                         :key="item.value"
                         :label="item.name"
                         :value="item.value"></el-option>
            </el-select>
            <el-input v-model="charts.public.number"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       @click="drawCharts(charts.public)">开始计算</el-button>
            <el-button @click="resetForm('public')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="组合贷款">
        <el-form v-model="charts.group"
                 ref="group">
          <el-form-item label="计算方式">
            <el-select v-model="charts.group.calc"
                       placeholder="请选择计算方式">
              <el-option label="按贷款总额计算"
                         value="all"></el-option>
              <el-option label="根据面积单位计算"
                         value="area"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商业贷款金额">
            <el-input v-model="charts.group.businessMoney"></el-input>
          </el-form-item>
          <el-form-item label="贷款期限">
            <el-select v-model="charts.group.businessTime"
                       placeholder="请选择期限">
              <el-option v-for="item in data.time"
                         :key="item.value"
                         :label="item.name"
                         :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商业贷款年利率">
            <el-select v-model="charts.group.businessInterest"
                       placeholder="请选择年利率">
              <el-option v-for="item in data.business"
                         :key="item.value"
                         :label="item.name"
                         :value="item.value"></el-option>
            </el-select>
            <el-input v-model="charts.group.number1"></el-input>
          </el-form-item>
          <el-form-item label="公积金贷款金额">
            <el-input v-model="charts.group.publicMoney"></el-input>
          </el-form-item>
          <el-form-item label="贷款期限">
            <el-select v-model="charts.group.publicTime"
                       placeholder="请选择期限">
              <el-option v-for="item in data.time"
                         :key="item.value"
                         :label="item.name"
                         :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="公积金贷款年利率">
            <el-select v-model="charts.group.publicInterest"
                       placeholder="请选择年利率">
              <el-option v-for="item in data.public"
                         :key="item.value"
                         :label="item.name"
                         :value="item.value"></el-option>
            </el-select>
            <el-input v-model="charts.group.number2"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       @click="drawCharts(charts.group)">开始计算</el-button>
            <el-button @click="resetForm('group')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <div class="charts-wrapper">
      <div class="charts-main">
      </div>
    </div>
  </div>
</template>

<script>
import { getLoanData } from '@/api/charts'
export default {
  name: 'Charts',
  data () {
    return {
      activeName: 'first',
      charts: {
        // 商业贷款
        business: {
          calc: '',
          money: '',
          time: '',
          interest: '',
          number: ''
        },
        // 公积金贷款
        public: {
          calc: '',
          money: '',
          time: '',
          interest: '',
          number: ''
        },
        // 组合贷款
        group: {
          calc: '',
          businessMoney: '',
          businessTime: '',
          businessInterest: '',
          publicMoney: '',
          publicTime: '',
          publicInterest: '',
          number1: '',
          number2: ''

        }
      },
      data: {}
    }
  },
  created () {
    getLoanData().then(res => {
      this.data = res.data
    })
  },
  methods: {
    drawCharts (data) {
      console.log(data)
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
}

</script>
<style lang='scss' scoped>
@import '../../styles/mixin.scss';
.charts-container {
  display: flex;
  .chartsForm {
    flex: 1;
    .el-input {
      width: auto;
    }
  }
  .charts-wrapper {
    flex: 1;
  }
}
</style>