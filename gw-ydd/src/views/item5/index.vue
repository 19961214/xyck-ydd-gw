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
      <div class="content2-text1">重磅利好第二弹——小微企业标准将放宽！</div>
      <div class="content2-text2">2019.09.10</div>
      <div class="content2-text3">
        在今天举行的国新办的新闻发布会上，财政部部长助理许宏才介绍，要加大减税降费力度和加大支出力度。许助理特别强调要放宽小型微利企业标准并加大优惠力度，放宽小型微利企业标准就是放宽认定条件，放宽后标准为，企业资产总额5000万元以下、从业人数300人以下、应纳税所得额300万元以下。
        企业所得税法实施条例第九十二条，规定：企业所得税法第二十八条第一款所称符合条件的小型微利企业，是指从事国家非限制和禁止行业，并符合下列条件的企业：（一）工业企业，年度应纳税所得额不超过30万元，从业人数不超过100人，资产总额不超过3000万元；（二）其他企业，年度应纳税所得额不超过30万元，从业人数不超过80人，资产总额不超过1000万元。
        <br />2018年已经放宽到100万元。但是对资产总额和从业人数这两项指标一直沿用实施条例的规定没有放宽。2019年1月9日的国务院常务会议已经明确提出要放宽标准。从许助理的表述来看，这一次资产总额、从业人数标准也有了很大调高。
      </div>
      <img class="content2-img" src="../../assets/imgs/hd-item5.png" alt />
      <div class="content2-text4">
        2019年1月2日，央行决定扩大定向降准优惠政策的覆盖面：从2019年起，将普惠金融定向降准小型和微型企业贷款考核标准由“单户授信小于500万元”调整为“单户授信小于1000万元”。
        <br />这一变化，将使普惠金融定向降准的优惠政策覆盖全部大中型商业银行、约90%的城商行和非县域农商行，释放大约4500亿元的流动性。
        <br />核心就是一点，引导金融机构更好地满足小微企业的贷款需求，使更多的小微企业受益。
        <br />未来，央行还将继续运用各种政策工具，从债券、信贷、股权等方面引导金融机构加大对民营企业小微企业支持力度。民营企业和小微企业融资难融资贵问题也将得到进一步缓解。
        <br />2019年带来的可真是真金白银的减税好消息。1月9日，国务院常务会宣布推出一批针对小微企业的普惠性减税措施。小爱算了一笔账，一下子算出了“大礼包”的含金量： “这次小微企业的减税降费，涉及1798万家企业，占全国纳税企业总数的95%以上，里面98%是民营企业，也就是说，我国大部分的企业主体都能够通过这个政策受惠。” 2019年，更多的减税降费举措在路上。
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
      location.href = "https://www.xyck.com/item5";
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
