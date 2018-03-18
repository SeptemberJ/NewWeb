<template>
   <!--carousel-->
<div class="par parsys">
    <div class="heroCarousel section">
      <div class="herocarouseltransitionValue" transitionvalue="5"></div>
      <div class="herocarouseltransitionOffOn" transitionoffon="transitionOn"></div>

  

      <div class="homeBanner section-custom full-width">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="owl-container">
                <section class="note-overlay">
                  <i></i>
                </section>

                <div id="heroBanner" class="owl-carousel owl-theme" style="opacity: 1; display: block;">    
                    <!--  滚动大图-->
                    <div class="owl-wrapper-outer">
                      <div class="owl-wrapper" style="left: 0px; display: block;">
                              <div v-if="CurCarousel == Idx" class="owl-item active" style="width: 100%;height: 100%;" v-for="(Carousel,Idx) in CarouselList">
                                <div class="heroCarouselTabs1 heroCarouselTabs">
                                  <div class="item" style="position:relative;">
                                    <div class="item-img lazyOwl" title="物流管理平台" data-icon="fa fa-cubes" :style="{display: 'inline-block',backgroundImage: 'url(' + Carousel.img + ')'}"></div>
                                    <div class="l2_banner_content">
                                      <h2 class="colorWhite">{{Carousel.tit_b}}</h2>
                                      <p>{{Carousel.tit_s}}</p>
                                      <p>{{Carousel.content}}</p>
                                            <!-- <a class="btn btn-orangered" href="sfwl.jsp" target="_self">了解详细信息</a> -->
                                    </div>
                                  </div>
                                </div>
                              </div>
                      </div>
                    </div>
                    <!-- 下方滚动条 -->
                    <div class="owl-controls clickable" style="bottom: 58px;">
                      <div class="owl-pagination">
                        <div :class="{ 'active': CurCarousel == 0,'owl-page downpage CursorPointer':true}"  @click="ChangeCurCarousel(0)">
                          <span class=""><i class="fa fa-truck"></i><p style="height: 40px;">万物互联一站式解决方案提供商</p></span>
                        </div>
                        <div :class="{ 'active': CurCarousel == 1,'owl-page downpage CursorPointer':true}" @click="ChangeCurCarousel(1)">
                          <span class=""><i class="fa fa-group"></i><p style="height: 40px;">IoT 数据云平台服务</p></span>
                        </div>
                        <div :class="{ 'active': CurCarousel == 2,'owl-page downpage CursorPointer':true}"  @click="ChangeCurCarousel(2)">
                          <span class=""><i class="fa fa-inbox"></i><p style="height: 40px;">物联网接入网关-Hox One</p></span>
                        </div>
                      </div>
                      <div class="owl-buttons">
                        <div class="owl-prev" @click="PreCurCarousel"><i class="fa fa-angle-left"></i></div>
                        <div class="owl-next" @click="NextCurCarousel"><i class="fa fa-angle-right"></i></div>
                      </div>
                    </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

            

      <!-- <div class="titleIcons" title="万物互联一站式解决方案提供商" data-icon="fa fa-truck"></div>
      <div class="titleIcons" title="物联网接入网关-Hox One" data-icon="fa fa-group"></div>
      <div class="titleIcons" title="物联网接入网关-Hox One" data-icon="fa fa-inbox"></div> -->

     </div>
</div>

   <!--//carousel-->
</template>
<script>
//import TopBlock from 'components/PC/Common/TopBlock'
  export default{
    data: function () {
      return {
        CurCarousel:0,
        CarouselList:[
          {'img':'static/img/Banner/banner_home4.png','tit_b':'全系列物联网接入网关','tit_s':'','content':'Smart Hox 打通物联网多协议连接，让万物互联真正融入工作和生活的每个场景，全面支持Wi-Fi、GPRS/3G/4G、ZigBee、RS485、Modbus、蓝牙、RF433、 2.4G 、Z-Wave、CAN等终端接入技术，广泛应用于各类物联网设备。'},
          {'img':'static/img/Banner/banner_home3.png','tit_b':'IoT 数据云平台服务','tit_s':'智能、安全的平台','content':'更高效地协作'},
          {'img':'static/img/Banner/banner_home2.png','tit_b':'物联网接入网关-Hox One','tit_s':'MANUFACTURING EXECUTION SYSTEM','content':'物联网解决方案提供商[构造数字化工厂  实现智能制造]'}
        ]
      }
    },
    mounted: function () {
      
    },
    created() {
      //setInterval(this.NextCurCarousel,4000)
      
    },
    computed: {
      
    },
    watch: {
      
    },
    components: {
      

    },
    methods: {
      ChangeCurCarousel(Idx){
        this.CurCarousel = Idx
      },
      PreCurCarousel(){
        if(this.CurCarousel>0){
          this.CurCarousel-=1
        }else{
          this.CurCarousel = 2
        }
      },
      NextCurCarousel(){
        if(this.CurCarousel<2){
          this.CurCarousel+=1
        }else{
          this.CurCarousel = 0
        }
      },
     

    }
  }
</script>
<style lang="scss">
.section-custom{
  margin: 0px !important;
}
</style>
