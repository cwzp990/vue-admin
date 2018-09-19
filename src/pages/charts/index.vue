<!-- charts图表 -->
<template>
  <div class="charts-container">
    <el-tabs v-model="activeName"
             type="border-card"
             class="chartsForm">
      <el-tab-pane label="商业贷款"
                   name="1">
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
          <el-form-item label="贷款金额(万元)">
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
      <el-tab-pane label="公积金贷"
                   name="2">
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
          <el-form-item label="贷款金额(万元)">
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
      <el-tab-pane label="组合贷款"
                   name="3">
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
          <el-form-item label="商业贷款金额(万元)">
            <el-input v-model="charts.group.business.money"></el-input>
          </el-form-item>
          <el-form-item label="贷款期限">
            <el-select v-model="charts.group.business.time"
                       placeholder="请选择期限">
              <el-option v-for="item in data.time"
                         :key="item.value"
                         :label="item.name"
                         :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商业贷款年利率">
            <el-select v-model="charts.group.business.interest"
                       placeholder="请选择年利率">
              <el-option v-for="item in data.business"
                         :key="item.value"
                         :label="item.name"
                         :value="item.value"></el-option>
            </el-select>
            <el-input v-model="charts.group.business.number"></el-input>
          </el-form-item>
          <el-form-item label="公积金贷款金额(万元)">
            <el-input v-model="charts.group.public.money"></el-input>
          </el-form-item>
          <el-form-item label="贷款期限">
            <el-select v-model="charts.group.public.time"
                       placeholder="请选择期限">
              <el-option v-for="item in data.time"
                         :key="item.value"
                         :label="item.name"
                         :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="公积金贷款年利率">
            <el-select v-model="charts.group.public.interest"
                       placeholder="请选择年利率">
              <el-option v-for="item in data.public"
                         :key="item.value"
                         :label="item.name"
                         :value="item.value"></el-option>
            </el-select>
            <el-input v-model="charts.group.public.number"></el-input>
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
      <div class="charts-btn">
        <el-button type="primary"
                   @click="calc_interest">等额本息</el-button>
        <el-button type="primary"
                   @click="calc_money">等额本金</el-button>
      </div>
      <div class="charts-down">
        <div id="charts-main"
             ref="charts"></div>
        <div class="charts-data">
          <p v-show="calc">贷款金额{{results.all_money}}</p>
          <p v-show="calc">每月还款{{results.month_money}}</p>
          <p v-show="calc">总利息{{results.all_interest}}</p>
          <p v-show="calc">总还款{{results.all_pay}}</p>
        </div>
      </div>
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
      activeName: '1',
      calc: false,
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
          business: {
            money: '',
            time: '',
            interest: '',
            number: ''
          },
          public: {
            money: '',
            time: '',
            interest: '',
            number: ''
          }
        }
      },
      data: {},
      results: {
        all_money: 0,  // 贷款金额
        month_money: 0,  // 月供
        all_interest: 0, // 总利息
        all_pay: 0 // 总还款
      },
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
  computed: {
  },
  methods: {
    initChart () {
      let options = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          bottom: 'bottom',
          data: ['贷款金额', '总利息']
        },
        series: [
          {
            name: '访问',
            type: 'pie',
            radius: '62%',
            center: ['50%', '50%'],
            minAngle: '15',
            data: [
              { name: "贷款金额", value: this.results.all_money },
              { name: "总利息", value: this.results.all_interest }
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
      }
      this.chart = echarts.init(document.getElementById('charts-main'))
      this.chart.setOption(options)
    },
    drawCharts (data) {
      this.calc = true
      if (this.activeName === '1') {
        this.results.all_money = this.calc_interest(data).all_money
        this.results.month_money = this.calc_interest(data).month_money
        this.results.all_interest = this.calc_interest(data).all_interest
        this.results.all_pay = this.calc_interest(data).all_pay
        this.initChart()
      } else if (this.activeName === '2') {
        this.results.all_money = this.calc_interest(data).all_money
        this.results.month_money = this.calc_interest(data).month_money
        this.results.all_interest = this.calc_interest(data).all_interest
        this.results.all_pay = this.calc_interest(data).all_pay
        this.initChart()
      } else if (this.activeName === '3') {
        this.results.all_money = this.calc_interest(data.business).all_money + this.calc_interest(data.public).all_money
        this.results.month_money = this.calc_interest(data.business).month_money + this.calc_interest(data.public).month_money
        this.results.all_interest = this.calc_interest(data.business).all_interest + this.calc_interest(data.public).all_interest
        this.results.all_pay = this.calc_interest(data.business).all_pay + this.calc_interest(data.public).all_pay
        this.initChart()
      }
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    /**
     * 等额本息
     * 每月月供额=〔贷款本金×月利率×(1＋月利率)＾还款月数〕÷〔(1＋月利率)＾还款月数-1〕
     * 每月应还利息=贷款本金×月利率×〔(1+月利率)^还款月数-(1+月利率)^(还款月序号-1)〕÷〔(1+月利率)^还款月数-1〕
     * 每月应还本金=贷款本金×月利率×(1+月利率)^(还款月序号-1)÷〔(1+月利率)^还款月数-1〕
     * 总利息=还款月数×每月月供额-贷款本金
     */
    calc_interest (data) {
      const money = data.money * 10000
      const interest = data.interest / 1200 + 1
      const time = parseInt(data.time)
      const temp = Math.pow(interest, time)
      return {
        all_money: money,
        month_money: ((money * (interest - 1) * temp) / (temp - 1)).toFixed(2),
        all_interest: time * parseInt(this.results.month_money) - money,
        all_pay: time * parseInt(this.results.month_money)
      }
    },
    /**
     * 等额本金
     * 每月月供额=(贷款本金÷还款月数)+(贷款本金-已归还本金累计额)×月利率
     * 每月应还本金=贷款本金÷还款月数
     * 每月应还利息=剩余本金×月利率=(贷款本金-已归还本金累计额)×月利率
     * 每月月供递减额=每月应还本金×月利率=贷款本金÷还款月数×月利率
     * 总利息=〔(总贷款额÷还款月数+总贷款额×月利率)+总贷款额÷还款月数×(1+月利率)〕÷2×还款月数-总贷款额
     */
    calc_money () {
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
    display: flex;
    flex: 1;
    flex-direction: column;
    height: calc(100vh - 105px);
    .charts-btn {
      display: flex;
      align-items: center;
      flex: 0 0 15%;
      margin-left: 100px;
    }
    .charts-down {
      display: flex;
      flex: 1;
      #charts-main {
        flex: 1;
        height: 500px;
      }
      .charts-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 0 0 30%;
        height: 500px;
        @include sc(14px, #666);
        p {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>