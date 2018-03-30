<template>

    <div class="Company">
        <!-- second nav -->
        <div class="pageHeader pageheadercta">
            <div class="secondary-nav">
              <div class="container-fluid">
                  <div class="row">
                      <div class="col-md-9 col-lg-9 snav_left">
                          <h2>公司</h2>
                          <ul>
                              <li v-for="(Menu,Idx) in OverviewList">
                              <a  :data-element-name="Menu.name" data-element-type="tab" :href="Menu.tabNo">{{Menu.name}}</a>
                              </li>
                          </ul>
                      </div>
                      
                  </div>
              </div>
            </div>
        </div>
        <!-- content -->
        <div class="content-container" style="padding-top: 0px;">
            <Company/>
        </div>

        <!-- <img style="width: 100%;"  src="static/img/Icon/Company/SmartHox_Company_banner1.png"> -->
        <!-- tab -->
        <!-- <div class="TabHead">
            <span v-for="(Tab,Idx) in TabHeadList" :class="{'CursorPointer':true,'tabActive':CurTab == Tab}" @click="ChangeTab(Tab)">{{Tab}}</span>
        </div> -->
        <!-- <div>
            <Company v-if="CurTab == '公司'"/>
        </div> -->
    </div>
</template>
<script>
import Company from '../../components/SmartHox/Tab/Company/Company'

  export default{
    data: function () {
      return {
        CurTab:'公司',
        TabHeadList:['公司'],
        OverviewList:[
          {'name':'概述','tabNo':'#overview'},
          {'name':'发展历程','tabNo':'#developmentHistory'},
          {'name':'团队','tabNo':'#team'}
        ],
        BlockInfo:[
            {'title':'使命','content':'万物物联，创造美好生活','img':'static/img/Icon/Company/SmartHox_Company_icon7.png'},
            {'title':'愿景','content':'打造最有价值的物联网产品数据流公司','img':'static/img/Icon/Company/SmartHox_Company_icon8.png'},
            {'title':'价值观','content':'使命感、饥饿感、坦诚、踏实、纯粹、敬畏、 改变之力、助他精神、创新与变革','img':'static/img/Icon/Company/SmartHox_Company_icon9.png'}
        ]
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
