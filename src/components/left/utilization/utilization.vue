<template>
  <div class="utilization">
    <div class="label-title">云上资源利用率</div>
    <div class="boxsurvey">
      <div style="width: 100%; height: 100%; display: flex">
        <div class="leftbious" v-for="(itme, i) in datavaluearr" :key="i">
          <div style="width: 100%; height: 100%; flex: 2">
            <div class="tutop">
              <Dashboard
                  style="width: 140px; height: 140px"
                  :dataValue="itme.num"
              ></Dashboard>
            </div>
            <div class="leftuioq">{{ itme.name }}({{ itme.type }})</div>
          </div>
          <div class="iio">
            <div class="uid">
              <div>
                {{ itme.undistributed }}<span>{{ itme.type }}</span>
              </div>
              <div class="fontcolor">未分配</div>
            </div>

            <div class="uid">
              <div>
                {{ itme.allocated }}<span>{{ itme.type }}</span>
              </div>
              <div class="fontcolor">已分配</div>
            </div>

            <div class="uid">
              <div>
                {{ itme.const }}<span>{{ itme.type }}</span>
              </div>
              <div class="fontcolor">总量</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Dashboard from "../../../global/Dashboard.vue";


let datavaluearr = $ref([
  {
    num: 98,
    name: "CPU",
    type: "核",
    undistributed: 0,
    allocated: 3542,
    const: 0,
  },
  {
    num: 62,
    name: "内存",
    type: "GB",
    undistributed: 67729,
    allocated: 109427,
    const: 177156,
  },
  {
    num: 1,
    name: "存储",
    type: "TB",
    undistributed: 3215,
    allocated: 23,
    const: 3238,
  },
]);
</script>

<style scoped lang='scss'>
.utilization{
  margin-top: 10px;
  .boxsurvey {
    width: 100%;
    height: 196px;
    font-size: 5px;
    .leftbious {
      width: 100%;
      height: 100%;
      display: flex;
      flex: 1;

      .iio {
        flex: 1;

        .uid {
          margin-top: 8px;
          color: rgba(47, 140, 203);
          font-size: 14px;
          .fontcolor {
            color: #fff;
            font-weight: 400;
            font-size: 15px;
          }
          div{
            font-size: 16px;
            span{
              font-size: 12px;
            }
          }
        }
      }

      .tutop {
        margin-top: 3%;
      }

      .leftuioq {
        text-align: center;
        width: 100%;
        height: 20%;
        color: rgb(2, 172, 169);
        font-size: 17px;
        font-weight: 800;
      }
    }
  }

}
</style>
