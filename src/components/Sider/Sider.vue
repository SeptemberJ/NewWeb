<template>
  <div>
    <div class="desktop">
      <Menu :theme="theme3" :active-name="CurSiderMenu" @on-select="ChangeSiderMenu">
          <MenuGroup title="">
               <MenuItem name="首页" class="marginB_20">
                  <Icon size="22" type="home"></Icon>
                  <h5>首页</h5>
              </MenuItem>
              <MenuItem name="物联网场景应用" class="marginB_20">
                  <Icon size="22" type="earth"></Icon>
                  <h5>物联网场景应用</h5>
              </MenuItem>
              <MenuItem name="产品与服务" class="marginB_20">
                  <Icon size="22" type="cube"></Icon>
                  <h5>产品与服务</h5>
              </MenuItem>
              <MenuItem name="公司" class="marginB_20">
                  <i class="F_24 fa fa-building" aria-hidden="true"></i>
                  <h5>公司</h5>
              </MenuItem>
          </MenuGroup>
      </Menu>
    </div>
    <div class="tablet">
      <Menu :theme="theme3" :active-name="CurSiderMenu" @on-select="ChangeSiderMenu2">
          <MenuGroup title="">
               <MenuItem name="首页" class="marginB_20">
                  <Icon size="22" type="home"></Icon>
                  <h5>首页</h5>
              </MenuItem>
              <MenuItem name="物联网场景应用" class="marginB_20">
                  <Icon size="22" type="earth"></Icon>
                  <h5>物联网场景应用</h5>
              </MenuItem>
              <MenuItem name="产品与服务" class="marginB_20">
                  <Icon size="22" type="cube"></Icon>
                  <h5>产品与服务</h5>
              </MenuItem>
              <MenuItem name="公司" class="marginB_20">
                  <i class="F_24 fa fa-building" aria-hidden="true"></i>
                  <h5>公司</h5>
              </MenuItem>
              <MenuItem name="Close" class="marginB_20">
                  <Icon size="22" type="chevron-left"></Icon>
              </MenuItem>
          </MenuGroup>
      </Menu>
    </div>
  </div>
  <!-- <Menu class="TextLeft" active-name="" :open-names="['']">
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                物联网场景应用
            </template>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                产品与服务
            </template>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                公司
            </template>
        </Submenu>
  </Menu> -->
</template>
<script>

  export default{
    data: function () {
      return {
        theme3: 'light'
      }
    },
    mounted: function () {
      
    },
    created() {
      
    },
    computed: {
      CurSiderMenu(){
        return this.$store.state.CurSiderMenu
      }
      
    },
    watch: {
      
    },
    components: {
      

    },
    methods: {
      ChangeSiderMenu(Menu){
        this.$store.state.CurSiderMenu = Menu
        this.$router.push({name:Menu})
        //this.ToggleSider()
      },
      ChangeSiderMenu2(Menu){
        if(Menu != 'Close'){
          this.$store.state.CurSiderMenu = Menu
          this.$router.push({name:Menu})
        }
        this.ToggleSider()
      },
      ToggleSider (flag) {
          this.$store.state.open = !this.$store.state.open
      },
     

    }
  }
</script>
<style lang="scss">
.F_24{
  font-size: 22px;
}
.desktop{
  display: none;
}
.tablet{
  display: inline-block;
}
@media (min-width: 769px) {
  .desktop{
    display: inline-block;
  }
  .tablet{
    display: none !important;
  }

}
.ivu-menu-item-group-title{
  background-repeat: no-repeat;
  background-position-x: center;
  background-image: url('http://www.btzoon.com/SmartHox/static/img/logo.png')
}
.ivu-menu-light{
  width: 150px !important;
}
</style>
