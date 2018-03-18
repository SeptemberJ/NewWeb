<template>
    <div class="Agriculture">
        <div class="TextCenter">
            <h2>Hox 智慧农业平台</h2>
            <p class="TextLeft marginTB_20">智慧农业云平台是Smart Hox将国际领先的物联网、移动互联网、云计算等信息技术与传统农业生产相结合，搭建的农业智能化、标准化生产服务平台，旨在帮助用户构建起一个“从生产到销售，从农田到餐桌”的农业智能化信息服务体系，为用户带来一站式的智慧农业全新体验。Hox智慧农业云平台可广泛应用于国内外大中型农业企业、科研机构、各级现代化农业示范园区与农业科技园区，助力农业生产标准化、规模化、现代化发展进程。</p>
            <div class="SingleImg marginTB_40">
                <img src="static/img/Icon/SmartHox_ApplicationScene_icon9.png">
            </div>
        </div>
        <Row type="flex"  justify="center"  class="code-row-bg marginTB_40":gutter="16">
            <div class="marginTB_20" v-for="(Agriculture,Idx) in AgricultureInfo">
                <Col class="" :xs="24" :sm="24" :md="18" :lg="18" >
                    <div class="Padding_10">
                        <h3 class="marginTB_20">{{Idx + 1}}.{{Agriculture.title}}</h3>
                        <p>{{Agriculture.content}}</p>
                    </div>
                </Col>
                <Col :xs="24" :sm="24" :md="6" :lg="6">
                    <div class="SingleImg TextCenter marginT_20">
                        <img :src="Agriculture.img">
                    </div>
                </Col>
            </div>
            <div style="clear: both;"></div>
        </Row>
        
    </div>
</template>
<script>

  export default{
    data: function () {
      return {
        AgricultureInfo:[
            {"title":'远程智能监控',"content":'Hox 智慧农业云平台通过在生产现场部署传感器、控制器、摄像头等多种物联网设备，借助个人电脑、智能手机，就能实现对农业生产现场气候变化、土壤状况、作物生长、水肥使用、设备运行等实时监测展示，对异常情况的自动报警提醒，生产者可及时采取防控措施，降低生产风险；同时在云平台生产者可远程自动控制生产现场的灌溉、通风、降温、增温等设施设备，实现精准作业，减少人工成本的投入。','img':'static/img/Icon/SmartHox_ApplicationScene_icon10.png'},
            {"title":'标准生产管理',"content":'云平台可根据农业生产需求，定制建立标准化生产管理流程，流程一经启动，平台将自动进行任务创建、分配与跟踪。工作人员可在手机上收到平台发布的任务指令,并按任务要求进行农事操作与工作汇报。同时，管理者亦能在平台中对工作人员进行任务派发与工作效率监督，随时随地了解园区生产情况。','img':'static/img/Icon/SmartHox_ApplicationScene_icon11.png'},
            {"title":'产品安全溯源',"content":'云平台可以帮助用户进行农产品品牌管理，并为每一份农产品建立丰富的溯源档案。通过云平台，生产者可进行生产投入物品，以及农产品检测、认证、加工、配送等信息的记录管理，相关信息可自动添加到农产品溯源档案；同时通过部署在生产现场的智能传感器、摄像机等物联网设备，平台可自动采集农产品生长环境数据、生长期图片信息、实时视频等，丰富农产品档案。平台利用一物一码技术，将独立的防伪溯源信息生成独一无二的二维码、条形码及14位码，用户使用手机扫描二维码、条形码，或登录云农产品溯源平台录入14位码，即可快速通过图片、文字、实时视频等方式，查看农产品从田间生产、加工检测到包装物流的全程溯源信息。使用一物一码技术，一次扫码后即无效，可实现有效防伪。','img':'static/img/Icon/SmartHox_ApplicationScene_icon12.png'},
            {"title":'市场网络营销',"content":'互联网时代，充分利用企业官网、电子商务平台、微信公众号等网络平台进行全网营销势在必行。Hox云智慧农业云平台的快速建站功能，可以帮助用户通过简单的操作轻松建设自己官方网站，后期只需根据企业的营销需求，随时进行内容的编辑即可实现管理维护，所搭建的网站可实现电脑、手机多终端适配，让更多的客户快速通过网站了解企业。Hox云智慧农业云平台的农产品电子商务功能，可以帮助用户搭建自己的电子商务平台，用户只需要通过简单的操作即可进行产品的发布与销售。同时云平台实现与微信公众号深度集成，消费者通过微信公众号即可进入农产品电子商务商城，并且可以随时查看农产品种植基地的环境数据、实时视频等，有助于增强消费者对农产品的体验以及对企业的信任，促进农产品的销售。','img':'static/img/Icon/SmartHox_ApplicationScene_icon13.png'},
            {"title":'农技指导咨询',"content":'Hox云智慧农业云平台汇聚了农业专家资源，并搭建了涵盖蔬菜、瓜果等主要作物的农学知识库。用户可在云平台上通过图片、文字、语音等方式向专家进行远程技术咨询，以获取专家的远程指导；用户还可以在平台上进行自助咨询，快速获取由系统智能应答的农技指导；同时在云平台上，用户可以添加专家或其他生产者为好友，或者在云平台交流中心进行交流，以获得更多农技指导信息。','img':'static/img/Icon/SmartHox_ApplicationScene_icon14.png'}
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
.Agriculture{
    /**
    h2,h3{
        color: #000;
        font-weight: bold;
    }
    */
    margin: 40px 20px;
    .SingleImg img{
        max-width: 80%;
    }
}
</style>
