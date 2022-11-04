<template>
  <div class="overview">
    <div class="label-title">上云概览</div>
    <div class="boxsurvey">
      <div class="ting1">
        <div class="endud">
          <div>运行中</div>
          <div>停运</div>
        </div>
      </div>
      <div class="leftboxs1">
        <div style="width: 100%">
          <div v-for="(itme, i) in oncloud" :key="i" class="leftui1">
            <div class="bordsx">
              <div class="bordse">
                <dv-border-box7 :color="orthogonColor">
                  <div class="fontle" dv-bg>
                    {{ itme.unitnum }}<span>{{ itme.unittype }}</span>
                  </div>
                </dv-border-box7>
              </div>

              <div class="Cloudsty">{{ itme.nuitname }}</div>
            </div>
            <div class="leftuio">
              <div class="leftuioy">
                {{ itme.citynum }}<span>{{ itme.unittype }}</span>
              </div>
              <div style="margin-top: 3px; color: rgb(2, 172, 169)">
                {{ itme.cityname }}
              </div>
            </div>
            <div class="leftuio">
              <div class="leftuioy">
                {{ itme.districtnum }}<span>{{ itme.unittype }}</span>
              </div>
              <div style="margin-top: 3px; color: rgb(2, 172, 169)">
                {{ itme.districtname }}
              </div>
            </div>
          </div>
        </div>

        <div style="width: 100%">
          <div class="leftij" v-for="(itme, i) in oncloudStatistics" :key="i">
            <div class="Sgonthegih">
              {{ itme.StatisticsName }}
              <!-- 云服务器ECS -->
            </div>
            <div class="ighrts">
              <myTabelboxleft :data="itme.Statisticsnum"></myTabelboxleft>
            </div>
            <div class="Egonthegih">
              {{ itme.Statisticsnum[0] }}<span>{{ itme.StatisticsType }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import myTabelboxleft from "./myTabelboxleft.vue";

let orthogonColor = $ref([
  "rgba(14, 238, 238, 0.63)",
  "rgba(14, 238, 238, 0.63)",
]);
let footdata = $ref({
  data: [255],
});
let footdata1 = $ref({
  data: [4073],
});
let footdata2 = $ref({
  data: [131],
});

let oncloud = $ref([
  {
    unitnum: 132,
    nuitname: "上云单位数",
    citynum: 105,
    cityname: "市级",
    districtnum: 27,
    districtname: "区县",
    unittype: "个",
  },
  {
    unitnum: 680,
    nuitname: "上云系统数",
    citynum: 434,
    cityname: "市级",
    districtnum: 24,
    districtname: "区县",
    unittype: "个",
  },
]);

let oncloudStatistics = $ref([
  {
    StatisticsName: "宿主机",
    Statisticsnum: [225],
    StatisticsType: "台",
  },
  {
    StatisticsName: "云服务器ECS",
    Statisticsnum: [4073],
    StatisticsType: "台",
  },
  {
    StatisticsName: "裸金属服务器",
    Statisticsnum: [131],
    StatisticsType: "台",
  },
]);
</script>

<style scoped lang='scss'>
.overview{
  margin-top: 10px;
  .boxsurvey {
    width: 100%;
    height: 196px;
    font-size: 5px;

    .ting1 {
      width: 100%;
      height: 20px;
      display: flex;
      justify-content: end;

      .endud {
        display: flex;
        width: 130px;
        justify-content: space-around;
      }
    }
    .leftboxs1 {
      display: flex;
      justify-content: space-between;
      height: 100%;

      .leftui1 {
        display: flex;
        width: 100%;
        // border:1px solid red;
        height: 50%;

        .bordsx {
          height: 100%;
          width: 40%;

          .bordse {
            height: 40px;

            .fontle {
              text-align: center;
              line-height: 40px;
              font-size: 22px;
              color: yellow;
            }
          }

          .Systy {
            text-align: center;
            width: 100%;
            margin-top: 10px;
          }
          .Cloudsty {
            text-align: center;
            color: rgb(2, 172, 169);
            width: 100%;
            margin-top: 10px;
          }
        }
        .leftuio {
          text-align: center;
          width: 30%;

          .leftuioy {
            margin-top: 8px;
            font-size: 20px;
            color: yellow;
          }
        }
      }

      .leftij {
        height: 23%;
        margin-top: 10px;
        display: flex;

        .Sgonthegih {
          line-height: 46px;
          width: 26%;
          font-size: 6px;
        }

        .ighrts {
          height: 100%;
          width: 58%;
        }

        .Egonthegih {
          color: rgb(255, 196, 0);
          line-height: 46px;
          width: 15%;
          text-align: end;
        }
      }
    }
  }
}
</style>
