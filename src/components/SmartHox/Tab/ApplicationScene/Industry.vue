<template>
    <div class="Industry">
        <div class="TelescopicBlock">
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
            <h2 class="marginTB_40 colorBlack">物联网酒店系统功能介绍</h2>
            <Row type="flex" justify="space-between" class="code-row-bg marginTB_40" :gutter="16">
                <Col class="marginB_20" :xs="24" :sm="12" :md="12" :lg="12" v-for="(Introduction,Idx) in IntroductionList">
                    <div style="min-height: 200px;" class="Padding_10">
                        <h3><i class="fa fa-tag marginR_10"></i>{{Introduction.title}}</h3>
                        <p class="marginTB_20">{{Introduction.content}}</p>
                    </div>
                </Col>
                <div style="clear: both;"></div>
            </Row>
        </div>

        <div class="LineBlock"></div>

        <div class="TextCenter SingleImg OneBlock">
            <img class="marginTB_40" src="static/img/Icon/SmartHox_ApplicationScene_icon15.png">
        </div>
    </div>
</template>
<script>

  export default{
    data: function () {
      return {
        BlockInfo:[
          {'title':'物联分析系统','content':'工业物联，使设备主动开口说话，物联数据监测分析','img':'static/img/SmartHox/picture/vmw-vrealize-ops66-upgrade.jpg','icon':'fa fa-area-chart'},
          {'title':'工业安全系统','content':'设备故障预警、消息推送事后维修变事前处理','img':'static/img/SmartHox/picture/vmw-nfv-telco.jpg','icon':'fa fa-bomb'},
          {'title':'销售拓展系统','content':'设备定位、地图分布，基于设备生命周期服务客户，对下游客户二次销售','img':'static/img/SmartHox/picture/vmware-vsphere-6-5-spotlight.jpg','icon':'fa fa-gift'},
          {'title':'协同管理系统','content':'生成设备销售采购协同管理，优化流程，数据透视','img':'static/img/SmartHox/picture/vmw-latam-dummies.jpg','icon':'fa fa-puzzle-piece'},
        ],
        IntroductionList:[
            {'title':'网管+云+APP,物联分析助力企业高效运转及数字化改造','content':'软硬件智能联动，打通设备与企业管理者之间的通讯壁垒，构建物联分析基础，用数据驱动企业高效运转'},
            {'title':'故障预警联动机制,全方位保障工业安全','content':'严苛的工业安全智能系统，全方位监测工厂设备、电源、环境等安全情况'},
            {'title':'设备全程定位追踪，准确快速响应市场需求','content':'从出厂到售后全程定位追踪，针对设备使用年限、使用情况等及时进行服务、售后及二次销售跟进，提升工厂市场反应速度'},
            {'title':'数据共享优化同管理，提升企业运行效率','content':'物联数据透视生产、采购、销售、管理等多部门运转规律，智能优化管理协同流程，实现企业各部门间的高效合'},
        ],
        BlockInfo2:[
            {'title':'网管+云+APP,物联分析助力企业高效运转及数字化改造','content':'软硬件智能联动，打通设备与企业管理者之间的通讯壁垒，构建物联分析基础，用数据驱动企业高效运转','img':'static/img/Icon/ApplicationScene/ApplicationScene_Icon_wlfx.png'},
            {'title':'','content':'','img':'static/img/Icon/ApplicationScene/ApplicationScene_Icon_gyaq.png'},
            {'title':'','content':'','img':'static/img/Icon/ApplicationScene/ApplicationScene_Icon_xstz.png'},
            {'title':'','content':'','img':'static/img/Icon/SmartHox_home_icon8.png',}
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
$Color: #F58733;
$Color2: #fff200;
.Industry{
    margin: 40px 0px;
    .SingleImg img{
        max-width: 85%;
    }
    .HavBefore:before{
        content:'网关+云+APP，';
        color: $Color;
        font-size: 28px;
    }
    .HavMiddle:before{
        content:'全方位保障';
        color: $Color;
        font-size: 28px;
    }
    .HavMiddle2:before{
        content:'精准快速';
        color: $Color;
        font-size: 28px;
    }
    .HavMiddle3:before{
        content:'优化';
        color: $Color;
        font-size: 28px;
    }
    .HavMiddle4:before{
        content:'效率';
        color: $Color;
        font-size: 28px;
    }
}
</style>
