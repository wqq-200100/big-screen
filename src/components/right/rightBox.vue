<template>
  <!-- 标题 -->
  <boxTitle v-slot:headerleft>
    市民云资源概览
  </boxTitle>
  <div class="topBox">
    <div class="server-title">
      <div class="label-title">云服务器ECS</div>
      <div class="label-title">裸金属服务器</div>
    </div>
    <div class="meter">
      <Dashboard class="dashboard" :data-value="dataValue1"/>
    <!--仪表盘右的数据-->
      <div class="left-data">
        <div class="Stopped">
          <div class="num">0台</div>
          <div>已停止</div>
        </div>
        <div class="afoot">
          <div class="num">59台</div>
          <div>运行中</div>
        </div>
      </div>
      <div class="meter-right">
        <Dashboard class="dashboard" :data-value="dataValue2"/>
      </div>
      <div class="right-data">
        <div class="Stopped">
          <div class="num">0台</div>
          <div>已停止</div>
        </div>
        <div class="afoot">
          <div class="num">2台</div>
          <div>运行中</div>
        </div>
      </div>
    </div>
    <!--仪表盘下的数据-->
    <div class="memory">
      <div class="cpuNum">
        <div class="mg">
          <div class="num">431核</div>
          <div class="textColor">CPU</div>
        </div>
        <div>
          <div class="num">627<span>GB</span></div>
          <div class="textColor">内存</div>
        </div>
      </div>
      <div class="cpuNum">
        <div class="mg">
          <div class="num">40核</div>
          <div class="textColor">CPU</div>
        </div>
        <div>
          <div class="num">513<span>GB</span></div>
          <div class="textColor">内存</div>
        </div>
      </div>
    </div>
  </div>

  <div class="centerBox">
    <div class="label-title">存储</div>
    <div class="lineChart">
      <bar class="aaa"
           :colors="lineChartData.colors"
           :data="lineChartData.data"
           :name="lineChartData.name"
      />
    </div>
  </div>

  <div class="footBox">
    <div class="fUtilization-title">
      <div class="label-title">利用率</div>
      <div class="zhexian-left" style="height: 200px;width: 90%">
        <flow/>
      </div>
    </div>
    <div class="flow">
      <div class="label-title">近一周流量峰值</div>
      <div class="zhexian-right">
        <utilization/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Dashboard from "../../global/Dashboard.vue";
import bar from "../../global/footMyTabel.vue";
import flow from "./flow-bar.vue";
import utilization from "./utilization-bar.vue";
import boxTitle from "../../global/boxTitle.vue"

let dataValue1 = $ref(99)
let dataValue2 = $ref(67)

let lineChartData = $ref(
    {
      title: 'CPU',
      colors: [
        '#b186a1',
        '#664f97',
        '#584572',
      ],
      name: ["ssd存储", "FC存储", "分布式存储", "视频云存储"],
      data: [198, 39, 55, 121].sort((a, b) => a - b)
    }
)

</script>

<style scoped lang='scss'>
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

.topBox {
  margin-top: 15px;

  .server-title {
    display: flex;
    margin-top: 10px
  }

  .meter {
    display: flex;
    justify-content: space-around;
    //margin-top: 10px;

    .dashboard {
      width: 170px;
      height: 170px;
    }

    .left-data, .right-data {
      font-size: 16px;
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-around;
    }
  }

  .memory {
    display: flex;
    justify-content: space-around;
    margin-top: 8px;

    .cpuNum {
      display: flex;
      margin-right: 30px;

      .mg {
        margin-right: 80px;
      }

      .textColor {
        color: rgb(1, 299, 233);
      }
    }
  }

  .num {
    color: rgb(61, 175, 96);
  }

}

.centerBox {
  margin-top: 30px;

  .aaa {
    height: 100px;
    margin-top: 15px;
  }
}

.footBox {
  margin-top: 30px;

  .fUtilization-title {
    margin-top: 10px
  }

  .flow {
    margin-top: 30px;
  }
}


</style>
