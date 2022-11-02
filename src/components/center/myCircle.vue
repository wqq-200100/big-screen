<template>
  <div class="circle-box">
    <div class="circle box-1" v-for="(item,key) in data" :style="`transform: rotate(${72*key}deg)`">
      <div class="info" :style="`transform:translate(-50%, 50%) rotate(-${72*key}deg)`">
        <div class="text">
          <p>上云系统数<span>{{ item.cloud }}</span>个</p>
          <p>虚拟主机数<span>{{ item.fictitious }}</span>个</p>
        </div>
        <svg class="icon-yun" aria-hidden="true">
          <use xlink:href="#icon-a-tupianyihuifu-58"></use>
        </svg>
        <div class="cloudName">
          {{ item.cloudName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = $ref(
    [
      {cloud: 11, fictitious: 21, cloudName: '浪潮云'},
      {cloud: 12, fictitious: 22, cloudName: '新华三云'},
      {cloud: 13, fictitious: 23, cloudName: '曙光云'},
      {cloud: 14, fictitious: 24, cloudName: '鲲鹏云'},
      {cloud: 15, fictitious: 25, cloudName: '城运云'},
    ]
)

</script>

<style lang='scss' scoped>
.circle-box {
  width: 100%;
  height: 100%;

  .circle {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: .5s;

    .info {
      position: absolute;
      left: 50%;
      top: -50%;
      transform: translate(-50%, 50%);

      .text {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        top: 10px;
        //margin-top: 12px;

        p {
          font-size: 12px;
          text-align: center;
          margin: 0;

          span {
            font-size: 15px;
            color: red;
            font-weight: bold
          }
        }
      }

      svg {
        width: 130px;
        font-size: 16px;
      }

      .cloudName {
        color: #2d86e8;
        transform: translate(50%, -50%);
        position: absolute;
        left: 20px;
        top: 126px;
        text-shadow: 2px 3px 3px #2d86e8;
      }
    }
  }
}
</style>
