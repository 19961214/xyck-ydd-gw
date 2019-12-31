<template>
  <div class="wrap">
    <HeaderTop></HeaderTop>
    <div class="content1">
      <img class="content-img" src="../../assets/imgs/cp1.png" alt />
      <div class="content1-text">
        <span class="content1-text1">我们的产品</span>
        <span class="content1-text2">Our products</span>
      </div>
    </div>
    <van-tabs v-model="active" color="#15ABFE">
      <van-tab title="掌税通">
        <div id="cp-one">
          <div class="one-title">掌税通</div>
          <img class="one-img" src="../../assets/imgs/zhangshuitong2.png" alt />
          <div
            class="one-text1"
          >针对企业税负成本高、缺少进项发票、高收入个人税负压力大等高收入群体用户痛点，厦云创科提供出一套专属定制的“掌钱进”计划，为客户提供一站式税务筹划和代理服务，为客户在税优地注册个人独资企业/个人工作室，帮助客户合法获得免缴企业所得税资格并申请个税核定，从而综合成本可降至0.5%-6.45%，为客户节省最大的成本，实现最大的收益。</div>
          <div class="one-text2">
            客户在掌税通平台为自由职业者支付款项
            掌税通平台为自由职业者代缴税费
          </div>
          <div class="one-btn">申请试用</div>
          <div class="gay"></div>
          <div class="one-titles">
            <div class="one-titles-line"></div>我们的优势
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem1.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">方案严谨合规</div>
              <div class="one-card-text2">
                自由职业者平台商业模式专家+税务专家共同打造合
                法合规解决方案
              </div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem2.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">深度政府合作</div>
              <div class="one-card-text2">省级税务机关认可，指定委托代征机构</div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem3.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">流程定制化</div>
              <div class="one-card-text2">一键智能上传代发数据</div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem4.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">资金安全保障</div>
              <div class="one-card-text2">银联专属同道无缝对接</div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem5.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">最佳成本模型</div>
              <div class="one-card-text2">结构优化，有效降低支付成本</div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem6.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">多重数据加密</div>
              <div class="one-card-text2">佣金数据双节点四重加密处理</div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem7.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">安全高效零误差</div>
              <div class="one-card-text2">全流程在线操作，资金转账安全便捷</div>
            </div>
          </div>
          <div class="one-card ones-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem8.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">简化操作流程</div>
              <div class="one-card-text2">专户管理，批量代发秒到账</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="掌钱进">
        <div id="cp-one">
          <div class="one-title">掌钱进</div>
          <img class="one-img" src="../../assets/imgs/zhangqianjin2.png" alt />
          <div
            class="one-text1"
          >针对企业税负成本高、缺少进项发票、高收入个人税负压力大等高收入群体用户痛点，厦云创科提供出一套专属定制的“掌钱进”计划，为客户提供一站式税务筹划和代理服务，为客户在税优地注册个人独资企业/个人工作室，帮助客户合法获得免缴企业所得税资格并申请个税核定，从而综合成本可降至0.5%-6.45%，为客户节省最大的成本，实现最大的收益。</div>
          <!-- <div class="one-text2">
            客户在掌税通平台为自由职业者支付款项
            掌税通平台为自由职业者代缴税费
          </div>-->
          <div class="one-btn one-btns">申请试用</div>
          <div class="gay"></div>
          <div class="one-titles">
            <div class="one-titles-line"></div>我们的优势
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem1.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">方案严谨合规</div>
              <div class="one-card-text2">
                自由职业者平台商业模式专家+税务专家共同打造合
                法合规解决方案
              </div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem2.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">深度政府合作</div>
              <div class="one-card-text2">省级税务机关认可，指定委托代征机构</div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem3.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">流程定制化</div>
              <div class="one-card-text2">一键智能上传代发数据</div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem4.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">资金安全保障</div>
              <div class="one-card-text2">银联专属同道无缝对接</div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem5.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">最佳成本模型</div>
              <div class="one-card-text2">结构优化，有效降低支付成本</div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem6.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">多重数据加密</div>
              <div class="one-card-text2">佣金数据双节点四重加密处理</div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem7.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">安全高效零误差</div>
              <div class="one-card-text2">全流程在线操作，资金转账安全便捷</div>
            </div>
          </div>
          <div class="one-card ones-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem8.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">简化操作流程</div>
              <div class="one-card-text2">专户管理，批量代发秒到账</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="APP">
        <div id="cp-one">
          <div class="one-title">掌掌财APP</div>
          <img class="one-img one-imgs" src="../../assets/imgs/app2.png" alt />
          <div
            class="one-text1"
          >共享经济下自由职业者与平台客户企业进行服务合作，平台客户企业通过平台完成对自由职业者的佣金核算，并将佣金款项和税费打款给平台，平台收款后开具相应发票给客户，并将代发的佣金款项汇入自由职业者的收款账户，平台依据款项支付流水完成对自由职业者税款的代扣代缴工作。</div>
          
          <div class="one-text2s">
            自由职业者APP一键签约，一键收款，一键理财
            
          </div>
          <div class="one-text3">
            企业服务端APP一键结算，一键打款，一键开票
          </div>
          <div class="one-btn">申请试用</div>
          <div class="gay"></div>
          <div class="one-titles">
            <div class="one-titles-line"></div>我们的优势
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem1.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">方案严谨合规</div>
              <div class="one-card-text2">
                自由职业者平台商业模式专家+税务专家共同打造合
                法合规解决方案
              </div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem2.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">深度政府合作</div>
              <div class="one-card-text2">省级税务机关认可，指定委托代征机构</div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem3.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">流程定制化</div>
              <div class="one-card-text2">一键智能上传代发数据</div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem4.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">资金安全保障</div>
              <div class="one-card-text2">银联专属同道无缝对接</div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem5.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">最佳成本模型</div>
              <div class="one-card-text2">结构优化，有效降低支付成本</div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem6.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">多重数据加密</div>
              <div class="one-card-text2">佣金数据双节点四重加密处理</div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem7.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">安全高效零误差</div>
              <div class="one-card-text2">全流程在线操作，资金转账安全便捷</div>
            </div>
          </div>
          <div class="one-card ones-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem8.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">简化操作流程</div>
              <div class="one-card-text2">专户管理，批量代发秒到账</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="小程序">
        <div id="cp-one">
          <div class="one-title">掌掌财小程序</div>
          <img class="one-imgs" src="../../assets/imgs/xcx2.png" alt />
          <div
            class="one-text1"
          >掌掌财小程序是厦云创科推出的一款针对自由职业者使用的移动端应用产品，主要服务于自由职业者解决佣金收款流程复杂、纸质合同签署困难、资产记录不清晰等问题。用户可通过掌掌财小程序完成在线实名认证、电子合同签约、查询自己收款记录等服务。</div>
          <div class="ones-text2">
            轻量级应用，无需登录APP也可一步实现电子合同签约<br>
            收款记录实时查询，便捷高效
          </div>
          <div class="one-btn">打开小程序</div>
          <div class="gay"></div>
          <div class="one-titles">
            <div class="one-titles-line"></div>我们的优势
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem1.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">方案严谨合规</div>
              <div class="one-card-text2">
                自由职业者平台商业模式专家+税务专家共同打造合
                法合规解决方案
              </div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem2.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">深度政府合作</div>
              <div class="one-card-text2">省级税务机关认可，指定委托代征机构</div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem3.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">流程定制化</div>
              <div class="one-card-text2">一键智能上传代发数据</div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem4.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">资金安全保障</div>
              <div class="one-card-text2">银联专属同道无缝对接</div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem5.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">最佳成本模型</div>
              <div class="one-card-text2">结构优化，有效降低支付成本</div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem6.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">多重数据加密</div>
              <div class="one-card-text2">佣金数据双节点四重加密处理</div>
            </div>
          </div>
          <div class="one-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem7.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">安全高效零误差</div>
              <div class="one-card-text2">全流程在线操作，资金转账安全便捷</div>
            </div>
          </div>
          <div class="one-card ones-card">
            <img class="one-card-img" src="../../assets/imgs/cpitem8.png" alt />
            <div class="one-card-text">
              <div class="one-card-text1">简化操作流程</div>
              <div class="one-card-text2">专户管理，批量代发秒到账</div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab).use(Tabs);
