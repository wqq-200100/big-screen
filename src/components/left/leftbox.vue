<template>
  <div>
    <boxTitle v-slot:headerleft> 政务云资源总概览 </boxTitle>

    <!-- 上云概览 -->
      <overview/>

    <!-- 云上资源利用率 -->
    <utilization/>

    <!-- 上云系统数TOP10 -->
    <system/>

    <!-- 安全态势 -->
    <safe/>
  </div>
</template>
<script setup>
import boxTitle from "../../global/boxTitle.vue";
import overview from "./overview/overview.vue";
import utilization from "./utilization/utilization.vue";
import system from "./system/system.vue";
import safe from "./safe/safe.vue";

</script>


  