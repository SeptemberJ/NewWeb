<template>
    <div class="Light">
        <Card :bordered="false" dis-hover>
             <Row>
                <Col span="24" class="TextCenter">
                    <h3 class="marginB_20" style="color: #000;">超强节能</h3>
                    <p>绿色节能控制，节电可达到50%以上；检测到无人时，自动进入绿色节能状态；划分区域独立管理；根据时间段自动切换灯光场景</P>
                </Col>
             </Row>
             <Row class="TextCenter">
                <Col span="24">
                    <div class="SingleImg marginTB_40">
                        <img src="static/img/Icon/Products/SmartHox_Products_icon11.png">
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
.Light{
    margin: 40px 20px;
    .SingleImg img{
        max-width: 95%;
    }
}
</style>
