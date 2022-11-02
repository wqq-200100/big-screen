<template>
  <div>
    <v-scale-screen width="3000" height="1080">
      <div class="container">
          <div class="main">
            <!-- 头标题 -->
            <div class="main-title">
              <div demo-bg>
                <div class="dv-bg" dv-bg>
                  <dv-decoration-8 style="width:300px;height:70px;"/>
                  <dv-decoration-10 style="width:20%;height:110px;"/>
                  <div class="title">
                    <div class="title-text center">政务云资源总览</div>
                    <dv-decoration-3 style="width:250px;height:30px;"/>
                  </div>
                  <dv-decoration-10 style="width:20%;height:120px;"/>
                  <dv-decoration-8 :reverse="true" style="width:300px;height:70px;"/>
                </div>
              </div>
            </div>

            <div style="display:flex; color:#fff; width:100%;height:100%">
              <!-- 左边 -->
              <div style="color:#fff;flex:1">
                <leftBox></leftBox>
              </div>

              <!-- 中间主体 -->
              <div style="width:50%;flex:3">
                <middle></middle>
              </div>

              <!-- 右边 -->
              <div style="color:#fff;flex:1">
                <rightBox/>
              </div>
            </div>
          </div>
      </div>
    </v-scale-screen>
  </div>
</template>
<script setup>
import myCircle from "./components/center/myCircle.vue";
import {Random} from "mockjs";
import VScaleScreen from 'v-scale-screen'
import leftBox from "./components/left/leftbox.vue";
import rightBox from "./components/right/rightBox.vue";
import middle from './components/center/middle.vue'


const tablesText = $ref([
  {Hardware: '上云热门数', count: '32000+'},
  {Hardware: '上云系统数', count: '2300+'},
  {Hardware: '上云cpu栈', count: '23100+'},
  {Hardware: '内存', count: '59030GB'},
  {Hardware: '存储', count: '10800TB'}
])

const mailable = Array(14).fill(1).map(i => Random.city() + '委办网')
const mailable2 = Array(14).fill(1).map(i => Random.city() + '委办网')

const footTitle = $ref([
  {
    title: 'CPU',
    colors: [
      '#b186a1',
      '#664f97',
      '#584572'
    ],
    name: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    data: [198, 39, 55, 121, 55, 155].sort((a, b) => a - b)
  }, {
    title: 'CPU2',
    colors: [
      '#ceacb3',
      '#9a7b81',
      '#936886'
    ],
    name: ["吃饭", "是阿三", "和地区的", "裤i欧家栋i哦子", "嗲u好地方", "袜子"],
    data: [100, 83, 55, 121, 95, 222].sort((a, b) => a - b)
  }, {
    title: 'CPU3',
    colors: [
      'rgba(213,171,168,0.76)',
      '#f3796b',
      '#da4d61'
    ],
    name: ["高跟鞋", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "www"],
    data: [100, 33, 55, 121, 59, 123].sort((a, b) => a - b)
  },
])
const tableData = $ref([
  {
    date: '2022/10/23',
    cpu1: 222,
    cpu2: 333,
    gpu1: 9090,
    gpu2: 'ax',
    qb1: 300,
    qb2: 'ii',
  }, {
    date: '2022/10/24',
    cpu1: 44,
    cpu2: 77,
    gpu1: 1111,
    gpu2: 'ijd',
    qb1: 229,
    qb2: 'sd',
  }, {
    date: '2022/10/25',
    cpu1: 100,
    cpu2: 'kdx',
    gpu1: 999,
    gpu2: 90,
    qb1: 23,
    qb2: 399,
  }, {
    date: '2022/10/26',
    cpu1: '完全',
    cpu2: '胃口的',
    gpu1: '看完',
    gpu2: '几位',
    qb1: '等我',
    qb2: '开始',
  },
])
let currentIndex = $ref('')
let indexKey = $ref('')


</script>

<style src="../src/assets/css/const.scss" scoped></style>
<style lang="sass" scoped>

</style>

