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
      <div class="content2-text1">两会提议：自由职业者要纳入正式社会职业体系？</div>
      <div class="content2-text2">2019.08.07</div>
      <div class="content2-text3">
        互联网时代进一步迈向人工智能时代，人人都是自媒体，服务产业，共享经济成为新潮流，自由职业在兴起，而高额的劳务报酬所得税，却成为自由职业者迈不过去的一道坎。
        <br />
十三届全国人大二次会议上，2019政府工作报告提出，要“加强对灵活就业、新就业形态的支持”。对于这一点，有人大代表提出《关于关注自由职业者社会保障、完善社会治理的建议》，希望国家出台相关政策支持和保障自由职业者发展。
      </div>
      <img class="content2-img" src="../../assets/imgs/hd-item2.png" alt />
      <div class="content2-text4">
        《建议》中提出了三点具体建议：
        <br />1、承认和提升自由职业者的社会定位，将自由职业者纳入正式的社会职业体系和就业统计中。
        <br />2、完善自由职业者的社会保障制度，实现自由职业者能够异地参保、便捷参保，消灭社会福利真空。
        <br />3、建议完善自由职业者的税务政策，降低自由职业者的税负等。
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
