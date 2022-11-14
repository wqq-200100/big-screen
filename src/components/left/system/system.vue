<template>
  <div class="system">
    <div class="label-title">上云系统数TOP10</div>
    <div class="boxsurvey">
      <div style="height: 100%; display: flex">
        <div class="bodxs">
          <footMyCoulum
              :colors="footTitle.colors"
              :data="footTitle.data"
              :name="footTitle.name"
          ></footMyCoulum>
        </div>
        <div class="bodxs">
          <footMyCoulum
              :colors="footTitle1.colors"
              :data="footTitle1.data"
              :name="footTitle1.name"
          ></footMyCoulum>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import footMyCoulum from "../../../global/footMyCoulum.vue";


let footTitle = $ref({
  colors: [
    "rgba(31, 195, 255, 0)",
    "rgba(31, 195, 255, 0)",
    "rgba(31, 195, 255, 1)",
  ],
  name: [
    "市委社治委",
    "市应急局",
    "市农业农村局",
    "市生态环境局",
    "市财政局",
  ],
  data: [27, 24, 19, 18, 18].sort((a, b) => a - b),
});

let footTitle1 = $ref({
  colors: [
    "rgba(165, 19, 206, 0)",
    "rgba(165, 19, 206, 0)",
    "rgba(165, 19, 206, 0.8)",
  ],
  name: ["成都市防雷中心", "市医保局", "市生态环境局", "市教育局", "市经信局"],
  data: [16, 15, 14, 13, 12].sort((a, b) => a - b),
});
</script>

<style scoped lang='scss'>
.system {
  margin-top: 10px;

  .boxsurvey {
    width: 100%;
    height: 196px;
    margin: 10px 0;
    font-size: 5px;

    .bodxs {
      height: 90%;
      flex: 1;
    }
  }

}

</style>
