<template>
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
</template>

<script setup>
const tablesText = $ref([
  {Hardware: '上云热门数', count: '32000+'},
  {Hardware: '上云系统数', count: '2300+'},
  {Hardware: '上云cpu栈', count: '23100+'},
  {Hardware: '内存', count: '59030GB'},
  {Hardware: '存储', count: '10800TB'}
])
</script>

<style scoped lang='scss'>
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
</style>
