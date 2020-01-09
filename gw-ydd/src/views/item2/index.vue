<template>
  <div class="wrap">
    <HeaderTop></HeaderTop>
    <div class="content1">
      <img class="content-img" src="../../assets/imgs/hd.png" alt />
      <div class="content1-text">
        <span class="content1-text1">活动资讯</span>
        <span class="content1-text2">Activity information</span>
      </div>
    </div>
    <div class="content2">
      <div class="content2-text1">
        明年1月1日社保入税 这10大变化财务要注意
      </div>
      <div class="content2-text2">2019.06.05</div>
      <div class="content2-text3">
        国地税合并，税局征收社保，国家的这一系列措施，你是否都弄明白了？明年1月1日社保入税，厦云创科小编提醒各位财务人员，下面这10大变化要注意。
      </div>
      <img class="content2-img" src="../../assets/imgs/hd-item6.png" alt />
      <div class="content2-text4">
        1、社保明年划归税局征收，企业员工离职率、失业率会加大，公司辞退员工的现象将会有一定的增加！员工对失业金的政策关注度将会大大加大！<br>
2、社保明年划归税局征收，企业在招聘人员的时候将会更挑剔和苛刻！对人员在劳动效率和价值创造方面的要求会更高！<br>
3、社保明年划归税局征收，自由职业者越来越多，个体户、小规模公司、个人独资企业等小微企业将会有一定的增加！<br>
4、社保明年划归税局征收，企业用工模式不再单一，传统的全日制合同制用工方式将被突破，部分企业结合自身情况将会转向非全日制用工模式！<br>
5、社保明年划归税局征收，企业用工对象将会越来越广泛和灵活，兼职员工会越来越多，企业聘用退休人员、企业招募已经有社保的人员将会成为常态！<br>
6、社保明年划归税局征收，AI技术将盛行，人工智能越来越普遍，电子人来到了我们的身边！<br>
7、社保明年划归税局征收，人力资源外包服务将更受企业爱戴，企业越来越呈现出小微化、全国化、非核心业务外包化的趋势！<br>
8、社保明年划归税局征收，劳动报酬支付的方式将会也发生一定变化，实物形式、期权激励、应该正常报销的费用直接报销不再纳入工资表、内部合伙人分红的模式逐渐来临！<br>
9、社保明年划归税局征收，企业人工支出将会越来越规范合法，因为不合规的成本对企业来讲已经太高了，企业员工的个税、工资、社保将越发透明！<br>
10、社保明年划归税局征收，伴随着政策变化越发日新月异，企业越来越重视专业型、政策型、实用型、技能型、管理型、价值型、业务型的复合型财务人员，传统会计逐渐被淘汰出局！
以上就是关于明年1月1日社保入税的10大变化，仅供参考。
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop.vue";
import Footer from "../../components/Footer.vue";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    HeaderTop,
    Footer
  },
  methods: {},
  mounted() {
    console.log(999)
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      
      console.log(222);
      
    } else {
      console.log(333);
      location.href = "https://www.xyck.com/item2";
    }
  }
};
</script>

<style scoped lang="less">
@rem: 46.875rem;
.wrap {
  width: 100%;
  margin-top: 100 / @rem;
  .content1 {
    width: 100%;
    height: 400 / @rem;
    position: relative;
    .content-img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .content1-text {
      .content1-text1 {
        position: absolute;
        top: 171 / @rem;
        left: 303 / @rem;
        font-size: 36 / @rem;
        font-family: PingFang SC;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 48 / @rem;
      }
      .content1-text2 {
        position: absolute;
        top: 235 / @rem;
        left: 220 / @rem;
        font-size: 32 / @rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 60 / @rem;
      }
    }
  }
  .content2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 110/@rem;
    .content2-text1 {
      width: 684 / @rem;
      font-size: 32 / @rem;
      font-family: PingFang SC;
      font-weight: 600;
      color: rgba(51, 51, 51, 1);
      line-height: 60 / @rem;
      margin-top: 51/@rem;
    }
    .content2-text2 {
      width: 684 / @rem;
      display: flex;
      justify-content: flex-end;
      font-size: 24 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 22 / @rem;
      margin-top: 28/@rem;
    }
    .content2-text3 {
      width: 684 / @rem;
      font-size: 26 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 60 / @rem;
      margin-top: 47/@rem;
    }
    .content2-text4 {
      width: 684 / @rem;
      font-size: 26 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 60 / @rem;
      margin-top: 47/@rem;
    }
    .content2-img {
      width: 512/@rem;
      height: 416/@rem;
      margin-top: 66/@rem;
    }
  }
}
</style>
