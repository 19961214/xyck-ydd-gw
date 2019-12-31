<template>
  <div class="Footer">
    <div class="footer-top">
      <img class="footer-top-img" src="../assets/imgs/footer11.png" alt />
      <div class="footer-top-text1">关注厦云创科</div>
      <div class="footer-top-text2">为您提供发薪报税一站式专属定制服务</div>
      <div class="footer-top-btn">打开小程序</div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-text1">服务电话：0571-87299551 拷贝</div>
      <div class="footer-bottom-text2">
        <img class="footer-bottom-text2-img" src="../assets/imgs/footer2.png" alt />
        <div class="footer-bottom-text2-text">杭州厦云创科信息技术有限公司</div>
      </div>
      <div class="footer-bottom-text3">2019 - 粤ICP备17126097号-2</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped lang="less">
@rem: 46.875rem;
.Footer {
  width: 100%;
  .footer-top {
    width: 100%;
    height: 260 / @rem;
    position: relative;
    .footer-top-img {
      width: 100%;
      height: 260 / @rem;
      position: absolute;
      top: 0;
      left: 0;
    }
    .footer-top-text1 {
      position: absolute;
      top: 39 / @rem;
      left: 279 / @rem;
      font-size: 32 / @rem;
      font-family: PingFang SC;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
    }
    .footer-top-text2 {
      position: absolute;
      top: 99 / @rem;
      left: 151 / @rem;
      font-size: 26 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
    .footer-top-btn {
      position: absolute;
      top: 164 / @rem;
      left: 276 / @rem;
      width: 200 / @rem;
      height: 50 / @rem;
      background: rgba(251, 160, 19, 1);
      border-radius: 25 / @rem;
      font-size: 22 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .footer-bottom {
    width: 100%;
    height: 279 / @rem;
    background: rgba(34, 58, 83, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    .footer-bottom-text1 {
      width: 400 / @rem;
      height: 60 / @rem;
      border: 1 / @rem solid rgba(150, 168, 187, 1);
      border-radius: 30 / @rem;
      font-size: 24 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 49 / @rem;
    }
    .footer-bottom-text2 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 43 / @rem;
      .footer-bottom-text2-img {
        width: 115 / @rem;
        height: 35 / @rem;
        margin-right: 20/@rem;
      }
      .footer-bottom-text2-text {
        font-size: 24 / @rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        border-left: 1/@rem solid #96A8BB;
        padding-left: 20/@rem;
      }
    }
    .footer-bottom-text3 {
      font-size: 20 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(97, 126, 154, 1);
      margin-top: 41 / @rem;
    }
  }
}
</style>
