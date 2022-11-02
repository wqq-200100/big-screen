<template>
  <div>
    <v-scale-screen width="3000" height="1200">
      <div class="container">
        <div class="main">
          <!-- 头标题 -->
          <div class="main-title">
            <div demo-bg>
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

          <div class="box">
            <!-- 左边 -->
            <div class="left-box">
              <leftBox></leftBox>
            </div>
            <!-- 中间主体 -->
            <div class="center-box">
              <middle></middle>
            </div>

            <!-- 右边 -->
            <div class="right-box">
              <rightBox/>
            </div>
          </div>
        </div>
      </div>
    </v-scale-screen>
  </div>
</template>
<script setup>
import VScaleScreen from 'v-scale-screen'
import leftBox from "./components/left/leftbox.vue";
import middle from './components/center/middle.vue'
import rightBox from "./components/right/rightBox.vue";

</script>

<style src="../src/assets/css/const.scss" scoped></style>
<style lang="scss" scoped>
.main-title {
  border-bottom: 1px solid rgb(6, 158, 224);
}

.box {
  display: flex;
  color: #fff;
  width: 100%;
  height: 100%;

  .left-box {
    color: #fff;
    flex: 1;
    border-right: 1px solid rgb(6, 158, 224);
    width: 100%;
    height: 91%
  }

  .center-box {
    width: 50%;
    flex: 3
  }

  .right-box {
    color: #fff;
    flex: 1;
    border-left: 1px solid rgb(6, 158, 224);
    height: 91%
  }
}


</style>

