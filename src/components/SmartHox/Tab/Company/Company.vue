<template>
    <div class="parcontainer parsys">
                <!--对应描文本-->
                <div class="anchortarget section">
                  <a id="overview" class="navSelecter"></a>
                </div>
                <img style="width: 100%;"  src="static/img/Banner/aboutus.png">
                <div class="OneBlock PaddingLR_20">
                    <h2 class="marginTB_20">Smart Hox 帮助企业快速实现智能化、人工智能、大数据</h2>
                    <P>
                        为了进一步促进政产学研深度合作，创新高校服务地方和产业的科技体制，推动浙江大学与政府、企业的协同创新，以可持续发展机制构建提升科技研发能力、加快科技成果转化、服务区域经济发展的创新平台，实现科技、人才、学科、产业四位一体全面提升，浙江大学工业技术研究院与江苏省常熟市政府共同设立“浙江大学常熟光电技术联合研究中心”作为常熟光电产业的创新平台，该平台由中瑞联合光子研究中心、浙江大学光与电磁波研究中心联合、华南师范大学光电磁波研究中心及浙江浙大网新集团，旨在整合产业化技术项目，加快科技成果转化，并集聚本领域人才，推进产学研一体化进程。 研究中心面向国家重大科技创新需求，致力于高端光电信息感知技术的开发研究，为电子信息、医疗健康、节能与环境保护，特别是战略性新兴产业储备关键核心技术，促进现有相关产业的转型升级。同时联合浙大网新集团的创新资源，积极整合海内外高科技力量，共同打造一个国内一流的光电信息产业创新平台。 2014年4月，由浙江大学光与电磁波研究中心产业化团队及浙大网新集团共同出资注册“江苏龙诺法光电技术有限公司”企业化运营常熟研究中心。2015年6月，由浙江大学苏州工业技术研究院组织，江苏龙诺法光电技术有限公司和Ztnet共同出资成立“Zdinfo、Btzoon、Smart Hox”，负责常熟研究中心平台的建设、向企业提供科技服务及公共软硬件平台设备的运营和维护。研究中心平台的项目内容涵括以IT信息、大数据、物联网战略需求为中心的光电传感技术、智能显示技术、环境及工业检测技术等。
                    </P>
                </div>

                <!-- 愿景 -->
                <div class="OneBlock" style="width: 100%;padding: 10px 0;border-radius: 0px;border: 0px solid rgb(68,114,196);background-image: url('static/img/Icon/Company/SmartHox_Company_icon10.png') ">
                    <Row type="flex"  justify="center"  class="code-row-bg ":gutter="16">
                        <Col class="marginB_20 " :xs="24" :sm="24" :md="8" :lg="8" v-for="(Block,Idx) in BlockInfo">
                            <div style="height: 100%;" class="Padding_10 colorWhite TextCenter ">
                                <div class="TextCenter marginTB_20">
                                    <img style="width: 50px;" :src="Block.img">
                                </div>
                                <h2>{{Block.title}}</h2>
                                <p class="marginTB_10 colorWhite">{{Block.content}}</p>
                            </div>
                        </Col>
                        <div style="clear: both;"></div>
                    </Row>
                </div>
                <div class="LineBlock"></div>
                
                <div class="anchortarget section">
                  <a id="developmentHistory" class="navSelecter"></a>
                </div>
                <!-- 发展历程 -->
                <div class="OneBlock">
                    <h1 class="marginTB_20 TextCenter">
                        <span class="DotAfter">发展历程</span>
                        <span class="BlueBorder"></span>
                    </h1>
                    
                    <h3 class="marginTB_20 TextCenter">DEVELOPMENT HISTORY</h3>

                    <div style="width: 100%;display: block;">
                        <Row type="flex"  justify="center"  class="code-row-bg TextCenter PaddingLR_20 marginTB_20":gutter="16">
                            <Col class="marginB_20" :xs="24" :sm="12" :md="12" :lg="10">
                                <div class="SingleImg TextCenter marginT_20">
                                    <img src="static/img/Icon/Company/SmartHox_Company_icon11.png">
                                </div>
                            </Col>
                            <Col class="marginB_20" :xs="24" :sm="12" :md="12" :lg="14">
                                <Timeline>
                                    <TimelineItem v-for="(Timeline,Idx) in TimelineList">
                                        <h5 class="time TextLeft">{{Timeline.time}}年</h5>
                                        <p class="content TextLeft">{{Timeline.content}}</p>
                                    </TimelineItem>
                                </Timeline>
                            </Col>
                        </Row>
                    </div>
                    <Row type="flex"  justify="space-around"  class="code-row-bg marginTB_40  Padding_10" :gutter="16">
                        <Col class="marginB_20" :xs="24" :sm="8" :md="4" :lg="4" v-for="(Place,Idx) in PlaceList">
                            <div style="height: 100%;text-align: center;" class="SingleImg ImgAdditional">
                                <img style="" :src="Place.img">
                                <h5 class="marginT_10">{{Place.name}}</h5>
                            </div>
                        </Col>
                        <div style="clear: both;"></div>
                    </Row>
                </div>
                <div class="LineBlock"></div>
                
                <div class="anchortarget section">
                  <a id="team" class="navSelecter"></a>
                </div>
                <!-- 我们的团队 -->
                <!-- <div class="OneBlock colorWhite"  style="background-image: url('static/img/Icon/Company/parallax-two.jpg')"> -->
                <div class="OneBlock PaddingLR_20">
                    <h1 class="marginTB_20 TextCenter">
                        <span class="DotAfter">我们的团队</span>
                        <span class="BlueBorder"></span>
                    </h1>
                    <h3 class="marginTB_20 TextCenter">OUR TEAM</h3>
                    <Row type="flex" justify="space-between" class="code-row-bg" :gutter="16">
                        <Col :xs="24" :sm="24" :md="12" :lg="12" v-for="(Professor,Idx) in ProfessorList" class="marginB_10">
                            <div class="thumb-container  singleLineEllipse">
                                <div class="thumb-img"  :style="{'background-image':'url(' + Professor.img +')'}">
                                </div>
                                <div class="thumb-details showHam" >
                                    <div class="col-xs-1 col-md-1 col-sm-1" style="height: 86px;">
                                      <!-- <i :class="[Block.icon]"></i> -->
                                    </div>
                                    <div class="col-xs-10 col-md-10 col-sm-10" style="height: 86px;">
                                        <div class="detail-content clamp">
                                          <h3 class="clampingDetail" data-id="randomId7643" style="">
                                          <span class="asianLang" style="width: 100%">{{Professor.name}}</span>
                                          </h3>
                                          <p class="clampingDetail" data-id="randomId9455" style="">
                                          <span class="asianLang" style="width: 200px">{{Professor.introduction}}</span>
                                          </p>
                                        </div>
                                    </div>
                                    <div class="col-xs-1 col-md-1 col-sm-1 cntClk" style="height: 86px;">
                                        <i class="fa fa-bars detail-toggle"></i>
                                    </div>
                                    <div class="social-block">
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

               
            </div>
