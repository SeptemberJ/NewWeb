<template>
    <div class="SmartHox_home">
        <!-- Carousel -->
        <Carousels/>
        <!--FourBlock  -->
        <div class="TelescopicBlock tab-home">
            <h2 class="marginTB_40 TextCenter">物联网一站式纵向服务</h2>
            <p class="marginB_40 TextCenter PaddingLR_20">Smart Hox 作为物联网行业极具创新能力的IoT云平台，为企业提供进入物联网必需的设备接入、设备控制、数据分析、供应链资源一站式服务，助力企业智造转型，并为其在物联网时代打造新商业模式。</p>
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
                              <div class="col-xs-1 col-md-1 col-sm-1 cntClk" style="height: 86px;">   <i class="fa fa-bars detail-toggle"></i>
                              </div>
                              <div class="social-block">
                              </div>
                          </div>
                      </div>
                  </Col>
              </Row>
        </div>

        <div class="LineBlock"></div>
        <!-- tab1 -->
        <div class="BlockOuter">
          <h2 class="TextCenter">Smart Hox 可以为企业提供智能化服务</h2>
          <Carousel v-model="Cur_Carousel" arrow="always" loop :autoplay="false">
              <CarouselItem>
                  <div class="demo-carousel">
                    <Household/>
                  </div>
              </CarouselItem>
              <CarouselItem>
                  <div class="demo-carousel">
                    <Light/>
                  </div>
              </CarouselItem>
              <CarouselItem>
                  <div class="demo-carousel">
                    <Industry/>
                  </div>
              </CarouselItem>
          </Carousel>
          </div>

        <div class="LineBlock"></div>
        <!-- tab2 -->
        <TabCarousel/>
        <!-- <div class="BlockOuter">
          <h1 class="TextCenter">与Smart Hox 合作对接流程</h1>
          <div class="marginTB_40">
            <Row style="height: 60px;" type="flex" justify="space-between" class="TextCenter">
                <Col v-for="(Tab,Idx) in TabMenu_Docking" span="4" :class="{'Active':Cur_Docking == Tab.name}">
                  <span class="CursorPointer Padding_10"  @click="ChangeTab_Docking(Tab.name)">
                    <Icon :size="24" :class="{'ActiveIcon':Cur_Docking == Tab.name}" :type="Tab.icon"></Icon>
                    <p :class="{'TabP':true,'ActiveP':Cur_Docking == Tab.name}">{{Tab.name}}</p>
                  </span>
                </Col>
            </Row>
            <div style="min-height: 200px;" class="marginTB_40" v-for="(Docking,Idx) in TabMenu_Docking" v-if="Cur_Docking === Docking.name" >
              <Row type="flex" justify="center" class="code-row-bg">
                  <Col :xs="12" :sm="8" :md="8" :lg="8">
                    <div class="TransformBox Bg_blue" style="margin-left: 20%;">
                      <div  class="TransformBox_reverse">
                        <h3>您只需做</h3>
                        <ul>
                          <li v-for="(customerDo,Idx) in Docking.customerDo">{{customerDo}}</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col :xs="12" :sm="8" :md="8" :lg="8">
                    <div class="TransformBox Bg_orange">
                      <div  class="TransformBox_reverse">
                        <h3>Smart Hox为您提供</h3>
                        <ul>
                          <li v-for="(smartHoxDo,Idx) in Docking.smartHoxDo">{{smartHoxDo}}</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
              </Row>
              
              
            </div>
          </div>
        </div> -->
        
    </div>
</template>
<script>
import Carousels from '../../components/Carousel/Carousel'
import Household from '../../components/SmartHox/Tab/Home/Household'
import Light from '../../components/SmartHox/Tab/Home/Light'
import Industry from '../../components/SmartHox/Tab/Home/Industry'
import TabCarousel from '../../components/TabCarousel/TabCarousel.vue'
  export default{
    data: function () {
      return {
        Cur_Carousel:0,
        Cur_Product:'智能家电',
        Cur_Docking:'需求洽谈',
        TabMenu_Product:[{'name':'智能家电','icon':'ios-monitor'},{'name':'智慧照明','icon':'ios-lightbulb'},{'name':'智慧工控','icon':'ios-game-controller-b'}],
        TabMenu_Docking:[
          {'name':'需求洽谈','icon':'chatboxes','customerDo':['明确产品需求','选择需要的服务方案'],'smartHoxDo':['项目经理一对一沟通需求','根据行业分析与项目经验, 提供咨询建议介绍服务, 提出可行的方案确认产品定义']},
          {'name':'技术对接','icon':'android-options','customerDo':['提供对接协议'],'smartHoxDo':['进行技术对接']},
          {'name':'产品研发','icon':'cube','customerDo':['提出需求'],'smartHoxDo':['需求分析','产品设计','产品开发']},
          {'name':'联合调试','icon':'ios-cog','customerDo':['试用'],'smartHoxDo':['初步测试','修改BUG']},
          {'name':'生产上线','icon':'ios-world','customerDo':[''],'smartHoxDo':['全面部署']}
        ],
        BlockInfo:[
          {'title':'构建设备','content':'物联网 (IoT)始于“物”（即设备）。构建您的设备（从添加传感器到创建智能设备），才能启动您的 IoT 解决方案。','img':'static/img/SmartHox/picture/upper-half-promo-4-workspaceone.jpg','icon':'fa fa-gears'},
          {'title':'控制您的设备','content':'部署控制、监控和管理您的设备的 IoT 解决方案，从而允许您捕获实时数据。','img':'static/img/SmartHox/picture/1511945768395.jpg','icon':'fa fa-laptop'},
          {'title':'分析数据','content':'利用您收集的数据并应用高级分析以揭示新业务见解。','img':'static/img/SmartHox/picture/oms-img1.jpg','icon':'fa fa-signal'},
          {'title':'针对见解采取措施','content':'通过功能强大的应用程序将见解转变为行动，从而创造新的收入和业务机会。','img':'static/img/SmartHox/picture/asset-img1.jpg','icon':'fa fa-terminal'},
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
      Carousels,
      Household,
      Light,
      Industry,
      TabCarousel
      

    },
    methods: {
        ChangeTab_Product(Menu){
            this.Cur_Product = Menu
        },
        ChangeTab_Docking(Menu){
            this.Cur_Docking = Menu
        },
        ChangeCarousel(oldValue,value){
          console.log(oldValue + '---' +value)
          this.Cur_Carousel = value
        }
     

    }
  }
</script>
<style lang="scss" scoped>
.SmartHox_home{
    .TelescopicBlock{
      padding: 10px;
    }
    .BlockOuter{
        padding: 20px 20px;
        .mu-tabs{
            background-color: #fff !important;
        }
        .mu-tab-text{
            color: #000;
        }
        .mu-icon{
            color: #000;
        }
    }
    .TransformBox{
        width: 80%;
        height: 220px;
        color: #fff;
        transform:skewX(-10deg);
        -ms-transform:skewX(-10deg);   /* IE 9 */
        -moz-transform:skewX(-10deg);  /* Firefox */
        -webkit-transform:skewX(-10deg); /* Safari 和 Chrome */
        -o-transform:skewX(-10deg);
    }
    .TransformBox_reverse{
        width: 100%;
        height: 200px;
        padding: 20px 10px;
        color: #fff;
    }
    .SmallIcon{
        width: 15px;
        height: 15px;
    }
    .Active{
        border-bottom:2px solid #F58733 !important;
    }
    .ActiveIcon{
      color: #F58733;
    }
    .ActiveP{
      color: #F58733;
    }
    img{
        max-width: 100% !important;
    }
}
</style>
