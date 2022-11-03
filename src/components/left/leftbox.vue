<template>
    <div>
        <boxTitle v-slot:headerleft>
            政务云资源总概览
        </boxTitle>
        <div>
          <div >
            <div class="label-title" >
              上云概览
            </div>
            <div class="boxsurvey">
                <div class="ting1">
                    <div class="disfxse">
                        <div class="endud">
                            <div>运行中</div>
                            <div>停运</div>
                        </div>
                    </div>
                </div>
                <div class="leftboxs1">
                    <div style="width:100%">
                        <div class="leftui1">
                            <div class="bordsx" style="width:40%">
                            <div class="bordse">
                                <dv-border-box7 :color="['rgba(14, 238, 238, 0.63)', 'rgba(14, 238, 238, 0.63)']">
                                    <div class="fontle" dv-bg>
                                        <!-- <div>132个</div> -->
                                       132<span style="font-size: 6px;">个</span>
                                    </div>
                                </dv-border-box7>
                            </div>
                               
                               
                            <div style="text-align: center;width:100%;margin-top: 10px;">上云单位数</div>
                            </div>
                            <div class="leftuio" style="width:30%">
                                <div class="leftuioy">105<span style="font-size: 6px;">个</span></div>
                                <div style="margin-top: 3px;">市级</div>
                            </div>
                            <div class="leftuio"  style="width:30%">
                                <div class="leftuioy">27<span style="font-size: 6px;">个</span></div>
                                <div style="margin-top: 3px;">区县</div>
                            </div>
                        </div>

                        <div class="leftui1">
                            <div class="bordsx" style="width:40%">
                            <div class="bordse">
                                <dv-border-box7 :color="['rgba(14, 238, 238, 0.63)', 'rgba(14, 238, 238, 0.63)']">
                                    <div class="fontle" dv-bg>
                                        <!-- <div>132个</div> -->
                                       680<span style="font-size: 6px;">个</span>
                                    </div>
                                </dv-border-box7>
                            </div>
                               
                               
                            <div style="text-align: center;width:100%;margin-top: 10px;">上云系统数</div>
                            </div>
                            <div class="leftuio" style="width:30%">
                                <div class="leftuioy">434<span style="font-size: 6px;">个</span></div>
                                <div style="margin-top: 3px;">市级</div>
                            </div>
                            <div class="leftuio"  style="width:30%">
                                <div class="leftuioy">244<span style="font-size: 6px;">个</span></div>
                                <div style="margin-top: 3px;">区县</div>
                            </div>
                        </div>
                    </div>

                    <div style="width:100%">
                        <div class="leftij">
                            <div class="gonthegih"  style="width:26%;font-size:6px">
                                宿主机
                                <!-- 云服务器ECS -->
                            </div>
                            <div class="ighrts" style="width:58%;">
                                <myTabelboxleft :data="footdata.data" ></myTabelboxleft>
                            </div>
                            <div class="gonthegih"  style="width:15%; text-align: end;">
                                255台
                            </div>
                        </div>
                        <div class="leftij">
                            <div class="gonthegih"  style="width:26%;font-size:6px">
                                <!-- 宿主机 -->
                                云服务器ECS
                            </div>
                            <div class="ighrts" style="width:58%;">
                                <myTabelboxleft :data="footdata1.data"></myTabelboxleft>
                            </div>
                            <div class="gonthegih"  style="width:15%; text-align: end;">
                                4073台
                            </div>
                        </div>
                        <div class="leftij">
                            <div class="gonthegih"  style="width:26%;font-size:6px">
                                裸金属服务器
                                <!-- 云服务器ECS -->
                            </div>
                            <div class="ighrts" style="width:58%;">
                                <myTabelboxleft :data="footdata2.data"></myTabelboxleft>
                            </div>
                            <div class="gonthegih"  style="width:15%; text-align: end;">
                                131台
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
          </div>
          <div>
            <div class="label-title">云上资源利用率
            </div>
            <div class="boxsurvey">
                <div style=" width:100%;height:100%; display:flex">
                    <div class="leftbious" style="flex:1">
                        <div style="width:100%;height:100%;flex:2">
                            <div class="tutop" style="width:100% ;height:60%">
                                <ziyaun :dataValue="dataValue"></ziyaun>
                            </div>
                            <div class="leftuioq" style="width:100% ;height:20%">
                                CPU(核)
                            </div>
                        </div>
                        <div class="iio" style="flex:1">
                            <div class="uid">
                                <div>0<span>核</span></div>
                                <div>未分配</div>
                            </div>
                         
                            <div class="uid">
                                <div>35422<span>核</span></div>
                                <div>已分配</div>
                            </div>
                           
                            <div class="uid">
                                <div>0<span>核</span></div>
                                <div>总量</div>
                            </div>
                        </div>
                    </div>
                    <div class="leftbious" style="flex:1">
                        <div style="width:100%;height:100%;flex:2">
                            <div class="tutop" style="width:100% ;height:60%">
                                <ziyaun :dataValue="dataValue1"></ziyaun>
                            </div>
                            <div class="leftuioq" style="width:100% ;height:20%">
                                内存(GB)
                            </div>
                        </div>
                        <div class="iio" style="flex:1">
                            <div class="uid">
                                <div>67729<span>GB</span></div>
                                <div>未分配</div>
                            </div>
                         
                            <div class="uid">
                                <div>109427<span>GB</span></div>
                                <div>已分配</div>
                            </div>
                           
                            <div class="uid">
                                <div>177156<span>GB</span></div>
                                <div>总量</div>
                            </div>
                        </div>
                    </div>
                    <div class="leftbious" style="flex:1">
                        <div style="width:100%;height:100%;flex:2">
                            <div class="tutop" style="width:100% ;height:60%">
                                <ziyaun :dataValue="dataValue2"></ziyaun>
                            </div>
                            <div class="leftuioq" style="width:100% ;height:10%">
                                存储(TB)
                            </div>
                        </div>
                        <div class="iio" style="flex:1">
                            <div class="uid">
                                <div>3215<span>TB</span></div>
                                <div>未分配</div>
                            </div>
                         
                            <div class="uid">
                                <div>23<span>TB</span></div>
                                <div>已分配</div>
                            </div>
                           
                            <div class="uid">
                                <div>3238<span>TB</span></div>
                                <div>总量</div>
                            </div>
                        </div>
                    </div>
                
                    <!-- <div class="leftbious" style="flex:1">
                        2
                    </div>
                    <div class="leftbious" style="flex:1">
                        3
                    </div> -->
                </div>
            </div>
          </div>
          <div>
            <div class="label-title">上云系统数TOP10
              
            </div>
            <div class="boxsurvey">
                <div style=" height:100%;display: flex;">
                    <div class="bodxs" style="flex: 1;">
             
                            <myTabel1 :colors="footTitle.colors" :data="footTitle.data" :name="footTitle.name"></myTabel1>
                    </div> 
                    <div class="bodxs" style="flex: 1;">
                        <myTabel1 :colors="footTitle1.colors" :data="footTitle1.data" :name="footTitle1.name"></myTabel1>
                        
                    </div>

                </div>
            </div>
          </div>
          <div>
            <div class="label-title">安全态势
              
            </div>
            <div class="boxsurvey">
                <div class="leftuuius" style="display:flex">
                    <div class="buhuds">
                        <div class="marginqconst" small-bg>
                            <dv-decoration-9 :dur="40" style="width:80%;height:65%; margin:0 10%">
                              <div color-green font-600 class="content" bg="~ dark/0">
                                4次
                              </div>
                            </dv-decoration-9>
                         
                            <div class='fontiue' style="text-align:center; margin-top: 20px">
                                安全警告
                            </div>
                        </div>
                    </div>
                    <div class="buhuds">
                        <div class="marginqconst" small-bg>
                            <dv-decoration-9 :dur="40" style="width:80%;height:65%; margin:0 10%">
                              <div color-green font-600 class="content" bg="~ dark/0">
                                3次
                              </div>
                            </dv-decoration-9>
                         
                            <div class='fontiue' style="text-align:center; margin-top: 20px">
                                安全风险
                            </div>
                        </div>
                    </div>
                    <div class="buhuds">
                        <div class="marginqconst" small-bg>
                            <dv-decoration-9 :dur="40" style="width:80%;height:65%; margin:0 10%">
                              <div color-green font-600 class="content" bg="~ dark/0">
                                2次
                              </div>
                            </dv-decoration-9>
                         
                            <div class='fontiue' style="text-align:center; margin-top: 20px">
                                安全事件
                            </div>
                        </div>
                    </div>
                 
                    
                </div>
              </div>
          </div>
        </div>   
