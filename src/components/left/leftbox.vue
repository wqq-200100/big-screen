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
                    <div style="width:65%">
                        <div class="leftui1">
                            <div class="bordsx" style="width:60px">
                            <div class="bordse">
                                <dv-border-box7 :color="['rgba(14, 238, 238, 0.63)', 'rgba(14, 238, 238, 0.63)']">
                                    <div class="fontle" dv-bg>
                                        <!-- <div>132个</div> -->
                                       132<span style="font-size: 6px;">个</span>
                                    </div>
                                </dv-border-box7>
                            </div>
                               
                               
                            <div style="text-align: center;width:60px;margin-top: 3px;">上云单位数</div>
                            </div>
                            <div class="leftuio" style="width:40px">
                                <div class="leftuioy">105<span style="font-size: 6px;">个</span></div>
                                <div style="margin-top: 3px;">市级</div>
                            </div>
                            <div class="leftuio"  style="width:40px">
                                <div class="leftuioy">27<span style="font-size: 6px;">个</span></div>
                                <div style="margin-top: 3px;">市级</div>
                            </div>
                        </div>

                        <div class="leftui1">
                            <div class="bordsx" style="width:60px">
                            <div class="bordse">
                                <dv-border-box7 :color="['rgba(14, 238, 238, 0.63)', 'rgba(14, 238, 238, 0.63)']">
                                    <div class="fontle" dv-bg>
                                        <!-- <div>132个</div> -->
                                       132<span style="font-size: 6px;">个</span>
                                    </div>
                                </dv-border-box7>
                            </div>
                               
                               
                            <div style="text-align: center;width:60px;margin-top: 3px;">上云单位数</div>
                            </div>
                            <div class="leftuio" style="width:40px">
                                <div class="leftuioy">105<span style="font-size: 6px;">个</span></div>
                                <div style="margin-top: 3px;">市级</div>
                            </div>
                            <div class="leftuio"  style="width:40px">
                                <div class="leftuioy">27<span style="font-size: 6px;">个</span></div>
                                <div style="margin-top: 3px;">市级</div>
                            </div>
                        </div>

                       

                        
                    </div>

                    <div style="width:100%">
                        <div class="leftij">
                            <div class="gonthegih"  style="width:77px;font-size:6px">
                                宿主机
                                <!-- 云服务器ECS -->
                            </div>
                            <div class="ighrts" style="width:170px;">
                                <myTabelboxleft></myTabelboxleft>
                            </div>
                            <div class="gonthegih"  style="width:45px; text-align: end;">
                                255台
                            </div>
                        </div>
                        <div class="leftij">
                            <div class="gonthegih"  style="width:77px;font-size:6px">
                                <!-- 宿主机 -->
                                云服务器ECS
                            </div>
                            <div class="ighrts" style="width:170px;">
                                <myTabelboxleft></myTabelboxleft>
                            </div>
                            <div class="gonthegih"  style="width:45px; text-align: end;">
                                255台
                            </div>
                        </div>
                        <div class="leftij">
                            <div class="gonthegih"  style="width:77px;font-size:6px">
                                裸金属服务器
                                <!-- 云服务器ECS -->
                            </div>
                            <div class="ighrts" style="width:170px;">
                                <myTabelboxleft></myTabelboxleft>
                            </div>
                            <div class="gonthegih"  style="width:45px; text-align: end;">
                                255台
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
                <div style="display:flex">
                    <div class="leftbious" style="flex:1">
                        <div style="width:100%;height:100%;flex:1">
                            <div style="width:100% ;height:80%">
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
                                <div>未分配</div>
                            </div>
                           
                            <div class="uid">
                                <div>0<span>核</span></div>
                                <div>未分配</div>
                            </div>
                        </div>
                    </div>
                    <div class="leftbious" style="flex:1">
                        <div style="width:100%;height:100%;flex:1">
                            <div style="width:100% ;height:80%">
                                <ziyaun :dataValue="dataValue1"></ziyaun>
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
                                <div>未分配</div>
                            </div>
                           
                            <div class="uid">
                                <div>0<span>核</span></div>
                                <div>未分配</div>
                            </div>
                        </div>
                    </div>
                    <div class="leftbious" style="flex:1">
                        <div style="width:100%;height:100%;flex:1">
                            <div style="width:100% ;height:80%">
                                <ziyaun :dataValue="dataValue2"></ziyaun>
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
                                <div>未分配</div>
                            </div>
                           
                            <div class="uid">
                                <div>0<span>核</span></div>
                                <div>未分配</div>
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
                <div style="display: flex;">
                    <div class="bodxs" style="flex: 1;">
             
                            <myTabel1 :colors="footTitle.colors" :data="footTitle.data" :name="footTitle.name"></myTabel1>
                    </div> 
                    <div class="bodxs" style="flex: 1;">
                        <myTabel1 :colors="footTitle.colors" :data="footTitle.data" :name="footTitle.name"></myTabel1>
                        
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
                        <div small-bg>
                            <dv-decoration-9 :dur="40" style="width:100px;height:100px;">
                              <div color-green font-600 class="content" bg="~ dark/0">
                                66%
                              </div>
                            </dv-decoration-9>
                         
                            <div style="text-align:center; margin-top: 10px">
                                安全警告
                            </div>
                        </div>
                    </div>
                    <div class="buhuds">
                        <div small-bg>
                            <dv-decoration-9 :dur="40" style="width:100px;height:100px;">
                              <div color-green font-600 class="content" bg="~ dark/0">
                                66%
                              </div>
                            </dv-decoration-9>
                        </div>
               
                        <div style="text-align:center; margin-top: 10px">
                            安全警告
                        </div>
                    </div>
                    <div class="buhuds">
                        <div small-bg>
                            <dv-decoration-9 :dur="40" style="width:100px;height:100px;">
                              <div color-green font-600 class="content" bg="~ dark/0">
                                66%
                              </div>
                            </dv-decoration-9>
                 
                            <div style="text-align:center; margin-top: 10px;">
                                安全警告
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
    name: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    data: [198, 39, 55, 121, 55, 155].sort((a, b) => a - b)
  }, 
)


</script>

<style scoped lang="scss">
.gonthegih{
    line-height: 28px;
}
.content{
    font-size: 25px;
    text-shadow: 0 0 3px #eb146e;
  }
.buhuds{
    margin-top: 10px;
    
    /**border:1px solid red; */
   

}
.leftuuius{
    justify-content: space-around;
}

.bodxs{
    height: 145px;
  
    /**  border: 1px solid rgb(38, 0, 255); */
}
.iio{
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
    font-size: 0.09rem;
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
    font-size: 12px;

}
.bordsx{
    width: 100%;
    height: 100%;
}
.leftij{
    height:30px;
    margin-top: 10px;
    // border: 1px solid red;
    display: flex;
}
.leftui1{
    display:flex;
    width: 100%;
    // border:1px solid red;
    height: 62px;
    

}
.boxsurvey{
// border:1px solid red;
width:100%;
height:150px;
margin: 2px 0;
font-size: 5px;
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

  