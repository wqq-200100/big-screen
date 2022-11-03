<template>
  <div class="main-title">
    <div demo-bg  >
      <div class="dv-bg" dv-bg>
        <dv-decoration-8 style="width:300px;height:70px;"/>
        <dv-decoration-10 style="width:20%;height:110px;"/>
        <div class="title">
          <div class="title-text center">政务云资源总览</div>
          <dv-decoration-3 style="width:250px;height:30px;"/>
        </div>
        <dv-decoration-10 style="width:20%;height:120px;"/>
        <dv-decoration-8 :reverse="true" style="width:300px;height:70px;"/>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped lang='scss'>
.main-title {
  border-bottom: 1px solid rgb(6, 158, 224);

  .dv-bg {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    .title-text {
      padding: 0 22px;
      font-size: 23px;
      color: rgb(140, 144, 151);
    }

    .center {
      color: #20a7b3;
      font-size: 33px;
    }
  }
}


</style>
