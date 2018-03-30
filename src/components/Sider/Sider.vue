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
  </div>
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
  width: 100%;
  display: inline-block;
}

@media (min-width: 769px) {
  .desktop{
    display: inline-block;
  }
  .tablet{
    width: 100%;
    display: none;
  }

}
.ivu-menu-item h5{
  margin-top: 8px;
}
.ivu-menu-item-group-title{
  background-repeat: no-repeat;
  background-position-x: center;
  background-image: url('http://www.btzoon.com/SmartHox/static/img/logo.png');
  background-size: contain;
  padding: 0 5px;
}
.ivu-menu-light{
  width: 95px !important;
  background-color: #464547 !important;
}
.ivu-menu{
  color: #fff !important; 
}
.ivu-menu-dark{
  background-color: #464547 !important;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title{
  text-align: left;
  color: #fff !important;
}
</style>
