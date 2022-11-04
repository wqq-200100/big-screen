<template>
  <div class="safe">
    <div class="label-title">安全态势</div>
    <div class="boxsurvey">
      <div class="leftuuius">
        <div class="buhuds" v-for="(itme, i) in safety" :key="i">
          <div class="marginqconst" small-bg>
            <dv-decoration-9
                :dur="40"
                style="width: 80%; height: 65%; margin: 0 10%"
            >
              <div color-green font-600 class="content" bg="~ dark/0">
                {{ itme.num }}次
              </div>
            </dv-decoration-9>

            <div class="fontiue">{{ itme.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let safety = $ref([
  {
    num: 4,
    name: "安全警告",
  },
  {
    num: 3,
    name: "安全警告",
  },
  {
    num: 2,
    name: "安全警告",
  },
]);
</script>

<style scoped lang='scss'>
.safe{
  margin-top: 10px;

  .boxsurvey {
    width: 100%;
    height: 196px;
    margin: 2px 0;
    font-size: 5px;

    .leftuuius {
      height: 100%;
      justify-content: space-around;
      display: flex;
      color: rgb(210, 255, 195);

      .buhuds {
        margin-top: 5%;
        width: 30%;
        height: 100%;

        .marginqconst {
          width: 100%;
          height: 100%;

          .content {
            font-size: 25px;
            text-shadow: 0 0 3px #eb146e;
          }

          .fontiue {
            font-size: 20px;
            text-align: center;
            margin-top: 15px;
            color: #1495eb;
            font-weight: 800;
          }
        }
      }
    }
  }

}
</style>
