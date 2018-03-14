<template>
  <Menu :theme="theme3" active-name="1">
      <MenuGroup title="">
          <MenuItem name="1" class="marginB_20">
              <Icon size="24" type="document-text"></Icon>
              <h4>物联网场景应用</h4>
          </MenuItem>
          <MenuItem name="2" class="marginB_20">
              <Icon size="24" type="document-text"></Icon>
              <h4>产品与服务</h4>
              
          </MenuItem>
          <MenuItem name="3" class="marginB_20">
              <Icon size="24" type="document-text"></Icon>
              <h4>公司</h4>
              
          </MenuItem>
      </MenuGroup>
  </Menu>
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
.ivu-menu-item-group-title{
  background-repeat: no-repeat;
  background-position-x: center;
  background-image: url('http://139.196.232.21/images/logo.png')
}
.ivu-menu-light{
  width: 150px !important;
}
</style>
