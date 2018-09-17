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
    <div id="charts-wrapper">
    </div>
  </div>
</template>

<script>
import { getLoanData } from '@/api/charts'
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入饼图组件
require('echarts/lib/chart/pie')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend');
require('echarts/lib/component/markLine')
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
      data: {},
      chart: null // echarts实例
    }
  },
  created () {
    getLoanData().then(res => {
      this.data = res.data
    })
  },
  mounted () {
    this.initChart()
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart () {
      this.chart = echarts.init(document.getElementById('charts-wrapper'))
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['第一部分', '第二部分', '第三部分', '第四部分']
        },
        series: [
          {
            name: '访问',
            type: 'pie',
            radius: '62%',
            center: ['50%', '65%'],
            minAngle: '15',
            data: [
              { name: "第一部分", value: 4 },
              { name: "第二部分", value: 7 },
              { name: "第三部分", value: 3 },
              { name: "第四部分", value: 1 },
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b} :\n  {c} \n ({d}%)",
                  position: "inner"
                }
              }
            }
          }
        ]
      })
    },
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
  #charts-wrapper {
    flex: 1;
    @include wh(100%, 100%);
  }
}
</style>