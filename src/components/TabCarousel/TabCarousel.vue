<template>
  <div class="TabCarousel marginT_40">
       <div class="section carousel" style="margin-top:-25px;"> 
         <div class="transitionValue" transitionvalue="10" style="transition: none 0s ease 0s ;"></div> 
         <div class="transitionOffOn" transitionoffon="" style="transition: none 0s ease 0s ;"></div> 
   <!--Carousel module starts here--> 
   <div class="section full-width" style="transition: none 0s ease 0s ;"> 
    <div class="container-fluid" style="transition: none 0s ease 0s ;"> 
     <div class="row"> 
      <div class="col-md-12"> 
       <div class="customerBanner"> 
        <div class="owl-container"> 
         <div id="customerSlider" class="owl-carousel owl-theme" style="opacity: 1; display: block;"> 

          <div class="owl-wrapper-outer">
           <div class="owl-wrapper" style="left: 0px; display: block;">
           
           
            <div class="owl-item" style="position:relative;width: 100%" v-for="(TabCarousel,Idx) in TabCarousel" v-if="CurCarousel == Idx">
             <div class="carouselContent1 W"> 
              <div class="item"> 
               <div class="item-img lazyOwl" img-src="http://139.196.232.21/images/vmware-ibm-selected.png" tab-name-track="" :style="{display: 'block',backgroundImage:'url('+ TabCarousel.img +')'}"></div> 
               <div class="l2_banner_content colorWhite"> 
                <h2>{{TabCarousel.title}}</h2>
                <p>您只需做</p>
                <p>{{TabCarousel.customer}}</p>
                <p>Smart Hox为您提供</p>
                <p>{{TabCarousel.SmartHox}}</p>
                <a class="btn btn-orangered"  href="linguo.jsp">{{TabCarousel.link}}</a> 
               </div> 
              </div>
             </div>
            </div>

           </div>
          </div> 
          
          
          
          <div class="owl-controls clickable">
           <div class="owl-pagination">
            <div :class="{'owl-page':true,'active':CurCarousel == Idx}" v-for="(TabCarousel,Idx) in TabCarousel" @click="ChangeCurCarousel(Idx)">
             <span class="CursorPointer">
                <i style="display: block;text-align: center;" :class="[TabCarousel.icon]"></i>
                <p  style="color: #ccc;">{{TabCarousel.title}}</p>
             <!-- <img :src="TabCarousel.sloganImg" alt="" /> -->
             </span>
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
   </div> 
  </div>
  </div>
</template>
<script>

  export default{
    data: function () {
      return {
        CurCarousel:0,
        TabCarousel:[
          {'img':'static/img/SmartHox/picture/vmware-vforum-online-2018.jpg','title':'需求洽谈','customer':'明确产品需求;选择需要的服务方案','SmartHox':'项目经理一对一沟通需求;根据行业分析与项目经验, 提供咨询建议介绍服务, 提出可行的方案确认产品定义','link':'','icon':'fa fa-comments'},
          {'img':'static/img/SmartHox/picture/vmware-uoldiveo-video-tn.jpg','title':'技术对接','customer':'提供对接协议','SmartHox':'进行技术对接','link':'','icon':'fa fa-random'},
          {'img':'static/img/SmartHox/picture/vmw-vmworld-aws-hero.jpg','title':'产品研发','customer':'提出需求','SmartHox':'需求分析;产品设计;产品开发','link':'','icon':'fa fa-archive'},
          {'img':'static/img/SmartHox/picture/vmw-spotlight-security.jpg','title':'联合调试','customer':'试用','SmartHox':'初步测试;修改BUG','link':'','icon':'fa fa-wrench'},
          {'img':'static/img/SmartHox/picture/vmw-customer-aritel.jpg','title':'生产上线','customer':'','SmartHox':'全面部署','link':'','icon':'fa fa-bullhorn'},
        ]

      }
    },
    mounted: function () {
      
    },
    created() {
      
    },
    computed: {
      open:{
          get: function () {
            return this.$store.state.open
          },
          set: function (newValue) {
            this.$store.state.open = newValue
          }
      }
      
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
          this.CurCarousel = 4
        }
      },
      NextCurCarousel(){
        if(this.CurCarousel<4){
          this.CurCarousel+=1
        }else{
          this.CurCarousel = 0
        }
      },
     

    }
  }
</script>
<style lang="scss">
.TabCarousel{

}
</style>
