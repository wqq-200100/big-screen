<template>
  <div>
    <div>
      <!-- 总览 -->
      <div class="main-table">
        <div v-for="(item,index) in tablesText" :key="index" small-bg>
          <dv-decoration-11 style="width:210px;height:80px;color: white">
            <div bg="~ dark/0" color-green font-600 class="bg-box">
              <img :src="`src/assets/image/role${index+1}.png`" alt="">
              <div class="bg-left">
                <div>{{ item.Hardware }}</div>
                <div class="num">{{ item.count }}</div>
              </div>
            </div>
          </dv-decoration-11>
        </div>
      </div>

      <div class="main-content">
        <!--左边-->
        <div class="main-label">
          <div class="label-title">标题吃喜羊羊哈哈</div>
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
          <div class="label-title">标题吃喜羊羊哈哈</div>
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
    </div>

    <div>
      <div class="foot">
        <div class="zhu-zhuang-tu">
          <div class="label-title">表格</div>
          <div class="first-table">
            <el-table id="my-table" :data="tableData">
              <el-table-column prop="date" align="center" label="date" width="80"/>
              <el-table-column label="cpu" align="center">
                <el-table-column prop="cpu1" align="center" width="43"/>
                <el-table-column prop="cpu2" align="center" width="43"/>
              </el-table-column>
              <el-table-column label="gpu" align="center">
                <el-table-column prop="gpu1" align="center" width="43"/>
                <el-table-column prop="gpu2" align="center" width="43"/>
              </el-table-column>
              <el-table-column label="qbb" align="center">
                <el-table-column prop="qb1" align="center" width="43"/>
                <el-table-column prop="qb2" align="center" width="43"/>
              </el-table-column>

            </el-table>
          </div>
        </div>
        <div class="zhu-zhuang-tu" v-for="(item,i) in footTitle" :key="i">

          <div class="label-title">{{ item.title }}</div>
          <div style="width: 100%;height: 200px">
            <myTable class="footMyTable" :colors="item.colors" :data="item.data" :name="item.name"/>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import myTable from "../../global/footMyTabel.vue";
import myCircle from "./myCircle.vue";
import {Random} from "mockjs";


const tablesText = $ref([
  {Hardware: '上云热门数', count: '32000+'},
  {Hardware: '上云系统数', count: '2300+'},
  {Hardware: '上云cpu栈', count: '23100+'},
  {Hardware: '内存', count: '59030GB'},
  {Hardware: '存储', count: '10800TB'}
])

const mailable = Array(16).fill(1).map(i => Random.city() + '委办网')
const mailable2 = Array(16).fill(1).map(i => Random.city() + '委办网')

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

//右边
function changeClick(index) {
  currentIndex = index
}

// 左边
function onchange(index) {
  indexKey = index

}
</script>
<style src="../../assets/css/const.scss"></style>
<style scoped lang="scss">

::v-deep(#my-table .is-group tr:nth-child(2) ) {
  display: none;
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgb(10, 10, 30);

  .main {
    flex: 3;
    border: 2px solid rgb(6, 158, 224);


    .dv-bg {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: stretch;

      .title-text {
        padding: 0 22px;
        font-size: 23px;
        color: rgb(140, 144, 151);
      }

      .center {
        color: #20a7b3;
        font-size: 33px;
      }
    }

    .main-table {
      display: flex;
      justify-content: space-around;
      margin-top: 27px;

      .bg-box {
        display: flex;
        align-items: center;
        padding-left: 35px;
        font-size: 13px;

        img {
          position: absolute;
          left: 33px;
          width: 27px;
        }

        .num {
          color: #f6d944;
        }
      }
    }

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
            line-height: 33px;
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
        border: 10px solid rgb(13, 38, 74);
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

          .beeline-box {
            width: 350px;
            height: 350px;
            background: palegreen;
            position: absolute;
            top: 0;

            .cake {
              border: 1px solid orange;
            }
          }
        }
      }
    }
  }

  .foot {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 42px;
    overflow: hidden;

    .first-table {
      color: #fff;
      margin-top: 8px;

      #my-table {
        width: 100%;
        height: 100%;
        margin-top: 19px
      }

      ::v-deep(.el-table_1_column_1) {
        width: 100px !important;
      }

      ::v-deep(.el-table) {
        background-color: #000
      }

      ::v-deep(.el-table .cell) {
        padding: 0 2px;
        line-height: 14px
      }

      ::v-deep(.el-table__body td.el-table__cell) {
        background: rgb(10, 10, 30);
        color: #fff;
        border: 1px solid #333
      }

      ::v-deep(.el-table thead.is-group th.el-table__cell) {
        background: rgb(10, 10, 30);
        color: #ddd;
        border: none;

      }

      ::v-deep(.el-table thead.is-group th.el-table__cell) {
        border-right: 1px solid #333 !important;
      }

    }

    .zhu-zhuang-tu {
      flex: 1;
      border: 2px solid rgb(6, 158, 224);
      margin-left: 5px;

      .label-title {
        font-size: 14px;
        margin-top: 5px;

      }

      .tubiao {
        width: 300px;
        height: 250px;
        margin-top: -38px;
        margin-left: 6px;
      }

      .footMyTable {
        width: 90%;
        height: 100%;
        margin-top: 9px;
      }
    }
  }
}

.label-title {
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  position: relative;
  margin-left: 20px;
  flex: 1;

  &:after {
    content: '';
    display: block;
    width: 6px;
    height: 16px;
    background: rgb(6, 255, 255);
    border-radius: 8px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -12px;
  }
}


.boxsurvey {
  margin-left: 4px;
}


</style>
