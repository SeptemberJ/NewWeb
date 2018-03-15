<template>
<div class="">
     <Carousel v-model="value1">
        <CarouselItem>
            <div class="demo-carousel" style="position: relative;">
                <img src="http://139.196.232.21/images/vmw-hp-hero-vSAN6.5.jpg">
                <div style="margin-top:102px;width:60% position: absolute;top: 0px">
                    <h1>物流</h1>
                </div>
            </div>
        </CarouselItem>
        
    </Carousel>
</div>
</template>
<script>
//import TopBlock from 'components/PC/Common/TopBlock'
  export default{
    data: function () {
      return {
        value1:0
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
