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
   backgroundColor: '',
   grid: {
      top: "0%",
      left: "15%",
      right: "15%",
      bottom: "0%",
   },
   tooltip: {
      show: false,
      trigger: "axis",
      backgroundColor: "rgba(65,114,231,0.8)",
      formatter: function (item) {
      return (
         item[0].axisValueLabel +
         "<br />" +
         item[0].seriesName +
         ": " +
         item[0].data
      );
      },
   },
   yAxis: {
      show: false,
      data: ["1月"],
      axisLine: {
      show:false,
      lineStyle: {
         color: "#0a4980",
      },
      },
      axisLabel: {
      color: "#ADD6FF",
      fontSize: 12,
      },
   },
   xAxis: [
      {
      show: false,
      type: "value",
      splitLine: {
         show: false,
      },
      axisLine: {
         show: true,
         lineStyle: {
            color: "#0a4980",
         },
      },
      axisLabel: {
         show: true,
         fontSize: 12,
         color: "#ADD6FF",
      },
      },
   ],
   series: [
      {
         name: "机器故障率",
         type: "bar",
         barWidth: 20,
         itemStyle: {
            color: {
               type: "linear",
               x: 0,
               y: 0,
               x2: 1,
               y2: 0,
               colorStops: [
               {
                  offset: 0,
                  color: "rgb(5,27,56)", // 0% 处的颜色
               },
               {
                  offset: 1,
                  color: "rgb(36,188,255)", // 100% 处的颜色
               },
               ],
               global: false, // 缺省为 false
            },
         },
         z: 0,
         zlevel: 0,
         label: {
            show: false,
            position: "right",
            color: "#fff",
            formatter: function (data) {
               return "62%";
            },
         },
         animationDelay: 2000,
         animationDuration: 1000,
         data: props.data,
      },
      {
         type: "pictorialBar",
         itemStyle: {
            color: "#0F1F45",
         },
         symbolRepeat: 8,
         // symbolMargin: 300,
         symbol: "rect",
         symbolClip: false,
         symbolSize: [3, 18],
         symbolPosition: "start",
         symbolOffset: [0, 0],
         data: props.data,
         z: 1,
         zlevel: 0,
         animationDelay: 1000,
         animationDuration: 1000
      },
      {
         name: "机器故障率",
         type: "bar",
         barGap: "-100%",
         data: props.data,
         barWidth: 20,
              label: {
               show: true,
               position: 'right',
               valueAnimation: true,
               color:'#fff'
            },
         itemStyle: {
            color: "transparent",
            borderColor: "rgba(148,217,249, 0.5)",
            borderWidth: 0.5,
         },
         z: 2,
         animationDelay: 1000,
         animationDuration: 1000
      },
   ],
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
  /*border: 1px solid red;*/
  
}

</style>
