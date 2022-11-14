<template >
  <div class="foot">
    <!--   表格   -->
    <div class="zhu-zhuang-tu">
      <div class="label-title">资源动态伸缩</div>
      <div class="first-table">
<!--        <el-table :data="tableData" border style="width: 100%" :header-cell-style="headerMethod">-->
<!--          <el-table-column prop="date" label="Date" width="80" />-->
<!--          <el-table-column prop="cpu1" label="Name" width="80" />-->
<!--          <el-table-column prop="cpu2" label="Address" />-->
<!--          <el-table-column prop="qb1" label="Address" />-->
<!--          <el-table-column prop="qb2" label="Address" />-->
<!--          <el-table-column prop="qb2" label="Address" />-->
<!--          <el-table-column prop="qb2" label="Address" />-->
<!--        </el-table>-->
        <el-table id="my-table" :data="tableData" >
          <el-table-column prop="date" align="center" label="年-月" width="80"/>

          <el-table-column label="cpu（核）" align="center">
            <el-table-column prop="cpu1" align="center"/>
            <el-table-column prop="cpu2" align="center"/>
          </el-table-column>

          <el-table-column label="内存（GB）" align="center">
            <el-table-column prop="gpu1" align="center"/>
            <el-table-column prop="gpu2" align="center"/>
          </el-table-column>

          <el-table-column label="存储（GB）" align="center">
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
    title: 'CPU使用TOP5',
    colors: [
      '#b186a1',
      '#664f97',
      '#584572'
    ],
    name: ["衬成都老龄委门户网站", "羊毛成都经信委微信管理平台", "雪纺成都市市民云服务平台", "裤成都市城市安全与应急管理研究院网站", "高成都市农业职业经理人信息管理交流平台", "袜成都市环境空气监测管理系统"],
    data: [198, 139, 155, 121, 155, 155].sort((a, b) => a - b)
  }, {
    title: '内存使用TOP5',
    colors: [
      '#ceacb3',
      '#9a7b81',
      '#936886'
    ],
    name: ["蓉创e平台", "成都市人民政府台湾事务办公室门户", "成都市中心城区非生活用水户远程监控系统", "成都市政府投资项目监督网", "“成都服务”APP", "政务云安全管理中心平台"],
    data: [100, 183, 155, 191, 195, 222].sort((a, b) => a - b)
  }, {
    title: '存储使用TOP5',
    colors: [
      'rgba(213,171,168,0.76)',
      '#f3796b',
      '#da4d61'
    ],
    name: ["成都市养老服务信息平台", "成都市水务工程质量监督站信息管理平台", "成都市技能人才培养公共服务平台", "水质自动监测站中心平台控制系统", "成都市卫生健康委员会信用信息系统", "成都市防雷中心"],
    data: [100, 133, 155, 121, 159, 123].sort((a, b) => a - b)
  },
])

function objectSpanMethod({row, column, rowIndex, columnIndex}) {
  if (rowIndex % 2 === 0) {
    if (columnIndex === 0) {
      return [1, 2];
    } else if (columnIndex === 1) {
      return [0, 0];
    }
  }
}

function headerMethod({row,columnIndex,rowIndex}) {
  if (row[0].level === 1) {
    row[1].colSpan = 0;
    row[2].colSpan = 2;
    if (columnIndex === 0) {
      return { display: "none" };
    }
  }
}

const tableData = $ref([
  {
    date: '2018-12',
    cpu1: 58,
    cpu2: 89,
    gpu1: 172,
    gpu2: 129,
    qb1: 492,
    qb2: 344,
  }, {
    date: '2019-01',
    cpu1: 44,
    cpu2: 77,
    gpu1: 111,
    gpu2: 231,
    qb1: 229,
    qb2: 122,
  }, {
    date: '2019-02',
    cpu1: 100,
    cpu2: 93,
    gpu1: 31,
    gpu2: 90,
    qb1: 23,
    qb2: 399,
  }, {
    date: '2019-03',
    cpu1: 412,
    cpu2: 521,
    gpu1: 142,
    gpu2: 123,
    qb1: 421,
    qb2: 132,
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
    ::v-deep(.el-table){
      border: 2px solid rgb(29, 169, 220) !important;
    }
    ::v-deep(.el-table__body td.el-table__cell) {
      background: rgb(10, 10, 30);
      color: #fff;
      border: 1px solid rgb(36,75,89);
    }

    ::v-deep(.el-table thead.is-group th.el-table__cell) {
      background: rgb(10, 10, 30);
      color: #ddd;
      //border: none;
      border-right: 2px solid rgb(36,75,89);
    }

    ::v-deep(.el-table thead tr:nth-child(2)){
      display: none;
    }
  }

  .zhu-zhuang-tu {
    flex: 1;
    border: 1px solid rgb(6, 158, 224);
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
