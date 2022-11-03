<template>
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
</template>

<script setup>
import Dashboard from "../../../global/Dashboard.vue";


let dataValue1 = $ref(99)
let dataValue2 = $ref(67)
</script>

<style scoped lang='scss'>
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
</style>
