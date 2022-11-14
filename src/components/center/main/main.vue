<template>
  <div class="main-content">
    <!--左边-->
    <div class="main-label">
      <div class="label-title">市级资源使用部门信息</div>
      <div class="main-label-table">
        <div v-for="(item,index) in mailable" :key="index" class="table-item" @click="onchange(index)"
             :class="{active:indexKey === index}">{{ item }}
        </div>
      </div>
      <el-pagination
          :total="50"
          background
          class="mt-4 bg"
          layout="prev, pager, next"
          small
      />
    </div>
    <!--中间-->
    <div class="main-statistics">
      <div class="ChartLabel">
        <div class="chartName">资源管理中心</div>
        <!--云-->
        <myCircle/>
      </div>
    </div>
    <!--右边-->
    <div class="main-label">
      <div class="label-title">区（市）县资源使用部门信息</div>
      <div class="main-label-table">
        <div v-for="(item,index) in mailable2" :key="index" class="table-item" @click="changeClick(index)"
             :class="{active:currentIndex === index}">{{ item }}
        </div>
      </div>
      <el-pagination
          :total="50"
          background
          class="mt-4 bg"
          layout="prev, pager, next"
          small
      />
    </div>
  </div>
</template>

<script setup>
import {Random} from "mockjs";
import myCircle from "../Circle.vue";


// const mailable = Array(16).fill(1).map(i => Random.city() + '委办网')
const mailable = $ref([
  '市法院',
  '市检察院',
  '市委办公厅',
  '市人大常委会办公厅',
  '市政府办公厅',
  '市政协办公厅',
  '市委组织部',
  '市委宣传部',
  '市委统战部',
  '市委政法委',
  '市委政研室',
  '市委社治委',
  '市委网信办',
  '市委外事办',
  '市政府外办',
  '市委编办',

])

// const mailable2 = Array(16).fill(1).map(i => Random.city() + '委办网')
const mailable2 = $ref([
  '市直机关工委',
  '市委巡察办',
  '市委保密机要局',
  '市委老干部局',
  '市委党史研究室',
  '市委党校',
  '市发改委',
  '市经信局',
  '市教育局',
  '市委教育工委',
  '市科技局',
  '市民宗局',
  '市公安局',
  '市民政局',
  '市司法局',
  '市人社局'
])


let currentIndex = $ref('')
let indexKey = $ref('')

//右边
function changeClick(index) {
  currentIndex = index
}

// 左边
function onchange(index) {
  indexKey = index

}
</script>

<style scoped lang='scss'>
.main-content {
  display: flex;
  justify-content: space-between;

  .main-label {
    margin-top: 50px;

    ::v-deep(.el-pagination) {
      margin: 205px 20px 9px;

      button, li {
        color: #fff;
        background: rgb(35, 56, 69);

        &.is-active {
          background: rgb(28, 131, 145);
        }
      }
    }

    .main-label-table {
      width: 240px;
      height: 280px;
      margin: 25px 18px 0;
      display: flex;
      align-content: flex-start;
      flex-flow: wrap;
      justify-content: space-between;

      .table-item {
        border: 2px solid rgb(6, 158, 224);
        border-radius: 5px;
        width: 115px;
        height: 45px;
        margin-bottom: 10px;
        color: white;
        line-height: 45px;
        text-align: center;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .active {
        background: rgb(28, 131, 145)
      }
    }
  }

  .main-statistics {
    width: 380px;
    height: 380px;
    border: 20px solid rgb(13, 38, 74);
    border-radius: 50%;
    margin-top: 100px;
    position: relative;

    .ChartLabel {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;

      .chartName {
        color: #dddddd;
        margin-top: 10px;
        position: absolute;
        font-size: 22px;
        background-image: -webkit-linear-gradient(left, #F1ACACFF, rgba(6, 198, 206, 0.56) 10%, #6c6ce8 20%, #579ae3 30%, #6C6CE8FF 40%, #00FFFF 50%, #CCCCFF 60%, #2580E5FF 70%, #D0F66FFF 80%, #66FFFF 90%, #579AE3FF 100%);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-background-size: 200% 100%;
        -webkit-animation: masked-animation 4s linear infinite;
      }

      @keyframes masked-animation {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: -100% 0;
        }
      }
    }
  }
}
</style>
