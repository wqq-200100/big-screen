<template>
  <!-- 标题 -->
  <boxTitle v-slot:headerleft>市民云资源概览</boxTitle>

  <!-- 仪表图 -->
  <myMeter/>

  <!-- 柱状图 -->
  <colum/>

  <!-- 折线图 -->
  <foldLine/>

</template>

<script setup>
import myMeter from "./meter/meter.vue";
import colum from "./colum/colum.vue";
import foldLine from "./foldLine/foldLine.vue";

import boxTitle from "../../global/boxTitle.vue"
</script>

<style scoped lang='scss'>

</style>
