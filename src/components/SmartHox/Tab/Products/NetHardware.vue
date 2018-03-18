<template>
    <div class="NetHardware">
        <div class="TextCenter">
            <h2 class="marginTB_20">物联网硬件产品</h2>
            <p>多协议支持，快速打通物联网接入。 全品类开发经验，灵活的产品模式</p>
        </div>

        <Row type="flex"  justify="center"  class="code-row-bg marginTB_40":gutter="16">
            <Col class="marginB_20" :xs="24" :sm="24" :md="8" :lg="8" v-for="(Block,Idx) in BlockInfo">
                <div style="height: 100%;" :class="{'Padding_20':true, 'colorWhite':true, 'TextCenter':true,'Bg_blue':Idx == 0,'Bg_gray':Idx == 1,'Bg_orange':Idx == 2}">
                    <h3>{{Block.title}}</h3>
                    <h3>{{Block.slogan}}</h3>
                    <p class="marginTB_40 TextLeft">{{Block.content}}</p>
                    <img class="marginTB_40" style="width: 80px;" :src="Block.img">
                </div>
            </Col>
            <div style="clear: both;"></div>
        </Row>

        <div class="TextCenter OneBlock">
            <h2 class="marginTB_20">智能硬件产品</h2>
            <p>物联网 (IoT)始于“物”（即设备）。构建您的设备（从添加传感器到创建智能设备），才能启动您的 IoT 解决方案。我们提供如下产品</p>
            <Row type="flex"  justify="center"  class="code-row-bg marginTB_40":gutter="16">
                <Col class="marginB_20" :xs="12" :sm="8" :md="4" :lg="4" v-for="(Hardware,Idx) in HardwareList">
                    <div class="SingleImg">
                        <img style="width: 120px; height: 120px;" :src="Hardware.img">
                        <h5>{{Hardware.name}}</h5>
                    </div>
                </Col>
                <div style="clear: both;"></div>
            </Row>
        </div>

        <div class="OneBlock">
            <h2 class="marginTB_20">ODM</h2>
            <h2 class="">为你的传统电器，插上智能的“翅膀”</h2>
            <div class="TextCenter SingleImg">
                <img src="static/img/Icon/SmartHox_Products_icon13.png">
            </div>
        </div>

       
        

    </div>
</template>
<script>

  export default{
    data: function () {
      return {
        BlockInfo:[
            {'title':'智能网关','slogan':'Hox ONE','content':'','img':'static/img/Icon/Products/SmartHox_Products_icon1.svg',},
            {'title':'嵌入式联网模块','slogan':'','content':'','img':'static/img/Icon/Products/SmartHox_Products_icon2.svg',},
            {'title':'无线接入模块','slogan':'','content':'','img':'static/img/Icon/Products/SmartHox_Products_icon3.svg',},
        ],
        HardwareList:[
            {'name':'智能网关','img':'static/img/Icon/SmartHox_Products_icon7.png'},
            {'name':'智能电箱','img':'static/img/Icon/SmartHox_Products_icon8.png'},
            {'name':'协议转换器','img':'static/img/Icon/SmartHox_Products_icon9.png'},
            {'name':'无源开关','img':'static/img/Icon/SmartHox_Products_icon10.png'},
            {'name':'随意智能音箱','img':'static/img/Icon/SmartHox_Products_icon11.png'},
            {'name':'传感设备','img':'static/img/Icon/SmartHox_Products_icon12.png'}
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
.NetHardware{
    margin: 40px 20px;
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
