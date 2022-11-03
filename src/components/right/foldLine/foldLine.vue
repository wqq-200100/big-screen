<template>
  <div class="footBox">
    <div class="fUtilization-title">
      <div class="label-title">利用率</div>
      <div class="zhexian-left" style="height: 200px;width: 90%">
        <utilization/>
      </div>
    </div>
    <div class="flow">
      <div class="label-title">近一周流量峰值</div>
      <div class="zhexian-right">
        <flow/>
      </div>
    </div>
  </div>
</template>

<script setup>
import utilization from "../utilization-chart.vue";
import flow from "../flow-chart.vue";

</script>

<style scoped lang='scss'>
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
