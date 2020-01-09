<template>
  <div class="Footer">
    <div class="footer-top">
      <img class="footer-top-img" src="../assets/imgs/footer11.png" alt />
      <div class="footer-top-text1">关注厦云创科</div>
      <div class="footer-top-text2">为您提供发薪报税一站式专属定制服务</div>
      <div class="footer-top-btn" @click="showPopup">打开小程序</div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-text1">服务电话：0571-87299551</div>
      <div class="footer-bottom-text2">
        <img class="footer-bottom-text2-img" src="../assets/imgs/footer2.png" alt />
        <div class="footer-bottom-text2-text">杭州厦云创科信息技术有限公司</div>
      </div>
      <div class="footer-bottom-text3">2019 - 粤ICP备17126097号-2</div>
    </div>
    <van-popup v-model="show">
      <div class="popup3">
        <img class="popup3-img" src="../assets/imgs/code.jpg" alt />
        <div class="popup3-text1">掌掌财小程序</div>
        <div class="popup3-text2">扫一扫或长按保存二维码进入掌掌财小程序</div>
        <img class="popup3-img2" @click="showPopup" src="../assets/imgs/xxx.png" alt />
      </div>
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Popup } from "vant";

Vue.use(Popup);
export default {
  name: "Footer",
  data() {
    return {
      show: false
    };
  },
  methods: {
    showPopup() {
      this.show = !this.show;
    }
  },
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
      border: 2 / @rem solid rgba(150, 168, 187, 1);
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
        margin-right: 20 / @rem;
      }
      .footer-bottom-text2-text {
        font-size: 24 / @rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        border-left: 1 / @rem solid #96a8bb;
        padding-left: 20 / @rem;
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
  .popup3 {
    width: 690 / @rem;
    height: 700 / @rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .popup3-img {
      // width: 429 / @rem;
      // height: 429 / @rem;
      margin-top: 114/@rem;
      width: 363 / @rem;
      height: 363 / @rem;
    }
    .popup3-text1 {
      font-size: 32 / @rem;
      font-family: PingFang SC;
      font-weight: 600;
      color: #333;
      margin-top: 40/@rem;
    }
    .popup3-text2 {
      font-size: 26 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #666666;
      margin-top: 26/@rem;
    }
    .popup3-img2{
      width: 30 / @rem;
      height: 30 / @rem;
      position: absolute;
      top: 30/@rem;
      right: 30/@rem;
    }
  }
}
</style>
