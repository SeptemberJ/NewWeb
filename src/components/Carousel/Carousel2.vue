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

                              <div v-if="CurCarousel == 0" class="owl-item active" style="width: 100%;height: 100%;">
                                <div class="heroCarouselTabs1 heroCarouselTabs">
                                  <div class="item" style="position:relative;">
                                    <div class="item-img lazyOwl" title="物流管理平台" data-icon="fa fa-cubes" style="display: inline-block; background-image: url('http://139.196.232.21/images/LogisticsManagementLogistics.jpg');"></div>
                                        
                                    <div class="l2_banner_content">
                                      <h2>工业4.0 互联网+ 时代</h2>
                                      <p>物流就应该这个样子！</p>
                                      <h2>物流的未来——仓储一体化</h2>
                                            <a class="btn btn-orangered" href="sfwl.jsp" target="_self">了解详细信息</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              
                              <div v-if="CurCarousel == 1" class="owl-item" style="width: 100%;height: 100%;">
                                <div class="heroCarouselTabs2 heroCarouselTabs">
                                    <div class="item">
                                        <div class="item-img lazyOwl" title="会议管理平台" data-icon="fa fa-calculator" style="display: inline-block; background-image: url('http://139.196.232.21/images/management-of-mettings.jpg');"></div>
                                        <div class="l2_banner_content">
                                            <h2>无纸化智能会议系统</h2>
                                            <p>智能、安全的会议室技术</p>
                                             <p>快速开始会议  更高效地协作</p>
                                            <a class="btn btn-orangered" href="cloud-meeting.jsp" target="_self">了解其新功能特性</a>
                                            
                                        </div>
                                    </div>
                                </div>
                              </div>
                              
                              
                              <div v-if="CurCarousel == 2" class="owl-item" style="width: 100%;height: 100%;">
                                <div class="heroCarouselTabs1 heroCarouselTabs">
                                  <div class="item">
                                      <div class="item-img lazyOwl" title="MES制造执行系统" data-icon="fa fa-cubes" style="display: inline-block; background-image: url('http://139.196.232.21/images/vmw-hp-hero-vSAN6.5.jpg');">
                                      </div>
                                      
                                      <div class="l2_banner_content">
                                          <h2>MES制造执行系统</h2>
                                          <p>MANUFACTURING EXECUTION SYSTEM</p>
                                          <p>工业4.0解决方案提供商[构造数字化工厂  实现智能制造]</p>
                                          <a class="btn btn-orangered" href="mes-manufacture.jsp" target="_self">了解详细信息</a>
                                      </div>
                                  </div>
                                </div>
                              </div>
                      </div>
                    </div>
                    <!-- 下方滚动条 -->
                    <div class="owl-controls clickable" style="bottom: 58px;">
                      <div class="owl-pagination">
                        <div :class="{ 'active': CurCarousel == 0,'owl-page downpage':true}"  @click="ChangeCurCarousel(0)">
                          <span class=""><i class="fa fa-truck"></i><p style="height: 40px;">物流管理平台</p></span>
                        </div>
                        <div :class="{ 'active': CurCarousel == 1,'owl-page downpage':true}" @click="ChangeCurCarousel(1)">
                          <span class=""><i class="fa fa-group"></i><p style="height: 40px;">会议管理平台</p></span>
                        </div>
                        <div :class="{ 'active': CurCarousel == 2,'owl-page downpage':true}"  @click="ChangeCurCarousel(2)">
                          <span class=""><i class="fa fa-inbox"></i><p style="height: 40px;">MES制造执行系统</p></span>
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

            

      <div class="titleIcons" title="物流管理平台" data-icon="fa fa-truck"></div>
      <div class="titleIcons" title="会议管理平台" data-icon="fa fa-group"></div>
      <div class="titleIcons" title="金蝶软件" data-icon="fa fa-inbox"></div>
     </div>
</div>

   <!--//carousel-->
</template>
<script>
//import TopBlock from 'components/PC/Common/TopBlock'
  export default{
    data: function () {
      return {
        CurCarousel:0
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
