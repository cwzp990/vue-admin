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
    <el-row :gutter="8">
      <el-col :xs="{span: 24}"
              :sm="{span: 24}"
              :md="{span: 24}"
              :lg="{span: 12}"
              :xl="{span: 12}">
        <panel title="柱状图"
               wrapperName="bar-wrapper"></panel>
      </el-col>
      <el-col :xs="{span: 24}"
              :sm="{span: 12}"
              :md="{span: 12}"
              :lg="{span: 6}"
              :xl="{span: 6}">
        <panel title="todoList"
               wrapperName="list-wrapper">
          <todo-list></todo-list>
        </panel>
      </el-col>
      <el-col :xs="{span: 24}"
              :sm="{span: 12}"
              :md="{span: 12}"
              :lg="{span: 6}"
              :xl="{span: 6}">
        <panel title="boxCard"
               wrapperName="card-wrapper">
          <box-card></box-card>
        </panel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Panel from 'components/panel/index'
import TodoList from 'components/todo-list/index'
import BoxCard from 'components/box-card/index'
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入折线图组件
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
      let options1 = {
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
      this.chart.setOption(options1)
      let options2 = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: 'pageA',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [79, 52, 200, 334, 390, 330, 220],
        }, {
          name: 'pageB',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [80, 52, 200, 334, 390, 330, 220],
        }, {
          name: 'pageC',
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: [30, 52, 200, 334, 390, 330, 220],
        }]
      }
      this.chart = echarts.init(document.getElementById('bar-wrapper'))
      this.chart.setOption(options2)
    }
  },
  components: {
    Panel,
    TodoList,
    BoxCard
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