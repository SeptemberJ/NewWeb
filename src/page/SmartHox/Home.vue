<template>
    <div class="SmartHox_home">
    <Carousel/>
        <!-- <div class="BlockOuter">
            <h2>全系列物联网接入网关</h2>
            <p>Smart Hox 打通物联网多协议连接，让万物互联真正融入工作和生活的每个场景，
    全面支持Wi-Fi、GPRS/3G/4G、ZigBee、RS485、Modbus、蓝牙、RF433、 2.4G 、Z-Wave、CAN等终端接入技术，广泛应用于各类物联网设备。</p>
            <Row :gutter="16" class="marginTB_40">
                <Col span="6">
                    <div>
                        <img src="static/img/Icon/SmartHox_home_icon1.png"/>
                        <h5>统一接口</h5>
                    </div>
                </Col>
                <Col span="6">
                    <div>
                        <img src="static/img/Icon/SmartHox_home_icon2.png"/>
                        <h5>统一接口</h5>
                    </div>
                </Col>
                <Col span="6">
                    <div>
                        <img src="static/img/Icon/SmartHox_home_icon3.png"/>
                        <h5>统一接口</h5>
                    </div>
                </Col>
                <Col span="6">
                    <div>
                        <img style="width:100% " src="static/img/Icon/SmartHox_home_icon4.png"/>
                    </div>
                </Col>
            </Row>
        </div> -->
        <!-- three block -->
        <Row style="background-color: rgb(89,89,89);padding-top: 10px;padding-bottom: 10px;color: #fff;">
            <Col span="8" class="TextCenter">
              <img class="SmallIcon" src="static/img/Icon/SmartHox_home_icon5.png"/>
              <span>万物互联一站式解决方案提供商</span>
            </Col>
            <Col span="8" class="TextCenter">
              <img class="SmallIcon" src="static/img/Icon/SmartHox_home_icon5.png"/>
              <span>IoT 数据云平台服务</span>
            </Col>
            <Col span="8" class="TextCenter">
              <img class="SmallIcon" src="static/img/Icon/SmartHox_home_icon5.png"/>
              <span>物联网接入网关-Hox One</span>
            </Col>
        </Row>
        <!--  -->
        <div class="BlockOuter">
            <h2>物联网一站式纵向服务</h2>
            <p>Smart Hox 作为物联网行业极具创新能力的IoT云平台，为企业提供进入物联网必需的设备接入、设备控制、数据分析、供应链资源一站式服务，助力企业智造转型，并为其在物联网时代打造新商业模式。</p>
            <Row  class="marginTB_40 TextCenter">
                <Col class="marginB_10" :xs="24" :sm="{ span: 6, offset: 0 }" :md="{ span: 6, offset: 0 }"  :lg="{ span: 5, offset: 1 }">
                  <img class="marginB_10" src="static/img/Icon/SmartHox_home_icon6.png"/>
                  <h5 class="Bold TextLeft">构建设备</h5>
                  <p class="TextLeft">物联网 (IoT)始于“物”（即设备）。构建您的设备（从添加传感器到创建智能设备），才能启动您的 IoT 解决方案。</p>
                </Col>
                <Col class="marginB_10" :xs="24" :sm="{ span: 5, offset: 1 }" :md="{ span: 5, offset: 1 }" :lg="{ span: 5, offset: 1 }">
                  <img class="marginB_10" src="static/img/Icon/SmartHox_home_icon7.png"/>
                  <h5 class="Bold TextLeft">控制您的设备</h5>
                  <p class="TextLeft">部署控制、监控和管理您的设备的 IoT 解决方案，从而允许您捕获实时数据。</p>
                </Col>
                <Col class="marginB_10" :xs="24" :sm="{ span: 5, offset: 1 }" :md="{ span: 5, offset: 1 }"  :lg="{ span: 5, offset: 1 }">
                  <img class="marginB_10" src="static/img/Icon/SmartHox_home_icon8.png"/>
                  <h5  class="Bold TextLeft">分析数据</h5>
                  <p class="TextLeft">利用您收集的数据并应用高级分析以揭示新业务见解。</p>
                </Col>
                <Col class="marginB_10" :xs="24" :sm="{ span: 5, offset: 1 }" :md="{ span: 5, offset: 1 }" :lg="{ span: 5, offset: 1 }">
                  <img class="marginB_10" src="static/img/Icon/SmartHox_home_icon9.png"/>
                  <h5  class="Bold TextLeft">针对见解采取措施</h5>
                  <p class="TextLeft">通过功能强大的应用程序将见解转变为行动，从而创造新的收入和业务机会。</p>
                </Col>
            </Row>
        </div>
        <!-- tab1 -->
        <div class="BlockOuter">
          <h2 class="TextCenter">Smart Hox 可以为企业提供智能化服务</h2>
          <div class="marginTB_40">
            <Row class="TextCenter">
                <Col v-for="(Tab,Idx) in TabMenu_Product" span="8" :class="{'Active':Cur_Product == Tab.name}">
                  <span class="CursorPointer Padding_10"  @click="ChangeTab_Product(Tab.name)">
                    <Icon :size="24" color="#000" :type="Tab.icon"></Icon>
                    <p>{{Tab.name}}</p>
                  </span>
                </Col>
            </Row>
            <div v-if="Cur_Product === '智能家电'">
                
                <Card :bordered="false" dis-hover>
                     <Row>
                        <Col :xs="6" :sm="4" :md="3" :lg="2" class="TextCenter">
                            <img style="width: 50px;" src="static/img/Icon/SmartHox_home_icon10.png">
                        </Col>
                        <Col :xs="18" :sm="20" :md="21" :lg="22">
                            <h5>智能家居设备</h5>
                            <p>你不必再关心你的电器, 更多的是它们开始关心你;</p>
                            <p>手机控制：下班了, 拿出手机用App打开空调制热, 打开家门便是温暖;</p>
                            <p>语音控制：对Amazon echo、天猫机灵等智能设备, 说一句“制暖”, 空调便开始运行;</p>
                        </Col>
                     </Row>
                     <Row class="marginT_20">
                        <Col :xs="6" :sm="4" :md="3" :lg="2" class="TextCenter">
                            <img style="width: 50px;" src="static/img/Icon/SmartHox_home_icon11.png">
                        </Col>
                        <Col :xs="18" :sm="20" :md="21" :lg="22">
                            <p>mart Hox智能云会记录并学习消费者的动作和习惯：温度过低空调会开启制热模式；当你离开家, 空调、取暖器等会停止工作。</p>
                        </Col>
                     </Row>
                     <Row class="TextCenter">
                        <Col span="24">
                            <img src="static/img/Icon/SmartHox_home_icon21.jpg">
                        </Col>
                     </Row>
                </Card>
            </div>
          </div>
        </div>
        <!-- tab2 -->
        <div class="BlockOuter">
          <h2 class="TextCenter">与Smart Hox 合作对接流程</h2>
          <div class="marginTB_40">
            <Row style="height: 60px;" type="flex" justify="space-between" class="TextCenter">
                <Col v-for="(Tab,Idx) in TabMenu_Docking" span="4" :class="{'Active':Cur_Docking == Tab.name}">
                  <span class="CursorPointer Padding_10"  @click="ChangeTab_Docking(Tab.name)">
                    <Icon :size="24" color="#000" :type="Tab.icon"></Icon>
                    <p>{{Tab.name}}</p>
                  </span>
                </Col>
            </Row>
            <div style="min-height: 200px;" class="marginTB_40" v-if="Cur_Docking === '需求洽谈'">
              <Row type="flex" justify="center" class="code-row-bg">
                  <Col :xs="12" :sm="8" :md="8" :lg="8">
                    <div class="TransformBox Bg_blue" style="margin-left: 20%;">
                      <div  class="TransformBox_reverse">
                        <h3>您只需做</h3>
                        <ul>
                          <li>明确产品需求</li>
                          <li>选择需要的服务方案</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col :xs="12" :sm="8" :md="8" :lg="8">
                    <div class="TransformBox Bg_orange">
                      <div  class="TransformBox_reverse">
                        <h3>Smart Hox为您提供</h3>
                        <ul>
                          <li>项目经理一对一沟通需求</li>
                          <li>根据行业分析与项目经验, 提供咨询建议介绍服务, 提出可行的方案确认产品定义</li>
                        </ul>
                      </div>
                    </div>
                  </Col>
              </Row>
              
              
            </div>
          </div>
        </div>
        <!--  -->
    </div>
</template>
<script>
import Carousel from '../../components/Carousel/Carousel2'
  export default{
    data: function () {
      return {
        Cur_Product:'智能家电',
        Cur_Docking:'需求洽谈',
        TabMenu_Product:[{'name':'智能家电','icon':'ios-monitor'},{'name':'智慧照明','icon':'ios-lightbulb'},{'name':'智慧工控','icon':'ios-game-controller-b'}],
        TabMenu_Docking:[{'name':'需求洽谈','icon':'chatboxes'},{'name':'技术对接','icon':'android-options'},{'name':'产品研发','icon':'cube'},{'name':'联合调试','icon':'ios-cog'},{'name':'生产上线','icon':'ios-world'}],
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
      Carousel
      

    },
    methods: {
        ChangeTab_Product(Menu){
            this.Cur_Product = Menu
        },
        ChangeTab_Docking(Menu){
            this.Cur_Docking = Menu
        },
     

    }
  }
</script>
<style lang="scss" scoped>
.SmartHox_home{
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
        border-bottom:2px solid red !important;
    }
    img{
        max-width: 100% !important;
    }
}
</style>
