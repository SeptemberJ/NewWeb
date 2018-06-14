<template>
    <div class="NetHardware">
        <div class="TelescopicBlock">
            <h1 class="marginTB_40 colorBlack">物联网硬件产品</h1>
            <p class="marginB_40">多协议支持，快速打通物联网接入。 全品类开发经验，灵活的产品模式</p>
            <Row type="flex" justify="space-between" class="code-row-bg" :gutter="16">
                <Col :xs="24" :sm="24" :md="12" :lg="12" v-for="(Block,Idx) in BlockInfo" class="marginB_10">
                    <div class="thumb-container  singleLineEllipse">
                        <div class="thumb-img"  :style="{'background-image':'url(' + Block.img +')'}">
                        </div>
                        <div class="thumb-details showHam" >
                            <div class="col-xs-1 col-md-1 col-sm-1" style="height: 86px;">
                              <i :class="[Block.icon]"></i>
                            </div>
                            <div class="col-xs-10 col-md-10 col-sm-10" style="height: 86px;">
                                <div class="detail-content clamp">
                                    <h3 class="clampingDetail" data-id="randomId7643" style="">
                                        <span class="asianLang" style="width: 100%">{{Block.title}}</span>
                                    </h3>
                                    <p class="clampingDetail" data-id="randomId9455" style="">
                                        <span class="asianLang" style="width: 200px">{{Block.content}}</span>
                                    </p>
                                </div>
                            </div>
                            <div class="col-xs-1 col-md-1 col-sm-1 cntClk" style="height: 86px;">
                                <i class="fa fa-bars detail-toggle"></i>
                            </div>
                            <div class="social-block">
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>

        <!-- <Row type="flex"  justify="center"  class="code-row-bg marginTB_40":gutter="16">
            <Col class="marginB_20" :xs="24" :sm="24" :md="8" :lg="8" v-for="(Block,Idx) in BlockInfo">
                <div style="height: 100%;" :class="{'Padding_20':true,'TextCenter':true,}">
                    <h3 class="HasCircleBorder">{{Block.title}}</h3>
                    <h3>{{Block.slogan}}</h3>
                    <p class="marginTB_40 TextLeft">{{Block.content}}</p>
                    <div class="SingleImg marginTB_40">
                        <img  style="width: 30%;height: 30%" :src="Block.img">
                    </div>
                </div>
            </Col>
            <div style="clear: both;"></div>
        </Row> -->

        <div class="LineBlock"></div>

        <div class="TelescopicBlock">
            <h1 class="marginTB_40 colorBlack">智能硬件产品</h1>
            <p class="marginB_40">物联网 (IoT)始于“物”（即设备）。构建您的设备（从添加传感器到创建智能设备），才能启动您的 IoT 解决方案。我们提供如下产品</p>
            <Row type="flex"  justify="center"  class="code-row-bg marginTB_40":gutter="16">
                <Col class="marginB_20" :xs="12" :sm="8" :md="4" :lg="4" v-for="(Hardware,Idx) in HardwareList">
                    <div class="SingleImg">
                        <img style="width: 120px; height: 120px;" :src="Hardware.img">
                        <h5>{{Hardware.name}}</h5>
                    </div>
                </Col>
                <div style="clear: both;"></div>
            </Row>
        </div>

        <div class="LineBlock"></div>

        <div class="TelescopicBlock">
            <h1 class="marginTB_40 colorBlack">ODM</h1>
            <p class="marginB_40">为你的传统电器，插上智能的“翅膀”</p>
            <div class="TextCenter SingleImg">
                <img src="static/img/Icon/SmartHox_Products_icon13.png">
            </div>
        </div>

       
        

    </div>
</template>
<script>

  export default{
    data: function () {
      return {
        BlockInfo:[
            {'title':'智能网关','slogan':'Hox ONE','content':'Hox ONE','img':'static/img/SmartHox/picture/vmw-spotlight-promo-app-defense.jpg','icon':'fa fa-inbox'},
            {'title':'嵌入式联网模块','slogan':'','content':'','img':'static/img/SmartHox/picture/vmw-promo-pks3.jpg','icon':'fa fa-exchange'},
            {'title':'无线接入模块','slogan':'','content':'','img':'static/img/SmartHox/picture/vmware-hero-bc-who-we-are.jpg','icon':'fa fa-rss '},
        ],
        HardwareList:[
            {'name':'智能网关','img':'static/img/Icon/SmartHox_Products_icon7.png'},
            {'name':'智能电箱','img':'static/img/Icon/SmartHox_Products_icon8.png'},
            {'name':'协议转换器','img':'static/img/Icon/SmartHox_Products_icon9.png'},
            {'name':'无源开关','img':'static/img/Icon/SmartHox_Products_icon10.png'},
            {'name':'随意智能音箱','img':'static/img/Icon/SmartHox_Products_icon11.png'},
            {'name':'传感设备','img':'static/img/Icon/SmartHox_Products_icon12.png'}
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

    },
    methods: {
     

    }
  }
</script>
<style lang="scss">
.NetHardware{
    margin: 40px 0px;
    .SingleImg img{
        max-width: 95%;
    }
    .HasCircleBorder{
        width: 140px;
        height: 140px;
        line-height: 130px;
        margin: 0 auto;
        border-radius: 50%;
        border: 10px solid #ddd;
    }
    .HasCircleBorder:hover{
        width: 140px;
        height: 140px;
        line-height: 130px;
        margin: 0 auto;
        border-radius: 50%;
        border: 10px solid #F58733;
    }
    .Gradient{
        padding: 40px 20px;
        background-color: #21D4FD;
        background-image: -ms-linear-gradient(top right, #21D4FD 0%, #B721FF 100%);
        background-image: -moz-linear-gradient(top right, #21D4FD 0%, #B721FF 100%);
        background-image: -webkit-linear-gradient(top right, #21D4FD 0%, #B721FF 100%);
        background-image: -o-linear-gradient(top right, #21D4FD 0%, #B721FF 100%);
        background-image: linear-gradient(to bottom left, #21D4FD 0%, #B721FF 100%);
    
       
       }
}
</style>
