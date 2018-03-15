<template>
  <div>
    <div class="desktop">
      <Menu :theme="theme3" :active-name="CurSiderMenu" @on-select="ChangeSiderMenu">
          <MenuGroup title="">
               <MenuItem name="首页" class="marginB_20">
                  <Icon size="24" type="document-text"></Icon>
                  <p>首页</p>
              </MenuItem>
              <MenuItem name="物联网场景应用" class="marginB_20">
                  <Icon size="24" type="document-text"></Icon>
                  <p>物联网场景应用</p>
              </MenuItem>
              <MenuItem name="产品与服务" class="marginB_20">
                  <Icon size="24" type="document-text"></Icon>
                  <p>产品与服务</p>
                  
              </MenuItem>
              <MenuItem name="公司" class="marginB_20">
                  <Icon size="24" type="document-text"></Icon>
                  <p>公司</p>
              </MenuItem>
          </MenuGroup>
      </Menu>
    </div>
    <div class="tablet">
      <Menu :theme="theme3" :active-name="CurSiderMenu" @on-select="ChangeSiderMenu2">
          <MenuGroup title="">
               <MenuItem name="首页" class="marginB_20">
                  <Icon size="24" type="document-text"></Icon>
                  <p>首页</p>
              </MenuItem>
              <MenuItem name="物联网场景应用" class="marginB_20">
                  <Icon size="24" type="document-text"></Icon>
                  <p>物联网场景应用</p>
              </MenuItem>
              <MenuItem name="产品与服务" class="marginB_20">
                  <Icon size="24" type="document-text"></Icon>
                  <p>产品与服务</p>
                  
              </MenuItem>
              <MenuItem name="公司" class="marginB_20">
                  <Icon size="24" type="document-text"></Icon>
                  <p>公司</p>
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
        this.$store.state.CurSiderMenu = Menu
        this.$router.push({name:Menu})
        this.ToggleSider()
      },
      ToggleSider (flag) {
          this.$store.state.open = !this.$store.state.open
      },
     

    }
  }
</script>
<style lang="scss">
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
  background-image: url('http://139.196.232.21/images/logo.png')
}
.ivu-menu-light{
  width: 150px !important;
}
</style>
