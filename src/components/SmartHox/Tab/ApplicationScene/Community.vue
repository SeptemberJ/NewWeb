<template>
    <div class="Community">
    <div class="TelescopicBlock">
            <h1 class="marginTB_40 colorBlack">物联网一站式纵向服务</h1>
            <p class="marginB_40">Smart Hox 作为物联网行业极具创新能力的IoT云平台，为企业提供进入物联网必需的设备接入、设备控制、数据分析、供应链资源一站式服务，助力企业智造转型，并为其在物联网时代打造新商业模式。</p>
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

        <div class="LineBlock"></div>

        <div class="TelescopicBlock SectionBlock">
            <h2 class="marginTB_40 colorBlack">软硬件整体解决方案，多维度保障社区安全</h2>
            <p class="marginB_40">家居+社区+警务安防联动系统，多维度确保社区安全；可信云认证平台与
    硬件安全接入系统，软硬件全方位保障社区系统安全</p>
            <div class="TextCenter SingleImg marginTB_40">
                <img src="static/img/Icon/SmartHox_ApplicationScene_icon5.png">
            </div>
        </div>

        <div class="LineBlock"></div>

        <div class="TelescopicBlock SectionBlock">
            <h2 class="marginTB_40 colorBlack">强兼容性与强扩展性，快速实现智能化升级改造</h2>
            <p class="marginB_40">可兼容不同品牌硬件产品，实现跨品牌、跨品类设备便捷管理
    跨品类设备联动，智能家居改装灵活便利</p>
        </div>

        <div class="LineBlock"></div>

        <div class="TelescopicBlock SectionBlock">
            <h2 class="marginTB_40 colorBlack">一体化管理系统，效益与效率双赢</h2>
            <p class="marginB_40">对家居、停车、安防、缴费等智慧社区系统进行统一管理，降低
    运营成本，提升运维效率</p>
            <div class="TextCenter SingleImg marginTB_40">
                <img src="static/img/Icon/SmartHox_ApplicationScene_icon6.png">
            </div>
        </div>
    </div>
</template>
<script>

  export default{
    data: function () {
      return {
        BlockInfo:[
          {'title':'智能家居','content':'家庭安防、智能控制、语音控制物业服务与生活服务网络化','img':'static/img/SmartHox/picture/vmware-hci-kits.jpg','icon':'fa fa-bank'},
          {'title':'社区管理','content':'业主、物业服务、社区系统、生活商圈管理一体化、智能化','img':'static/img/SmartHox/picture/vmw-spotlight-digital-workspace.jpg','icon':'fa fa-building'},
          {'title':'生活服务','content':'商城管理、商品管理、订单管理、O2O生活服务全线打通','img':'static/img/SmartHox/picture/vmw-spotlight-home-cloud.jpg','icon':'fa fa-volume-up'},
          {'title':'社交','content':'小区业主社交平台，支持通讯录、群组、多媒体消息聊天等社交功能','img':'static/img/SmartHox/picture/vmware-spotlight-events.png','icon':'fa fa-users'},
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
<style lang="scss" scoped>
.Community{
    margin: 40px 0px;
    .SingleImg img{
        max-width: 95%;
    }
}
</style>
