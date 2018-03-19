<template>
    <div class="Products">
        <!-- banner -->
       <!--  <Carousel v-model="value2" dots="none" arrow="never">
            <CarouselItem>
                <div class="demo-carousel">
                    <img style="width: 100%;"  src="static/img/Banner/SmartHox_banner1.png">
                </div>
            </CarouselItem>
        </Carousel> -->
        <img style="width: 100%;"  src="static/img/Banner/SmartHox_banner3.png">
        <!-- tab -->
        <div class="TabHead">
            <span v-for="(Tab,Idx) in TabHeadList" :class="{'CursorPointer':true,'tabActive':CurTab == Tab}" @click="ChangeTab(Tab)">{{Tab}}</span>
        </div>
        <div>
            <DeviceAccess v-if="CurTab == '设备接入'"/>
            <NetHardware v-if="CurTab == '联网模块'"/>
            <OperationCenter v-if="CurTab == '运营中心'"/>
            <DataCenter v-if="CurTab == '数据中心'"/>
        </div>
    </div>
</template>
<script>
import DeviceAccess from '../../components/SmartHox/Tab/Products/DeviceAccess'
import NetHardware from '../../components/SmartHox/Tab/Products/NetHardware'
import OperationCenter from '../../components/SmartHox/Tab/Products/OperationCenter'
import DataCenter from '../../components/SmartHox/Tab/Products/DataCenter'


  export default{
    data: function () {
      return {
        CurTab:'设备接入',
        TabHeadList:['设备接入','联网模块','运营中心','数据中心']
      }
    },
    mounted: function () {
      
    },
    created() {
      
    },
    computed: {
      
    },
    watch: {
      
    },
    components: {
        DeviceAccess,
        NetHardware,
        OperationCenter,
        DataCenter

    },
    methods: {
        ChangeTab(tab){
            this.CurTab = tab
        }
     

    }
  }
</script>
<style lang="scss">
$TabHeight: 30px;
.Products{
    .TabHead{
        width: 100%;
        overflow: visible;
        height: $TabHeight;
        background-color: #fff;
        span{
            width: 25%;
            height: 100%;
            display: inline-block;
            border-right: 2px solid #eee;
            background-color: rgb(0,0,0);
            color: #fff;
            text-align: center;
            line-height: $TabHeight;
            position: relative;
            z-index: 9;
        }
        span:last-child{
            border-right: 0px solid #eee;
        }
        .tabActive{
            background: rgb(68,114,196);
        }
        
    }
    .tabActive:after{
        display: block;
        position: absolute;
        background: rgb(68,114,196);
        width: 30px;
        height: 30px;
        top: 0px;
        left: 50%;
        content: "";
        transform:rotate(-45deg) translateX(-15px);
        -ms-transform:rotate(-45deg) translateX(-15px);   /* IE 9 */
        -moz-transform:rotate(-45deg) translateX(-15px);  /* Firefox */
        -webkit-transform:rotate(-45deg) translateX(-15px); /* Safari 和 Chrome */
        -o-transform:rotate(-45deg) translateX(-15px);
        z-index: -9;
    }
}
</style>