</div>
</template>
<script setup>
import ziyaun from './ziyaun.vue'
import myTabel1 from './myTabel1.vue'
import myTabelboxleft from './myTabelboxleft.vue'
import boxTitle from "../../global/boxTitle.vue";
import { BorderBox7 as DvBorderBox7 } from '@kjgl77/datav-vue3'

let dataValue =$ref(98)
let dataValue1 =$ref(62)
let dataValue2 =$ref(1)


let footTitle = $ref(
  {
    colors: [
      '#b186a1',
      '#664f97',
      '#584572'
    ],
    name: ["市网络理政办", "市生态环境局", "市卫建委", "市教育局", "成都市大数据中心"],
    data: [27, 24, 19, 18, 18].sort((a, b) => a - b)
  }, 
)

let footTitle1= $ref(
  {
    colors: [
      '#b186a1',
      '#664f97',
      '#584572'
    ],
    name: ["市工商局", "市公安局", "市城管委", "市交通运输局", "K部门"],
    data: [16, 15, 14, 13, 12].sort((a, b) => a - b)
  }, 
)

let footdata= $ref(
  {
   
    data: [255]
  }, 
)
let footdata1= $ref(
  {
   
    data: [4073]
  }, 
)
let footdata2= $ref(
  {
   
    data: [131]
  }, 
)