</template>
<script>

  export default{
    data: function () {
      return {
        BlockInfo:[
            {'title':'使命','content':'万物物联，创造美好生活','img':'static/img/Icon/Company/SmartHox_Company_icon7.png'},
            {'title':'愿景','content':'打造最有价值的物联网产品数据流公司','img':'static/img/Icon/Company/SmartHox_Company_icon8.png'},
            {'title':'价值观','content':'使命感、饥饿感、坦诚、踏实、纯粹、敬畏、 改变之力、助他精神、创新与变革','img':'static/img/Icon/Company/SmartHox_Company_icon9.png'}
        ],
        TimelineList:[
            {'time':'2005','content':'公司前身上海旺策尔科技有限公司'},
            {'time':'2006','content':'售网络设备'},
            {'time':'2008','content':'Geinfo和旺策尔合并，代理思科及H3C,进入网络系统集成服务领域'},
            {'time':'2010','content':'分销海外市场'},
            {'time':'2012','content':'成立卓庭信息集团有限公司（Ztnet Group）'},
            {'time':'2014','content':'与浙江大学合作自主开发软件系统及光电传感产品'},
            {'time':'2015','content':'依托苏州政府产学结合，由浙大网新集团、浙江大学光电研究中心、江苏龙诺法光电技术有限公司和Ztnet Group共同成立（Zdinfo、Btzoon、Smart Hox）运营平台'},
            {'time':'2017','content':'开发物联网(IoT)云平台及硬件联网接入设备语音识别及可穿戴产品'},
        ],
        PlaceList:[
            {'name':'微细加工及芯片封装实验室','img':'static/img/Icon/Company/SmartHox_Company_icon1.png'},
            {'name':'工业检测及电路实验室','img':'static/img/Icon/Company/SmartHox_Company_icon2.png'},
            {'name':'光学成像与检测实验室','img':'static/img/Icon/Company/SmartHox_Company_icon3.png'},
            {'name':'机械加工中心','img':'static/img/Icon/Company/SmartHox_Company_icon4.png'},
            {'name':'光纤维传感实验室','img':'static/img/Icon/Company/SmartHox_Company_icon5.png'}
        ],
        ProfessorList:[
            {'name':'何赛灵.董事长','img':'static/img/Icon/Company/SmartHox_Company_icon6.png','introduction':'教授，1999年归国受聘教育部“长江学者奖励计划”首批特聘教授而创立浙江大学光及电磁波研究中心，是中瑞(浙江大学-瑞典皇家工学院-瑞典隆德大学)光子联合研究中心主任，国家“海外高层次人才引进计划”（千人计划）入选者，国际电气电子工程师协会(IEEE）会士(Fellow)，美国光学学会(OSA)会士，国际光学工程学会(SPIE)会士和位于美国的电磁科学院Fellow技术项目。'}
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
.Company{
    margin: 52px 0px;
    .SingleImg img{
        max-width: 100%;
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
    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
    .BlueBorder{
        width: 80px;
        height: 1px;
        margin: 0px auto;
        display: block;
        border-bottom: 2px solid #4091EF;
    }
    .DotAfter:after{
        content:'.';
        color: #4091EF;
        font-size: 55px;

    }
    .IfShow{
        opacity: 0;
    }
    .IfShow:hover{
        opacity: 1;
    }
    /*
    .SpecialP:before{
        height: 0px;
        overflow: hidden;
        font-size: 90px;
        content: "“";
        position: relative;
        top: 0px;
        left: 0;
    }
    .SpecialP:after{
        height: 0px;
        font-size: 90px;
        content: "”";
        position: relative;
        top: 0px;
        left: 0;
    }
    */
}
</style>
