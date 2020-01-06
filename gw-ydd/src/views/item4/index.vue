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
      <div class="content2-text1">2018小微企业认定标准 小微企业优惠政策解读</div>
      <div class="content2-text2">2019.09.20</div>
      <div class="content2-text3">
        近年来，国家针对小微企业推出了不少扶持优惠政策，创业者大多会选择创立小微企业。下面，厦云创科将为大家讲解小微企业认定标准及小微企业的优惠政策。
        <br />小微企业认定标准
        <br />据了解，小微企业的概念是由经济学家郎咸平提出的，大体是指小型企业、微型企业、个体工商户、家庭作坊等企业。目前，我国企业包括大型企业、中型企业、小型企业和微型企业等多个类别。不同类型企业划分标准各异，现阶段小微企业的划分标准主要有以下三点：
        <br />1、在资产总额方面，工业企业不超过3000万元，其他企业不超过1000万元；
        <br />2、在从业人数方面，工业企业不超过100人，其他企业不超过80人；
        <br />3、在税收指标方面，年度应纳税所得额不超过30万元。
      </div>
      <img class="content2-img" src="../../assets/imgs/hd-item3.png" alt />
      <div class="content2-text4">
        以上是通过资产、从业人数、税收指标三个方面来认定小微企业，如果你还想了解如何通过行业区分来认定小微企业。更值得关注的是，国家针对小微企业推出了系列税收优惠政策。在增值税、企业所得税、印花税等方面，小微企业可以享受很大的优惠。
        <br />小微企业优惠政策
        <br />增值税优惠政策：
        <br />2017年12月31日—2020年12月31日，月销售额不超过3万元的小规模纳税人，可享受小微企业暂免征收增值税优惠。2017年12月1日—2019年12月31日，对小型企业、微型企业发放小额贷款取得的利息收入，免收增值税。
        <br />企业所得税优惠政策：
        <br />2017年1月1日—2019年12月31日，年应纳税所得额不超过50万元，所得额按50%计入应纳税所得额，同时按20%征收企业所得税。
        <br />印花税优惠政策：
        <br />2018年1月1日-2020年12月31日，对小微企业签订的借款合同免征印花税。
        <br />如还想了解小型微利企业的优惠政策。
        <br />总体来看，小微企业成本低优惠大，对于普通创业者来说是个不错的创业选择。以上就是小微企业认定标准以及税收优惠政策相关内容，希望能给广大创业者提供帮助。
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
  mounted() {}
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
    padding-bottom: 110 / @rem;
    .content2-text1 {
      width: 684 / @rem;
      font-size: 32 / @rem;
      font-family: PingFang SC;
      font-weight: 600;
      color: rgba(51, 51, 51, 1);
      line-height: 60 / @rem;
      margin-top: 51 / @rem;
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
      margin-top: 28 / @rem;
    }
    .content2-text3 {
      width: 684 / @rem;
      font-size: 26 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 60 / @rem;
      margin-top: 47 / @rem;
    }
    .content2-text4 {
      width: 684 / @rem;
      font-size: 26 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 60 / @rem;
      margin-top: 47 / @rem;
    }
    .content2-img {
      width: 512 / @rem;
      height: 416 / @rem;
      margin-top: 66 / @rem;
    }
  }
}
</style>
