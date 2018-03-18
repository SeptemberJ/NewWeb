<template>
    <div class="Environmental">
        <div class="TextCenter">
            <h2 class="marginTB_20">环境监测数据中心及决策分析平台</h2>
            <p>系统以改善生态环境质量为核心，应用全覆盖、一站式的管理理念，打造集环境监测门户、环境监测实验室管理系统（LIMS）、环境监测数据中心、环境质量数据发布、行政办公等于一体化的综合信息解决方案。利用信息化手段助推环境监测业务处理模式转型，实现实验室管理信息化、监测数据分析智能化、日常办公自动化，提升全站监测管理水平及科学研究数据。</p>
            <div class="TextCenter SingleImg marginTB_40">
                <img src="static/img/Icon/SmartHox_ApplicationScene_icon16.png">
            </div>
        </div>
        <div class="marginTB_40">
            <h2>系统特点</h2>
            <div class="marginTB_20" v-for="(Characteristic,Idx) in CharacteristicInfo">
                <h3 class="marginTB_10">{{Characteristic.title}}</h3>
                <p>{{Characteristic.content}}</p>
            </div>
        </div>
        <div class="marginTB_40">
            <h2>系统功能</h2>
            <div class="TextCenter SingleImg marginTB_40">
                <img src="static/img/Icon/SmartHox_ApplicationScene_icon17.png">
            </div>
        </div>
    </div>
</template>
<script>

  export default{
    data: function () {
      return {
        CharacteristicInfo:[
            {'title':'区域环境全面可见，辅助环境决策','content':'基于GIS全面展示区域环境质量的状况和变化，从宏观视角分析地表水、饮用水、环境空气、环境噪声区域概况与变化趋势，按照业务线条深入挖掘、逐层下钻，导向型分析情况，溯源问题。通过系统建设，体系化、组织化利用环境质量数据，发挥监测数据价值辅助领导决策。'},
            {'title':'报告报表一键即得，提升工作效能','content':'通过系统后台封装大量技术手段，前台操作各种模式的报表、报告只需一键生成。通过自动化并且极易理解的方式，将常规性报表编制、常规性报表编制、临时性报表计算需求，简化到一、二个操作步骤就能完成，大大提升工作人员的工作效能。'},
            {'title':'评价结果自动输出，规范专业要求','content':'通过系统将以往人工处理的各类监测数据算法、评价指标，形成通用的、可操作的程序，将记忆在个人脑子里的，保存在电脑EXCEL中的公式、参评要求、有效性要求、修约规则整合在一起，为自动化出报告报表提供算法基础，并且将已有经验传承下去。'},
            {'title':'监测数据质量可控，减轻工作压力','content':'系统内置、并且可灵活调整各种校验规则。在收集监测数据过程中，通过系统自动判定数据质量，对于异常情况及时提示，辅助人工审核工作，让数据质量控制工作更轻松。'}
        ]
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
.Environmental{
    margin: 40px 20px;
    .SingleImg img{
        max-width: 100%;
    }
    p{
        text-align: left;
    }
}
</style>
