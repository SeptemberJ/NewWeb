<template>
    <div class="Company">
        <!-- banner -->
       <!--  <Carousel v-model="value2" dots="none" arrow="never">
            <CarouselItem>
                <div class="demo-carousel">
                    <img style="width: 100%;"  src="static/img/Banner/SmartHox_banner1.png">
                </div>
            </CarouselItem>
        </Carousel> -->
        <img style="width: 100%;"  src="static/img/Icon/Company/SmartHox_Company_banner1.png">
        <!-- tab -->
        <div class="TabHead">
            <span v-for="(Tab,Idx) in TabHeadList" :class="{'CursorPointer':true,'tabActive':CurTab == Tab}" @click="ChangeTab(Tab)">{{Tab}}</span>
        </div>
        <div>
            <Company v-if="CurTab == '公司'"/>
            <!-- <NetHardware v-if="CurTab == '联网模块'"/>
            <OperationCenter v-if="CurTab == '运营中心'"/>
            <DataCenter v-if="CurTab == '数据中心'"/> -->
        </div>
    </div>
</template>
<script>
import Company from '../../components/SmartHox/Tab/Company/Company'

  export default{
    data: function () {
      return {
        CurTab:'公司',
        TabHeadList:['公司']
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
        Company

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
.Company{
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
