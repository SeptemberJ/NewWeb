<template>
    <div class="HeadBlock">
        <Row type="flex" justify="space-between" class="code-row-bg">
            <Col span="4">
                <span class="CursorPointer" @click="ToggleSider()"><Icon  style="margin-top: 10px;margin-left: 10px;" size="36" color="#fff" type="navicon"></Icon></span>
            </Col>
            <Col class="desktop  TextRight  LineHeight" span="10" offset="10">
                <Button type="text">Hox云平台登入</Button>
                <Button type="text">热线电话:  400 880 2248</Button>
            </Col>
            <Col class="tablet TextRight" span="4" offset="16">
                <Dropdown trigger="click" style="margin-left: 20px;text-align: left;" placement="bottom-end">
                    <a href="javascript:void(0)">
                        <Icon class="Transform_R_90" size="30" color="#fff" type="more"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>Hox云平台登入</DropdownItem>
                        <DropdownItem>热线电话:400 880 2248</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

               
                
            </Col>
        </Row>
        
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
        ShowMenu(){

        }
     

    }
  }
</script>
<style lang="scss">
.HeadBlock{
    height: 52px;
    padding: 0 5px;
    background-color: #000;
    /*
    background-color: #474a4f;
    */
    .center-left{
        float: left;
    }
    .Transform_R_90{
        transform:rotate(-90deg);
        -ms-transform:rotate(-90deg);   /* IE 9 */
        -moz-transform:rotate(-90deg);  /* Firefox */
        -webkit-transform:rotate(-90deg); /* Safari 和 Chrome */
        -o-transform:rotate(-90deg);
      }
    .desktop{
      float: right;
      display: none;
    }
    .tablet{
      display: inline-block;
    }
    @media (min-width: 769px) {
      .desktop{
        float: right;
        display: inline-block;
      }
      .tablet{
        display: none !important;
      }

    }
}
</style>
