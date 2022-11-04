<template>
  <div class="foot">
    <!--   表格   -->
    <div class="zhu-zhuang-tu">
      <div class="label-title">表格</div>
      <div class="first-table">
        <el-table id="my-table" :data="tableData">
          <el-table-column prop="date" align="center" label="date" width="80"/>
          <el-table-column label="cpu" align="center">
            <el-table-column prop="cpu1" align="center"/>
            <el-table-column prop="cpu2" align="center"/>
          </el-table-column>
          <el-table-column label="gpu" align="center">
            <el-table-column prop="gpu1" align="center"/>
            <el-table-column prop="gpu2" align="center"/>
          </el-table-column>
          <el-table-column label="qbb" align="center">
            <el-table-column prop="qb1" align="center"/>
            <el-table-column prop="qb2" align="center"/>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!--   彩色柱状图   -->
    <div class="zhu-zhuang-tu" v-for="(item,i) in footTitle" :key="i">
      <div class="label-title">{{ item.title }}</div>
      <div style="width: 100%;height: 200px">
        <footMyTabel class="footMyTable" :colors="item.colors" :data="item.data" :name="item.name"/>
      </div>

    </div>
  </div>
</template>

<script setup>
import footMyTabel from "../../../global/footMyCoulum.vue";

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
</script>

<style scoped lang='scss'>
.foot {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 59px;
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
</style>
