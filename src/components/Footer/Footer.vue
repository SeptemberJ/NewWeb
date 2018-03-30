<template>
  <div class="foot">
    <Row type="flex" justify="space-between" class="code-row-bg">
      <Col class="marginB_20"  :xs="24" :sm="4" :md="4" :lg="{ span: 3, offset: 1 }">
        <h4>关于我们</h4>
        <p>公司简介</p>
        <p>Hox新闻</p>
      </Col>
      <Col class="marginB_20"  :xs="24" :sm="16" :md="16" :lg="{ span: 15, offset: 1 }">
        <h4>联系方式</h4>
        <p>研发总部：江苏省常熟高新技术产业开发区汇金三路东东南汇1号楼</p>
        <p>上海公司：上海市普陀区中江路879号天地软件园12号楼4F</p>
        <p>杭州公司：杭州西湖区余杭塘路866号浙大紫金港东五教学区光及电磁波研究中心G106</p>
        <p>广州公司：广州大学城华南师范大学理五栋 (大学城西五路)</p>
        <p>电话热线：+86 400 880 4428</p>
        <p>Mail：servcie@hoxsmart.com</p>
      </Col>
      <Col class="marginB_20"  :xs="24" :sm="4" :md="4" :lg="{ span: 3, offset: 1 }">
        <h4>关注我们</h4>
          <img style="width: 90px" src="static/img/BT_weixin.png"/>
      </Col>
      <div style="clear: both;"></div>
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
.foot{
  padding: 40px 20px;
  color: #fff;
  text-align: left;
  background-color: #2c2d32;
  /*
  background-color: rgb(89,89,89);
  */
  p{
    font-size: 12px !important; 
    color: #bcbcbe;
  }
}
</style>
