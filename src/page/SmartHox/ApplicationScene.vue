<template>
    <div class="ApplicationScene">
        <img  style="width: 100%;"  src="static/img/Banner/SmartHox_banner2.png">
        <div class="TabHead">
            <span v-for="(Tab,Idx) in TabHeadList" :class="{'CursorPointer':true,'tabActive':CurTab == Tab}" @click="ChangeTab(Tab)">{{Tab}}</span>
        </div>

        <div>
            <Community v-if="CurTab == '智能社区'"/>
            <Hotel v-if="CurTab == '智慧酒店'"/>
            <Agriculture v-if="CurTab == '智能农业'"/>
            <Industry v-if="CurTab == '智慧工业'"/>
            <Environmental v-if="CurTab == '智慧环保'"/>
        </div>
        
    </div>
</template>
<script>
import Community from '../../components/SmartHox/Tab/ApplicationScene/Community'
import Hotel from '../../components/SmartHox/Tab/ApplicationScene/Hotel'
import Agriculture from '../../components/SmartHox/Tab/ApplicationScene/Agriculture'
import Industry from '../../components/SmartHox/Tab/ApplicationScene/Industry'
import Environmental from '../../components/SmartHox/Tab/ApplicationScene/Environmental'
  export default{
    data: function () {
      return {
        value2:0,
        CurTab:'智能社区',
        TabHeadList:['智能社区','智慧酒店','智能农业','智慧工业','智慧环保']
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
        Community,
        Hotel,
        Agriculture,
        Industry,
        Environmental
      

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
.ApplicationScene{
    .TabHead{
        width: 100%;
        overflow: visible;
        height: $TabHeight;
        background-color: #fff;
        span{
            width: 20%;
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
            background-color: #3E4095;
        }
        
    }
    .tabActive:after{
        display: block;
        position: absolute;
        background-color: #3E4095;
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
