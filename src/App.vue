<template>
  <div class="com-app">
     <div class="layout">
        <div class="content">
          <div v-bind:class="{ 'content_left': open}">
          <h2 v-if="open">
            <Sider/>
          </h2>
          </div>
          <div :class="{'content_right':open}">
            <div class="header">
              <Header/>
            <!-- <Button type="primary" @click="toggle()">头部</Button> -->
            </div>
            <div class="body">
              <transition>
                <router-view class="child-view"></router-view>
              </transition>
            </div>
            <div class="footer">
              <Footer/>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import Header from 'components/Header/Header'
import Sider from 'components/Sider/Sider'
import Footer from 'components/Footer/Footer'

  export default{
    data: function () {
      return {
      }
    },
    mounted: function () {
      
    },
    created: function () {
      
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
      Header,
      Sider,
      Footer
      

    },
    methods: {
      toggle (flag) {
        this.$store.state.open = !this.$store.state.open
      },
     

    }
  }
</script>
<style lang="scss">
$width: 150px;


.layout{
}

.logo{
  font-size: 24px;
  color: white;
  text-align: center;
  color: #7e57c2;
  padding: 10px 20px;
}

.tab{
  margin: 0 auto;
  width: 400px;
}

.content{
  overflow: hidden;
}

.content_left{
  width: $width;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 999999;
}

.content_right{
  border: 0px solid blue;
  width: 100%;
  display: inline-block;
  float: right;
  background-color: rgb(236, 236, 236);
}
@media (min-width: 769px) {
  .content_left{
    background-color: #fff;
    width: $width;
    float: left;
  }

  .content_right{
    border: 0px solid red;
    width: calc(100% - #{$width});
    display: inline-block;
    float: right;
    background-color: rgb(236, 236, 236);
  }
}

.header{
  background-color: white;
  height: 40px;
}

.body{
  min-height: 500px;
  background-color: white;
  margin: 20px 5px;
}

.footer{
  padding: 0;
  text-align: center;
}
</style>
