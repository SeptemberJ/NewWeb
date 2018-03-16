<template>
    <div class="Community">
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

        <div class="TextCenter">
            <h2>软硬件整体解决方案，多维度保障社区安全</h2>
            <p  class="marginTB_20">家居+社区+警务安防联动系统，多维度确保社区安全；可信云认证平台与
    硬件安全接入系统，软硬件全方位保障社区系统安全</p>
            <div class="SingleImg marginTB_40">
                <img src="static/img/Icon/SmartHox_ApplicationScene_icon5.png">
            </div>
            <h2>强兼容性与强扩展性，快速实现智能化升级改造</h2>
            <p class="marginTB_20">可兼容不同品牌硬件产品，实现跨品牌、跨品类设备便捷管理
    跨品类设备联动，智能家居改装灵活便利</p>
            <h2>一体化管理系统，效益与效率双赢</h2>
            <p class="marginTB_20">对家居、停车、安防、缴费等智慧社区系统进行统一管理，降低
    运营成本，提升运维效率</p>
            <div class="SingleImg marginTB_40">
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
            {'title':'智能家居','content':'家庭安防、智能控制、语音控制物业服务与生活服务网络化','img':'static/img/Icon/ApplicationScene/ApplicationScene_Icon_znjj.png'},
            {'title':'社区管理','content':'业主、物业服务、社区系统、生活商圈管理一体化、智能化','img':'static/img/Icon/ApplicationScene/ApplicationScene_Icon_sqgl.png'},
            {'title':'生活服务','content':'商城管理、商品管理、订单管理、O2O生活服务全线打通','img':'static/img/Icon/ApplicationScene/ApplicationScene_Icon_shfw.png'},
            {'title':'社交','content':'小区业主社交平台，支持通讯录、群组、多媒体消息聊天等社交功能','img':'static/img/Icon/ApplicationScene/ApplicationScene_Icon_sj.png'},
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
    margin: 40px 20px;
    .SingleImg img{
        max-width: 95%;
    }
}
</style>