import HeaderTop from "../../components/HeaderTop.vue";
import Footer from "../../components/Footer.vue";
export default {
  name: "",
  data() {
    return {
      active: 0
    };
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
        left: 283 / @rem;
        font-size: 36 / @rem;
        font-family: PingFang SC;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 60 / @rem;
      }
      .content1-text2 {
        position: absolute;
        top: 238 / @rem;
        left: 288 / @rem;
        font-size: 32 / @rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 60 / @rem;
      }
    }
  }
  #cp-one {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    .one-title {
      font-size: 32 / @rem;
      font-family: PingFang SC;
      font-weight: 600;
      color: rgba(51, 51, 51, 1);
      line-height: 90 / @rem;
      margin-top: 49 / @rem;
    }
    .one-img {
      width: 589 / @rem;
      height: 370 / @rem;
      margin-top: 40 / @rem;
    }
    .one-imgs {
      width: 428 / @rem;
      height: 401 / @rem;
      margin-top: 30 / @rem;
    }
    .one-text1 {
      width: 664 / @rem;
      height: 235 / @rem;
      font-size: 26 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 42 / @rem;
      margin-top: 57 / @rem;
    }
    .one-text2 {
      width: 477 / @rem;
      height: 67 / @rem;
      font-size: 26 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(255, 153, 0, 1);
      line-height: 42 / @rem;
      margin-top: 77 / @rem;
    }
    .ones-text2{
      width: 587 / @rem;
      height: 67 / @rem;
      font-size: 24 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(255, 153, 0, 1);
      line-height: 42 / @rem;
      margin-top: 43 / @rem;
    }
    .one-text2s{
      width: 511 / @rem;
      font-size: 24 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(255, 153, 0, 1);
      line-height: 26 / @rem;
      margin-top: 35 / @rem;
    }
    .one-text3{
      width: 511 / @rem;
      font-size: 24 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(255, 153, 0, 1);
      line-height: 26 / @rem;
      margin-top: 35 / @rem;
    }
    .one-btn {
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
      margin-top: 50 / @rem;
      margin-bottom: 60 / @rem;
    }
    .one-btns {
      background-color: #fba013;
      margin-top: 99 / @rem;
    }
    .gay {
      width: 100%;
      height: 20 / @rem;
      background: rgba(250, 250, 250, 1);
    }
    .one-titles {
      width: 690 / @rem;
      height: 30 / @rem;
      font-size: 32 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 60 / @rem;
      margin-top: 49 / @rem;
      display: flex;
      align-items: center;
      .one-titles-line {
        width: 4 / @rem;
        height: 30 / @rem;
        background: rgba(21, 171, 254, 1);
        margin-right: 20 / @rem;
      }
    }
    .one-card {
      width: 690 / @rem;
      height: 180 / @rem;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 / @rem 0 / @rem 15 / @rem 0 / @rem rgba(51, 51, 51, 0.08);
      border-radius: 6 / @rem;
      display: flex;
      align-items: center;
      margin-top: 30 / @rem;
      .one-card-img {
        width: 88 / @rem;
        height: 110 / @rem;
        margin-left: 30 / @rem;
      }
      .one-card-text {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 29 / @rem;
        .one-card-text1 {
          font-size: 26 / @rem;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 90px / @rem;
        }
        .one-card-text2 {
          width: 508 / @rem;
          font-size: 22 / @rem;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 42 / @rem;
          margin-top: 31 / @rem;
        }
      }
    }
    .one-cards {
      margin-top: 49 / @rem;
    }
    .ones-card {
      margin-bottom: 60 / @rem;
    }
  }
}
</style>
