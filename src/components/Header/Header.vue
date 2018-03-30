<template>
    <div class="HeadBlock">
        <!-- PC -->
        <div class="desktop">
            <Row type="flex" justify="space-between" class="code-row-bg">
                <Col class="TextRight  LineHeight" span="24">
                    <Button type="text" style="color: #fff;" @click="ToSmartHox">Hox云平台登入</Button>
                    <Button type="text" style="color: #fff;">400 880 2248</Button>
                </Col>
            </Row>
        </div>
        <!-- Mobile -->
        <div class="tablet">
            <Row v-if="!open" type="flex" justify="space-between" class="code-row-bg">
                <Col span="4">
                    <span class="CursorPointer" @click="ToggleSider()"><Icon  style="margin-top: 10px;margin-left: 10px;" size="36" color="#fff" type="navicon"></Icon></span>
                </Col>
                <Col class="TextRight" span="4" offset="16">
                    <Dropdown trigger="click" style="margin-top:10px;margin-left: 20px;text-align: left;" placement="bottom-end"  @on-click="ClickMenu">
                        <a href="javascript:void(0)">
                            <Icon class="Transform_R_90" size="30" color="#fff" type="more"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem name="0">Hox云平台登入</DropdownItem>
                            <DropdownItem>热线电话:400 880 2248</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
            </Row>
            <Row v-if="open" type="flex" justify="end">
                <Col span="24" style="background-color: #252526;">
                    <span class="CursorPointer" @click="ToggleSider()"><Icon  style="float: right;margin: 10px" size="30" color="#fff" type="close"></Icon></span>
                </Col>
            </Row>
            <Row v-if="open" class="code-row-bg">
                <Menu theme="dark" :active-name="CurSiderMenu" @on-select="ChangeSiderMenu" style="width: 100%;background-color: #464547;">
                    <MenuItem name="首页" class="marginB_20">
                        <Icon size="22" type="social-buffer" style="margin-left: 10px;"></Icon>
                        <h5 class="InlineBlock">首页</h5>
                    </MenuItem>
                    <MenuItem name="物联网场景应用" class="marginB_20">
                        <Icon size="22" type="social-windows" style="margin-left: 10px;"></Icon>
                        <h5 class="InlineBlock">物联网场景应用</h5>
                    </MenuItem>
                    <MenuItem name="产品与服务" class="marginB_20">
                        <Icon size="22" type="ios-infinite" style="margin-left: 10px;"></Icon>
                        <h5 class="InlineBlock">产品与服务</h5>
                    </MenuItem>
                    <MenuItem name="公司" class="marginB_20">
                        <i class="F_24 fa fa-building" aria-hidden="true" style="margin-left: 10px;"></i>
                        <h5 class="InlineBlock">公司</h5>
                    </MenuItem>
                  </Menu>
            </Row>
        </div>
    </div>
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
        ToggleSider (flag) {
            this.$store.state.open = !this.$store.state.open
        },
        ToSmartHox(){
            window.open('http://220.248.107.62:8089/dist/')
        },
        ClickMenu(name){
            if(name == 0){
                this.ToSmartHox()
            }
        },
        ChangeSiderMenu(Menu){
            this.ToggleSider()
            this.$store.state.CurSiderMenu = Menu
            this.$router.push({name:Menu})
      },
     

    }
  }
</script>
<style lang="scss">
.HeadBlock{
    height: 52px;
    padding: 0px;
    background-color: #000;
    .center-left{
        float: left;
    }

    /*Mobile*/
    .desktop{
      display: none;
    }
    .tablet{
      display: inline-block;
    }

    /*PC*/
    @media (min-width: 769px) {
      .desktop{
        width: calc(100% - 95px);
        float: right;
        margin-right: 95px;
        display: inline-block;
      }
      .tablet{
        display: none !important;
      }
    }
    .Transform_R_90{
        transform:rotate(-90deg);
        -ms-transform:rotate(-90deg);   /* IE 9 */
        -moz-transform:rotate(-90deg);  /* Firefox */
        -webkit-transform:rotate(-90deg); /* Safari 和 Chrome */
        -o-transform:rotate(-90deg);
    }
}
</style>
