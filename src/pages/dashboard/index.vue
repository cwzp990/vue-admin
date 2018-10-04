<!-- 首页 -->
<template>
  <div class="dashboard-container">
    <el-row :gutter="20">
      <el-col :span="6"
              class="panel"
              style="background: #967adc;">
        <div>
          <p>300</p>
          <p>QQ</p>
        </div>
        <svg-icon icon-class="qq"></svg-icon>
      </el-col>
      <el-col :span="6"
              class="panel"
              style="background: #70ca63;">
        <div>
          <p>99+</p>
          <p>wechat</p>
        </div>
        <svg-icon icon-class="wechat"></svg-icon>
      </el-col>
      <el-col :span="6"
              class="panel"
              style="background: #e9573f;">
        <div>
          <p>5</p>
          <p>skype</p>
        </div>
        <svg-icon icon-class="skype"></svg-icon>
      </el-col>
      <el-col :span="6"
              class="panel"
              style="background: #3bafda;">
        <div>
          <p>999</p>
          <p>github</p>
        </div>
        <svg-icon icon-class="github"></svg-icon>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px;">
      <el-col :span="24">
        <panel title="控制面板组件"
               wrapperName="control-wrapper">
        </panel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Panel from 'components/panel/index'
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入饼图组件
require('echarts/lib/chart/line')
// 引入柱图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend');
require('echarts/lib/component/markLine')
export default {
  name: 'dashboard',
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      let options = {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          y: 45,
          x2: 40,
          y2: 90,
          x: 60
        },
        xAxis: [{
          type: 'category',
          data: ["06/11", "06/12", "06/13", "06/14", "06/15", "06/16", "06/17"],
          axisPointer: {
            lineStyle: {
              color: '#B03A5B',
              opacity: 0.2,
              width: 1
            },
            label: {
              show: true,
              backgroundColor: '#B03A5B'
            },
            handle: {
              show: true,
              color: '#B03A5B'
            }
          }
        }],
        yAxis: [{
          type: 'value',
          name: '份',
          splitNumber: 4
        }],
        series: [{
          name: '总销售量',
          type: 'line',
          smooth: true,
          data: [34, 38, 30, 28, 45, 49, 37],
          markPoint: {
            data: [{
              type: 'max',
              name: '最大值'
            }]
          },
          itemStyle: {
            normal: {
              color: '#60C0DD'
            }
          }
        }]
      }
      this.chart = echarts.init(document.getElementById('control-wrapper'))
      this.chart.setOption(options)
    }
  },
  components: {
    Panel
  }
}
</script>
<style lang='scss' scoped>
@import '../../styles/mixin.scss';
.dashboard-container {
  @include wh(100%, 100%);
  .panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    @include sc(14px, #fff);
    .svg-icon {
      @include svg(12px, #b2b2b2);
    }
  }
}
</style>