<template>
    <div class="DeviceAccess">
        <div class="TelescopicBlock">
            <h1 class="marginTB_40 colorBlack">物联网产品接入服务</h1>
            <p class="marginB_40">聚焦多维度产品接入，快速打造物联网产品。 全品类开发经验，灵活的产品模式</p>
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
            <h2 class="marginTB_40 colorBlack">零门槛操作, 低研发投入, 极具拓展性</h2>
            <p class="marginB_40">在线自定义完成产品面板及功能配置, 新功能随时在线升级</p>
            <p class="marginB_40">第三方智能终端（Amazon Echo, Google Home、天猫机灵等）, 在线轻松点选即可完成。
新增产品设备、产品系统升级、新增功能控制面板等, 在线选择所需软件服务即可完成。用户无需升级 App就可以体验到最新功</p>
            <div class="TextCenter SingleImg marginTB_40">
                <img src="static/img/Icon/Products/SmartHox_Products_icon29.png">
            </div>
        </div>

        <div class="LineBlock"></div>

        <div class="TelescopicBlock SectionBlock">
            <h2 class="marginTB_40 colorBlack">电工类、照明类产品全标准化开发，投入成本低</h2>
            <p class="marginB_40">Hox智能在电工与照明领域已积累了上千款产品的智能化解决经验，如果您有电工类、照明类产品的智能化需求，可选择SOC免开发完整方案，成本直降至少70%</p>
        </div>

        <div class="OneBlock TextCenter colorWhite Gradient SectionBlock">
            <h3 style="color: #fff;">Soc免开发方案系列智能化产品</h3>
            <Row type="flex"  justify="center"  class="code-row-bg marginTB_40":gutter="16">
                <Col class="marginB_20" :xs="12" :sm="8" :md="4" :lg="4" v-for="(Product,Idx) in ProductList">
                    <div class="SingleImg">
                        <img :src="Product">
                    </div>
                </Col>
                <div style="clear: both;"></div>
            </Row>
        </div>

    </div>
</template>
<script>

  export default{
    data: function () {
      return {
        BlockInfo:[
            {'title':'标准化接入','slogan':'高性价比的智能硬件实现方案','content':'基于该方案, 厂商只需要关注硬件制造本身, 以及控制板和Hox模块对接的部分。 快速实现DEMO, 30天即可投入量产, 是具有周期短、性价比高等优点的硬件智能化实现方案。','img':'static/img/SmartHox/picture/vmw-tco-calculator-promo.jpg','icon':'fa fa-sitemap'},
            {'title':'自定义产品接入','slogan':'快速生成自有手机App','content':'基于该方案, 厂商可以拥有自有/多个品牌App。Hox智能提供标准App功能模版, 厂商基于此定制个性化品牌素材。厂商在技术上同样只需关注硬件本身, 以及控制板和Hox模块对接的部分。','img':'static/img/SmartHox/picture/wzh-img2.jpg','icon':'fa fa-retweet'},
            {'title':'定制化开发App','slogan':'提供SDK, 根据需求定制开发','content':'当标准App不能满足需求时, 可以基于Hox智能提供的SDK进行定制开发。厂商可以自主开发, 也可委托Hox或者第三方团队开发。','img':'static/img/SmartHox/picture/ros-img2.jpg','icon':'fa fa-tablet'}
        ],
        ProductList:['static/img/Icon/Products/SmartHox_Products_icon4.png','static/img/Icon/Products/SmartHox_Products_icon5.png','static/img/Icon/Products/SmartHox_Products_icon6.png','static/img/Icon/Products/SmartHox_Products_icon7.png','static/img/Icon/Products/SmartHox_Products_icon8.png','static/img/Icon/Products/SmartHox_Products_icon9.png']
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
.DeviceAccess{
    margin: 40px 0px;
    .SingleImg img{
        max-width: 95%;
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
