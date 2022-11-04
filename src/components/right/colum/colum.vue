<template>
  <div class="centerBox">
    <div class="label-title">存储</div>
    <div class="lineChart">
      <colum class="aaa"
           :colors="lineChartData.colors"
           :data="lineChartData.data"
           :name="lineChartData.name"
      />
    </div>
  </div>
</template>

<script setup>
import colum from "../../../global/footMyCoulum.vue";

let lineChartData = $ref(
    {
      title: 'CPU',
      colors: [
        '#f6a992',
        '#ec9b5a',
        '#b26043',
      ],
      name: ["ssd存储", "FC存储", "分布式存储", "视频云存储"],
      data: [198, 39, 55, 121].sort((a, b) => a - b)
    }
)
</script>

<style scoped lang='scss'>
.centerBox {
  margin-top: 30px;

  .aaa {
    height: 120px;
    margin-top: 15px;
  }
}
</style>