</script>

<style scoped lang="scss">
.fontiue{
    font-size: 20px;
}
                     
.marginqconst{
    width:100%;
    height:100%;
    // border:1px solid red;
}
.tutop{
    margin-top:30%;
}
.gonthegih{
    line-height: 46px;
}
.content{
    font-size: 25px;
    text-shadow: 0 0 3px #eb146e;
  }
.buhuds{
    margin-top: 5%;
    width:30%;
    height:100%;
 
    
    /**   border:1px solid red; */
   

}
.leftuuius{
    // border:1px solid red;
    height:100%;
    justify-content: space-around;
}

.bodxs{
    margin-top: 2%;
    height: 90%;
  
    /**  border: 1px solid rgb(38, 0, 255); */
}
.iio{
    margin-top:15%;
    height: 100%;
    // border: 1px solid red;

}
.uid{
 margin-top: 8px;

}
.leftuioq{
    text-align: center;
}
.leftbious{
        // border:1px solid red;
        width:100%;
        height: 100%;
        display: flex;
}
.leftuioy{
    margin-top: 8px;
    font-size: 20px;
}
.leftuio{
    // border: 1px solid red;
    text-align: center;
}
.bordse{
    height:40px;
 
}
.fontle{
    text-align: center;
    line-height: 40px;
    font-size: 24px;

}
.bordsx{
    width: 100%;
    height: 100%;
}
.leftij{
    height:23%;
    margin-top: 10px;
    // border: 1px solid red;
    display: flex;
}
.leftui1{
    display:flex;
    width: 100%;
    // border:1px solid red;
    height: 50%;
    

}
.boxsurvey{
//;
width:100%;
height:196px;
margin: 2px 0;
font-size: 5px; 
// border:1px solid red
}

.ting1{
    // border:1px solid red;
    width:100%;
    height: 20px;
}
.disfxse{
    display: flex;
    justify-content: end;

}
.endud{
    display: flex;
    // border:1px solid red;
    width:130px;
    justify-content: space-around;
    
}

.leftboxs1{
    display:flex;
    justify-content:space-between;
    height:100%;
    /*border:1px solid rgb(255, 0, 200);*/
    

}
.ighrts{
    height:100%;
    width:100%;
   
    /* border: 1px solid rebeccapurple;*/
}
</style>

  