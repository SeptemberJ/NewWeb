<template>
    <div class="SmartHox_home">
        <!-- Carousel -->
        <Carousel/>
        <!--  -->
        <div class="BlockOuter">
            <h5>物联网一站式纵向服务</h5>
            <p>Smart Hox 作为物联网行业极具创新能力的IoT云平台，为企业提供进入物联网必需的设备接入、设备控制、数据分析、供应链资源一站式服务，助力企业智造转型，并为其在物联网时代打造新商业模式。</p>
            <Row  type="flex"  justify="center"  class="code-row-bg marginTB_40 TextCenter" :gutter="16">

                <Col class="marginB_10" :xs="24" :sm="12" :md="6"  :lg="6" v-for="(Block,Idx) in BlockInfo">
                  <img class="marginB_20" :src="Block.img"/>
                  <h5 class="Bold TextLeft marginTB_20">{{Block.title}}</h5>
                  <p class="TextLeft">{{Block.content}}</p>
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
            <div>
                <Household v-if="Cur_Product === '智能家电'"/>
                <Light v-if="Cur_Product === '智慧照明'"/>
                <Industry v-if="Cur_Product === '智慧工控'"/>
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
        </div>
        <!--  -->
    </div>
</template>
<script>
import Carousel from '../../components/Carousel/Carousel'
import Household from '../../components/SmartHox/Tab/Home/Household'
import Light from '../../components/SmartHox/Tab/Home/Light'
import Industry from '../../components/SmartHox/Tab/Home/Industry'
  export default{
    data: function () {
      return {
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
          {'title':'构建设备','content':'物联网 (IoT)始于“物”（即设备）。构建您的设备（从添加传感器到创建智能设备），才能启动您的 IoT 解决方案。','img':'static/img/Icon/Home/SmartHox_Home_icon1.png'},
          {'title':'控制您的设备','content':'部署控制、监控和管理您的设备的 IoT 解决方案，从而允许您捕获实时数据。','img':'static/img/Icon/Home/SmartHox_Home_icon14.png'},
          {'title':'分析数据','content':'利用您收集的数据并应用高级分析以揭示新业务见解。','img':'static/img/Icon/Home/SmartHox_Home_icon2.png'},
          {'title':'针对见解采取措施','content':'通过功能强大的应用程序将见解转变为行动，从而创造新的收入和业务机会。','img':'static/img/Icon/Home/SmartHox_Home_icon13.png'},
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
      Carousel,
      Household,
      Light,
      Industry
      

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
