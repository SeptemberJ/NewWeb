<template>
    <div class="Industry">
        <Card :bordered="false" dis-hover>
             <Row>
                <Col :xs="6" :sm="4" :md="3" :lg="2" class="TextCenter">
                    <img style="width: 50px;" src="static/img/Icon/Products/SmartHox_Products_icon12.png">
                </Col>
                <Col :xs="18" :sm="20" :md="21" :lg="22">
                    <h5>工业领域的应用</h5>
                    <p>工业物联，使设备主动开口说话，物联数据监测分析</p>
                    <p>设备故障预警、消息推送事后维修变事前处理</p>
                    <p>设备定位、地图分布，基于设备生命周期服务客户，对下游客户二次销售</p>
                    <P>生成设备销售采购协同管理，优化流程，数据透视</P>
                </Col>
             </Row>
             
             <Row class="TextCenter">
                <Col span="24">
                    <div class="SingleImg marginTB_40">
                        <img src="static/img/Icon/Products/SmartHox_Products_icon13.png">
                    </div>
                </Col>
             </Row>
        </Card>
    </div>
</template>
<script>

  export default{
    data: function () {
      return {
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
