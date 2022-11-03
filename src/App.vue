<template>
    <v-scale-screen width="3000" height="1200">
      <div class="container">
        <div class="main">
          <!-- 头标题 -->
          <headerTitle/>

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
</template>
<script setup>
import VScaleScreen from 'v-scale-screen'
import headerTitle from "./global/headerTitle.vue";
import leftBox from "./components/left/leftbox.vue";
import middle from './components/center/middle.vue'
import rightBox from "./components/right/rightBox.vue";

</script>

<style lang="scss" scoped>
.container {
  width: 3000px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  background: rgb(10, 10, 30);

  .main {
    flex: 3;
    border: 2px solid rgb(6, 158, 224);

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
  }
}
</style>

