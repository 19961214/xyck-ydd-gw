<template>
  <div class="wrap">
    <HeaderTop></HeaderTop>
    <div class="content1">
      <img class="content-img" src="../../assets/imgs/index1.png" alt />
      <div class="content1-text1">
        <span>用科技打造</span>
        <span>更专业的人财税一体化商业服务</span>
      </div>
      <div class="content1-text2">
        <div class="content1-text2-item">
          <img src="../../assets/imgs/dian.png" alt />
          <span>佣 金 结 算</span>
        </div>
        <div class="content1-text2-item">
          <img src="../../assets/imgs/dian.png" alt />
          <span>税 收 优 惠</span>
        </div>
        <div class="content1-text2-item">
          <img src="../../assets/imgs/dian.png" alt />
          <span>人 力 资 源</span>
        </div>
        <div class="content1-text2-item">
          <img src="../../assets/imgs/dian.png" alt />
          <span>产 业 运 营</span>
        </div>
      </div>
      <div class="content1-btn">申请合作</div>
    </div>
    <div class="content2">
      <div class="content2-title">掌税通</div>
      <div class="content2-text1">SaaS服务平台，专注于“互联网+税收优化”。</div>
      <div class="content2-text2">
        解决企业服务端与自由职业者之间的佣金结算发放、代征
        收等服务。
      </div>
      <img class="content2-img" src="../../assets/imgs/zhangshuitong.png" alt />
    </div>
    <div class="content2">
      <div class="content2-title">掌钱进</div>
      <div class="content2-text1">为中高收入自由职业者、创客、合伙人提供专属</div>
      <div class="content2-text2">
        定制的个人税务筹划方案，综合成本可降至0.5%-6.45%，
        实现客户税负最小化、收益最大化。
      </div>
      <img class="content2-img" src="../../assets/imgs/zhangqianjin.png" alt />
    </div>
    <div class="content3s">
      <div class="content3-title">云生态网络—全方位服务</div>
    </div>
    <van-swipe :autoplay="3000" indicator-color="#14ABFD">
      <van-swipe-item class="content3">
        <div class="content3-item-wrap">
          <div class="content3-item-title">掌掌财云端管理系统</div>
          <div class="content3-item">
            <div class="content3-item-img-wrap">
              <img class="content3-item-img" src="../../assets/imgs/zzc.png" alt />
            </div>

            <div class="content3-item-text">
              <div class="content3-item-text1">一站式佣金结算、发票开具、个税申报管理系统</div>
              <div class="content3-item-text1">
                <div class="quan"></div>提供云端应用技术，7X24 贴心服务
              </div>
              <div class="content3-item-text1">
                <div class="quan"></div>专业运营管理团队、技术研发团队
              </div>
              <div class="content3-item-text1">
                <div class="quan"></div>打造人财税一体化云生态网络
              </div>
            </div>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item class="content3">
        <div class="content3-item-wrap">
          <div class="content3-item-title">掌掌财小程序</div>
          <div class="content3-item">
            <div class="content3-item-img-wrap">
              <img class="content3-item-imgs" src="../../assets/imgs/xcx.png" alt />
            </div>

            <div class="content3-item-text">
              <!-- <div class="content3-item-text1">一站式佣金结算、发票开具、个税申报管理系统</div> -->
              <div class="content3-item-text1">轻量级应用，无需登录APP也可一步</div>
              <div class="content3-item-text1">实现电子合同签约</div>
              <div class="content3-item-text1">收款记录实时查询，便捷高效</div>
            </div>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item class="content3">
        <div class="content3-item-wrap">
          <div class="content3-item-title">掌掌财APP</div>
          <div class="content3-item">
            <div class="content3-item-img-wrap">
              <img class="content3-item-imgs" src="../../assets/imgs/app.png" alt />
            </div>

            <div class="content3-item-text">
              <div class="content3-item-text1">自由职业者APP一键签约，一键收款，</div>
              <div class="content3-item-text1">一键理财</div>
              <div class="content3-item-text1">企业服务端APP一键结算，一键打款，</div>
              <div class="content3-item-text1">一键开票</div>
            </div>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
    <div class="content3-bottom"></div>
    <div class="content4">
      <div class="content4-title">全国数十家税优地资源</div>
      <div class="content4-title">一站式代理服务，四大税务服务保障</div>
      <div class="content4-item-wrap">
        <div class="content4-item">
          <img class="content4-item-img" src="../../assets/imgs/item1.png" alt />
          <div class="content4-item-text">资深团队 税法专家</div>
        </div>
        <div class="content4-item">
          <img class="content4-item-img" src="../../assets/imgs/item2.png" alt />
          <div class="content4-item-text">税优扶持 增加收入</div>
        </div>
        <div class="content4-item content4-items">
          <img class="content4-item-img" src="../../assets/imgs/item3.png" alt />
          <div class="content4-item-text">安全合法 合规便捷</div>
        </div>
        <div class="content4-item content4-items">
          <img class="content4-item-img" src="../../assets/imgs/item4.png" alt />
          <div class="content4-item-text">一站式税筹 高效落地</div>
        </div>
      </div>
    </div>
    <div class="content5">
      <div class="content5-title">我们的服务</div>
      <div class="content5-item-wrap">
        <div class="content5-item-title">
          <div class="content5-item-title1">企业服务</div>
          <div class="content5-item-title2">掌税通</div>
        </div>
        <div
          class="content5-item-text"
        >专业企业财税一站式代理服务，多种税优方案，与税优地政府、委托代征机构深度合作，采取最佳税收模式，有效降低企业成本，企业将代发给自然人的款项及税金打款给掌掌财商户服务平台，平台收款后开具发票给企业，代发款项给自然人，并为自然人到税务机关汇总申报税费并开具完税凭证。</div>
        <div class="content5-item-btn">获取免费方案</div>
      </div>

      <div class="content5-item-wrap content5-item-wrap2">
        <div class="content5-item-title">
          <div class="content5-item-title1">个人服务</div>
          <div class="content5-item-title2 content5-item-title2s">掌钱进</div>
        </div>
        <div
          class="content5-item-text"
        >为客户在设立个体工商户企业或个人工作室，并为其提供财税一站式代理服务，帮助客户合法获得免缴企业所得税资格并申请个税核定，从而为客户实现税负最低化，收益最大化。主要适用于年收入较高较稳定的自由职业者、创客、合伙人。</div>
        <div class="content5-item-btn content5-item-btns">获取免费方案</div>
      </div>
    </div>
    <div class="content6">
      <div class="content6-title">合作方式</div>
      <div class="content6-img-wrap">
        <img class="content6-img" src="../../assets/imgs/fs1.png" alt />
        <img class="content6-img" src="../../assets/imgs/fs2.png" alt />
        <img class="content6-img" src="../../assets/imgs/fs3.png" alt />
        <img class="content6-img" src="../../assets/imgs/fs4.png" alt />
        <img class="content6-img" src="../../assets/imgs/fs5.png" alt />
      </div>
      <div class="content6-btn">申请合作</div>
    </div>
    <div class="gap"></div>
    <div class="content7">
      <div class="content7-title">合作伙伴</div>
      <div class="content7-item-wrap">
        <div class="content7-item">
          <img class="content7-item-img" src="../../assets/imgs/hb1.png" alt />
        </div>
        <div class="content7-item">
          <img class="content7-item-img2" src="../../assets/imgs/hb2.png" alt />
        </div>
        <div class="content7-item">
          <img class="content7-item-img3" src="../../assets/imgs/hb3.png" alt />
        </div>
        <div class="content7-item">
          <img class="content7-item-img4" src="../../assets/imgs/hb4.png" alt />
        </div>
        <div class="content7-item">
          <img class="content7-item-img5" src="../../assets/imgs/hb5.png" alt />
        </div>
        <div class="content7-item">
          <img class="content7-item-img6" src="../../assets/imgs/hb6.png" alt />
        </div>
        <div class="content7-item">
          <img class="content7-item-img7" src="../../assets/imgs/hb7.png" alt />
        </div>
        <div class="content7-item">
          <img class="content7-item-img8" src="../../assets/imgs/hb8.png" alt />
        </div>
        <div class="content7-item">
          <img class="content7-item-img9" src="../../assets/imgs/hb9.png" alt />
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
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
  margin-top: 100/@rem;
  .content1 {
    width: 100%;
    height: 460 / @rem;
    position: relative;
    .content-img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .content1-text1 {
      width: 538 / @rem;
      height: 94 / @rem;
      font-size: 36 / @rem;
      font-family: PingFang SC;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
      line-height: 60 / @rem;
      position: absolute;
      top: 117 / @rem;
      left: 106 / @rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .content1-text2 {
      position: absolute;
      top: 257 / @rem;
      left: 71 / @rem;
      font-size: 22 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      display: flex;
      justify-content: center;
      align-items: center;
      .content1-text2-item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 19 / @rem;
        img {
          width: 16 / @rem;
          height: 14 / @rem;
          margin-right: 9 / @rem;
        }
      }
    }
    .content1-btn {
      position: absolute;
      top: 321 / @rem;
      left: 265 / @rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 220 / @rem;
      height: 60 / @rem;
      background: rgba(21, 171, 254, 1);
      border-radius: 30 / @rem;
      font-size: 28 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }
  .content2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .content2-title {
      font-size: 32 / @rem;
      font-family: PingFang SC;
      font-weight: 600;
      color: rgba(51, 51, 51, 1);
      margin-top: 59 / @rem;
    }
    .content2-text1 {
      width: 665 / @rem;
      // padding: 0 43/@rem 0 42/@rem;
      font-size: 26 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 42 / @rem;
      margin-top: 39 / @rem;
    }
    .content2-text2 {
      width: 665 / @rem;
      // padding: 0 43/@rem 0 42/@rem;
      font-size: 26 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 42 / @rem;
    }
    .content2-img {
      width: 626 / @rem;
      height: 408 / @rem;
      margin-top: 41 / @rem;
    }
  }
  .content3s {
    width: 100%;
    height: 161 / @rem;
    background: rgba(242, 248, 253, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    .content3-title {
      font-size: 32 / @rem;
      font-family: PingFang SC;
      font-weight: 600;
      color: rgba(51, 51, 51, 1);
      margin-top: 80 / @rem;
      margin-bottom: 50 / @rem;
    }
  }
  .content3-bottom {
    width: 100%;
    height: 70 / @rem;
    background: rgba(242, 248, 253, 1);
  }
  .content3 {
    width: 100%;
    height: 400 / @rem;
    background: rgba(242, 248, 253, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    // padding-bottom: 70 / @rem;
    .content3-title {
      font-size: 32 / @rem;
      font-family: PingFang SC;
      font-weight: 600;
      color: rgba(51, 51, 51, 1);
      margin-top: 80 / @rem;
      margin-bottom: 50 / @rem;
    }
    .content3-item-wrap {
      width: 690 / @rem;
      height: 400 / @rem;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 / @rem 0 / @rem 20 / @rem 0 / @rem rgba(51, 51, 51, 0.08);
      border-radius: 4 / @rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      .content3-item-title {
        font-size: 28 / @rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        // line-height: 90 / @rem;
        margin-top: 39 / @rem;
        margin-bottom: 37 / @rem;
      }
      .content3-item {
        width: 690 / @rem;
        display: flex;
        justify-content: center;
        .content3-item-img-wrap {
          width: 200 / @rem;
          height: 200 / @rem;
          display: flex;
          justify-content: center;
          align-items: center;
          .content3-item-img {
            width: 200 / @rem;
            height: 200 / @rem;
          }
          .content3-item-imgs {
            width: 78 / @rem;
            height: 142 / @rem;
          }
        }

        .content3-item-text {
          width: 425 / @rem;
          height: 190 / @rem;
          margin-left: 35 / @rem;
          font-size: 22 / @rem;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 42 / @rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .content3-item-text1 {
            width: 425 / @rem;
            display: flex;
            align-items: center;
            .quan {
              width: 16 / @rem;
              height: 16 / @rem;
              border: 3 / @rem solid rgba(21, 171, 254, 1);
              border-radius: 50%;
              margin-right: 10 / @rem;
            }
          }
        }
      }
    }
  }
  .content4 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50 / @rem;
    .content4-title {
      font-size: 32 / @rem;
      font-family: PingFang SC;
      font-weight: 600;
      color: rgba(51, 51, 51, 1);
      margin-top: 10 / @rem;
    }
    .content4-item-wrap {
      width: 100%;
      margin-top: 37 / @rem;
      overflow: hidden;
      .content4-items {
        margin-bottom: 50 / @rem;
      }
      .content4-item {
        width: 300 / @rem;
        height: 260 / @rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 / @rem 0 / @rem 20 / @rem 0 / @rem rgba(51, 51, 51, 0.1),
          0 / @rem 0 / @rem 20 / @rem 0 / @rem rgba(21, 171, 254, 0.1);
        border-radius: 4px;
        float: left;
        margin-left: 50 / @rem;
        margin-top: 50 / @rem;

        .content4-item-img {
          width: 300 / @rem;
          height: 180 / @rem;
        }
        .content4-item-text {
          width: 300 / @rem;
          height: 80 / @rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24 / @rem;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 90 / @rem;
        }
      }
    }
  }
  .content5 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(242, 248, 253, 1);
    padding-bottom: 70 / @rem;
    .content5-title {
      width: 100%;
      height: 160 / @rem;
      font-size: 32 / @rem;
      font-family: PingFang SC;
      font-weight: 600;
      color: rgba(51, 51, 51, 1);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .content5-item-wrap2 {
      margin-top: 50 / @rem;
    }
    .content5-item-wrap {
      width: 690 / @rem;
      height: 480 / @rem;
      background: rgba(255, 255, 255, 1);
      border: 1 / @rem solid rgba(238, 238, 238, 1);
      border-radius: 4 / @rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .content5-item-title {
        width: 630 / @rem;
        height: 90 / @rem;
        display: flex;
        align-items: center;
        border-bottom: 1 / @rem solid #eee;
        .content5-item-title1 {
          font-size: 28 / @rem;
          font-family: PingFang SC;
          font-weight: 600;
          color: rgba(51, 51, 51, 1);
        }
        .content5-item-title2 {
          width: 100 / @rem;
          height: 30 / @rem;
          background: rgba(21, 171, 254, 1);
          border-radius: 15 / @rem;
          font-size: 20 / @rem;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 15 / @rem;
        }
        .content5-item-title2s {
          background: rgba(251, 160, 19, 1);
        }
      }
      .content5-item-text {
        width: 613 / @rem;
        height: 175 / @rem;
        font-size: 24px / @rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 38 / @rem;
        margin-top: 38 / @rem;
      }
      .content5-item-btn {
        width: 260 / @rem;
        height: 60 / @rem;
        background: rgba(21, 171, 254, 1);
        border-radius: 30 / @rem;
        font-size: 26 / @rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 38 / @rem;
      }
      .content5-item-btns {
        background: rgba(251, 160, 19, 1);
        margin-top: 76 / @rem;
      }
    }
  }
  .content6 {
    width: 100%;
    height: 476 / @rem;
    background: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    .content6-title {
      width: 100%;
      height: 118 / @rem;
      font-size: 32 / @rem;
      font-family: PingFang SC;
      font-weight: 600;
      color: rgba(51, 51, 51, 1);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .content6-img-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      .content6-img {
        width: 138 / @rem;
        height: 200 / @rem;
      }
    }
    .content6-btn {
      width: 260 / @rem;
      height: 60 / @rem;
      background: rgba(21, 171, 254, 1);
      border-radius: 30 / @rem;
      font-size: 26 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 28 / @rem;
    }
  }
  .gap {
    width: 100%;
    height: 20 / @rem;
    background: rgba(250, 250, 250, 1);
  }
  .content7 {
    width: 100%;
    height: 502 / @rem;
    background: rgba(255, 255, 255, 1);
    padding-bottom: 82/@rem;
    .content7-title {
      width: 100%;
      height: 140 / @rem;
      font-size: 32 / @rem;
      font-family: PingFang SC;
      font-weight: 600;
      color: rgba(51, 51, 51, 1);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .content7-item-wrap {
      width: 100%;
      overflow: hidden;
      .content7-item {
        width: 210 / @rem;
        height: 80 / @rem;
        background: rgba(255, 255, 255, 1);
        border: 1 / @rem solid rgba(238, 238, 238, 1);
        border-radius: 6 / @rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 30/@rem;
        margin-top: 30/@rem;
        float: left;
        .content7-item-img {
          width: 124 / @rem;
          height: 64 / @rem;
        }
        .content7-item-img2{
          width: 151 / @rem;
          height: 62 / @rem;
        }
        .content7-item-img3{
          width: 134 / @rem;
          height: 51 / @rem;
        }
        .content7-item-img4{
          width: 159 / @rem;
          height: 39 / @rem;
        }
        .content7-item-img5{
          width: 120 / @rem;
          height: 66 / @rem;
        }
        .content7-item-img6{
          width: 126 / @rem;
          height: 43 / @rem;
        }
        .content7-item-img7{
          width: 126 / @rem;
          height: 50 / @rem;
        }
        .content7-item-img8{
          width: 137 / @rem;
          height: 46 / @rem;
        }
        .content7-item-img9{
          width: 151 / @rem;
          height: 54 / @rem;
        }
      }
    }
  }
}
</style>
