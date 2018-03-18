<template>
    <div class="Hotel">
        <div class="TextCenter">
            <h2 class="TextLeft">物联网酒店系统构成</h2>
            <div class="SingleImg marginTB_40">
                <img src="static/img/Icon/SmartHox_ApplicationScene_icon7.png">
            </div>
            <h2 class="TextLeft">智慧客房构成</h2>
            <div class="SingleImg marginTB_40">
                <img src="static/img/Icon/SmartHox_ApplicationScene_icon8.png">
            </div>
            <h2 class="TextLeft">物联网酒店系统功能介绍</h2>
        </div>
        <Row type="flex" justify="space-between" class="code-row-bg marginTB_40" :gutter="16">
            <Col class="marginB_20" :xs="24" :sm="12" :md="8" :lg="8" v-for="(Introduction,Idx) in IntroductionList">
                <div style="min-height: 200px;" class="Padding_10">
                    <h3>{{Introduction.title}}</h3>
                    <p class="marginTB_20">{{Introduction.content}}</p>
                </div>
            </Col>
            <div style="clear: both;"></div>
        </Row>
    </div>
</template>
<script>

  export default{
    data: function () {
      return {
        IntroductionList:[
            {'title':'手机自助订房','content':'简化入住流程，手机直接订房并支付；无需人工参与，系统自动分配房间；免去OTA平台佣金（20%）；节约前台人工成本（2-4人）。'},
            {'title':'未到酒店前远程查看并控制客房的温度、湿度','content':'进入客房即可享受符合自己个性需求的温度；打造可以控制客房湿度的酒店；钟点房客人体验感更好，进入房间即可享受舒适的温湿度。让本酒店在区域内具有无与伦比的竞争优势！系统具有记忆功能，第一次选择以后，下次入住时系统自动推荐！'},
            {'title':'手机开门，无需前台领卡，直接进入房间','content':'省去前台领卡时焦急等待情侣开房更加方便，无需接触服务人员，手机订房后直接开门。'},
            {'title':'智慧客房控制','content':'寒冷的冬天，你可以在被窝里用手机调节空调温度；早晨醒来，在床上打开窗帘看海景、日出；美妙的音乐想听就听。躺在床上用手机控制灯光、窗帘、排风扇、空调、电视机、音乐……'},
            {'title':'智能睡眠系统','content':'系统监控你的心跳，发现异常及时报警，避免喝酒后危险；系统监控呼气频率，发现异常及时报警，避免睡眠猝死；可以打印睡眠报告，了解睡眠质量；睡眠后，忘记关灯，系统帮助你关灯，避免白内障；睡眠后，温度过低，容易感冒，系统帮助你升温。'},
            {'title':'客房空气质量调节','content':'入睡后，如果二氧化碳浓度过高，系统自动开启排风或新风调节；PM2.5过高，系统自动开启窗户和排风扇或空气净化器；客房保持恒温、恒湿状态。实时监测入住期间的客房环境：温度、湿度、粉尘颗粒、二氧化碳。'},
            {'title':'体验式购物-开启最佳盈利模式','content':'酒店购物最佳商品：需要长时间体验产品、批发零售价格差大、零售价格大众有认知；为什么可以做到低价：无销售人员、无场地费、无渠道差；酒店增值利润极大！'},
            {'title':'手机自助续房、退房','content':'传统酒店：续房平均至少需要3分钟；高峰期更是长达十余分钟，客人感知极差……紫光物联智能酒店，秒续；节约3分钟，带来的是客人感知大幅提升；节约3分钟，带来的是服务人员效率大幅提升；办完事情，无需回酒店，拿出手机退房，直接去机场走人，节约3个小时'},
            {'title':'Hox 物联物联网酒店对投资人的六大价值','content':'一、物联网酒店能够提高客人的首选率；全部客户转化为会员；增加客户粘性（回头率）；节约前台人工成本（降低服务成本）；房间产品的营销（带动体验式购物）；大数据价值巨大。'}
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
.Hotel{
    margin: 40px 20px;
    .SingleImg img{
        max-width: 80%;
    }
}
</style>
