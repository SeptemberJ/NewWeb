<template>
    <div class="Household">
        <Card :bordered="false" dis-hover>
             <Row>
                <Col span="24" class="TextCenter">
                    <h3 class="marginB_20" style="color: #000;">智能家居设备</h3>
                    <p>你不必再关心你的电器, 更多的是它们开始关心你;</p>
                    <p>手机控制：下班了, 拿出手机用App打开空调制热, 打开家门便是温暖;</p>
                    <p>语音控制：对Amazon echo、天猫机灵等智能设备, 说一句“制暖”, 空调便开始运行;</p>
                </Col>
             </Row>
             <Row class="marginT_20">
                <Col span="24" class="TextCenter">
                    <p>mart Hox智能云会记录并学习消费者的动作和习惯：温度过低空调会开启制热模式；当你离开家, 空调、取暖器等会停止工作。</p>
                </Col>
             </Row>
             <Row class="TextCenter">
                <Col span="24">
                    <div class="SingleImg marginTB_40">
                        <img src="static/img/Icon/SmartHox_home_icon21.jpg">
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
.Household{
    margin: 40px 20px;
    .SingleImg img{
        max-width: 95%;
    }
}
</style>
