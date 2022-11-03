<template>
  <div ref="myChartRef"  class="tubiao"></div>
</template>

<script setup name="myTable">
import * as echarts from 'echarts'
import {onMounted} from "vue";

let myChart = null;
let myChartRef = $ref();
const props = defineProps({
  colors: [],
  data: [],
  name:[]
})

const option = {
  grid: {
    top:"1%",
    left: '4%',
    right: '6%',
    bottom: '1%',
    // containLabel: true,
  },
  yAxis: {
    data: props.name,
    axisLabel: {
      inside: true,
      color: '#fff',
    },
    z: 10
  },
  xAxis: {
    show: false
  },

  series: [{
    type: 'bar',
    stack: '业务',
    data: props.data,
    label: {
      show: true,
      position: 'right',
      valueAnimation: true,
      color:'#fff'
    },
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(
            0, 0, 1, 0,
            [
              {offset: 0, color: props.colors[0]},                   //柱图渐变色
              {offset: 0.5, color: props.colors[1]},                 //柱图渐变色
              {offset: 1, color: props.colors[2]},                   //柱图渐变色
            ]
        )
      },
      emphasis: {
        color: new echarts.graphic.LinearGradient(
            0, 0, 1, 0,
            [
              {offset: 0, color: '#71C8B1'},                  //柱图高亮渐变色
              {offset: 0.7, color: '#44C0C1'},                //柱图高亮渐变色
              {offset: 1, color: '#06B5D7'}                   //柱图高亮渐变色
            ]
        )
      }
    },
  }]
};

onMounted(() => {
  myChart = echarts.init(myChartRef)
  myChart.setOption(option);
  // console.log('props====>>>',props.name[2]);
})
// 使用刚指定的配置项和数据显示图表。

</script>

<style lang='scss' scoped>
.tubiao{
  width: 100%;
  height: 100%;
  // border: 1px solid red;
  
}

</style>
