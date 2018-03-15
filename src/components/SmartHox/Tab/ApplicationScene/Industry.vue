<template>
    <div class="Industry">
        <Row type="flex"  justify="center"  class="code-row-bg marginTB_40":gutter="16">
            <Col class="marginB_20" :xs="24" :sm="12" :md="6" :lg="6" v-for="(Block,Idx) in BlockInfo">
                <div style="height: 100%;" class="Bg_blue Padding_10 colorWhite TextCenter">
                    <h3>{{Block.title}}</h3>
                    <p class="marginTB_20">{{Block.content}}</p>
                    <img :src="Block.img">
                </div>
            </Col>
            <div style="clear: both;"></div>
        </Row>
        <Row>
            <Col span="24" class="marginTB_20">
                <h2 class="marginTB_10">网关+云+APP，物联分析助力企业高效运转及数字化改造</h2>
                <p>软硬件智能联动，打通设备与企业管理者之间的通讯壁垒，构建物联分析基础，用数据驱动企业高效运转</p>
            </Col>
            <Col span="20" offset="4" class="marginTB_20">
                <h2 class="marginTB_10">故障预警联动机制，全方位保障工业安全</h2>
                <p>严苛的工业安全智能系统，全方位监测工厂设备、电源、环境等安全情况</p>
            </Col>
            <Col span="16"  offset="8" class="marginTB_20">
                <h2 class="marginTB_10">设备全程定位追踪，精准快速响应市场需求</h2>
                <p>从出厂到售后全程定位追踪，针对设备使用年限、使用情况等及时进行服务、售后及二次销售跟进，提升工厂市场反应速度</p>
            </Col>
            <Col span="12"  offset="12" class="marginTB_20">
                <h2 class="marginTB_10">数据共享优化协同管理，提升企业运行效率</h2>
                <p>物联数据透视生产、采购、销售、管理等多部门运转规律，智能优化管理协同流程，实现企业各部门间的高效合</p>
            </Col>
        </Row>
        <div class="TextCenter SingleImg marginTB_40">
            <img src="static/img/Icon/SmartHox_ApplicationScene_icon15.png">
        </div>
    </div>
</template>
<script>

  export default{
    data: function () {
      return {
        BlockInfo:[
            {'title':'物联分析系统','content':'工业物联，使设备主动开口说话，物联数据监测分析','img':'static/img/Icon/SmartHox_home_icon5.png',},
            {'title':'工业安全系统','content':'设备故障预警、消息推送事后维修变事前处理','img':'static/img/Icon/SmartHox_home_icon6.png',},
            {'title':'销售拓展系统','content':'设备定位、地图分布，基于设备生命周期服务客户，对下游客户二次销售','img':'static/img/Icon/SmartHox_home_icon7.png',},
            {'title':'协同管理系统','content':'生成设备销售采购协同管理，优化流程，数据透视','img':'static/img/Icon/SmartHox_home_icon8.png',}
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
.Industry{
    margin: 40px 20px;
    .SingleImg img{
        max-width: 95%;
    }
}
</style>
