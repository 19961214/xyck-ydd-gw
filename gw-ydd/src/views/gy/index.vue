<template>
  <div class="wrap">
    <HeaderTop></HeaderTop>
    <div class="content1">
      <img class="content-img" src="../../assets/imgs/gy-header1.png" alt />
      <div class="content1-text">
        <span class="content1-text1">关于我们</span>
        <span class="content1-text2">ABOUT US</span>
      </div>
    </div>
    <van-tabs v-model="active" color="#15ABFE">
      <van-tab title="关于厦云">
        <div id="one">
          <div class="one-title">
            <div class="one-title-line"></div>厦云创科
          </div>
          <div
            class="one-text"
          >杭州厦云创科信息技术有限公司，系厦门大学师兄弟创立，旨在响应政府号召，链接并赋能分享经济平台和自由职业者的集大数据分析及应用，云计算技术开发、创业孵化于一体的科技企业。 团队聚集来自人力资源、互联网、IT技术等行业的精英，团队高管曾任职于平安银行、腾讯、阿里、顺丰等公司重要岗位，采用“互联网+税收优化”解决方案，与政府深圳合作，结合大数据、AI等先进技术实现厦云云生态网络，通过科技打造更专业的人财税一体化商业服务。</div>
          <div class="one-title">
            <div class="one-title-line"></div>我们的使命
          </div>
          <div
            class="one-text"
          >随着未来企业与社会用工形式的不断呈现多元的模式转变，加上中国税务政策的不断完善，解决当下应对未来充满挑战的企业及自由职业者的人财税问题，将成为厦云创科为之奋斗的使命。</div>
          <div class="one-gay"></div>
          <div class="one-title one-titles">
            <div class="one-title-line"></div>我们的团队
          </div>
          <div class="name-card">
            <div class="name-card-header">
              <img class="name-card-img" src="../../assets/imgs/ld1.png" alt />
            </div>
            <div class="name-card-name">陈利强</div>
            <div class="name-card-post">董事长</div>
            <div class="name-card-text">
              厦门大学EMBA。
              <br />主管公司宏观战略发展，并分管公共关系工作。
              <br />曾任职达芙妮、宾度等知名品牌运营负责人。2013年至今作为独立投资人，投资了多个重要品牌和项目。
            </div>
          </div>
          <div class="name-card">
            <div class="name-card-header">
              <img class="name-card-img" src="../../assets/imgs/ld2.png" alt />
            </div>
            <div class="name-card-name">于本金</div>
            <div class="name-card-post">董事、CEO</div>
            <div class="name-card-text">
              厦门大学EMBA。
              <br />香港大学组织与人力资源管理研究生曾任中智关爱通华南大区负责人。具有超过10年的销售及市场、公共关系管理经验。曾带领团队服务过广汽丰田、周大福、HSBC、平安银行、迅雷、医联、固生堂等重要项目。
            </div>
          </div>
          <div class="name-card">
            <div class="name-card-header">
              <img class="name-card-img" src="../../assets/imgs/ld3.png" alt />
            </div>
            <div class="name-card-name">姜亚球</div>
            <div class="name-card-post">董事、CTO</div>
            <div class="name-card-text">
              厦门大学EMBA。
              <br />国防科技大学计算机专业，10 年以上软件研发、架构、管理经验。曾就职于微软、林洋电子知名上市企业，并先后担任任 Q 房网技术总监及小科金融 CTO 等职位。对互联网金融平台及运作有深刻的认识及丰富的管理经验。
            </div>
          </div>
          <div class="name-card">
            <div class="name-card-header">
              <img class="name-card-img" src="../../assets/imgs/ld4.png" alt />
            </div>
            <div class="name-card-name">林玮</div>
            <div class="name-card-post">董事、投资公司总经理</div>
            <div class="name-card-text">
              厦门大学EMBA。
              <br />浙江大学生创业联盟创业导师，中国青年互联网创业大赛评委，浙江省优秀投资人。曾任银江集团资金管理部总经理；银江资本首席执行官。其投资的优秀企业代表有：京颐科技，趣医网，爱股票，天铁股份，每日互动等。
            </div>
          </div>
          <div class="name-card name-cards">
            <div class="name-card-header">
              <img class="name-card-img" src="../../assets/imgs/ld5.png" alt />
            </div>
            <div class="name-card-name">詹有义</div>
            <div class="name-card-post">董事、总会计师</div>
            <div class="name-card-text">
              厦门大学EMBA。
              <br />中国财政部内部控制标准委员会咨询专家，资深中国注册会计师。厦门大学管理学院“鸿雁计划”优秀导师。
              为多家企业集团、国有企业提供了企业架构重组、内部控制制度设计审计、纳税筹划、财务规划等服务。
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="联系我们">
        <div id="two">
          <div class="two-title">
            <div class="two-title-line"></div>商户合作联系
          </div>
          <div class="two-card1 two-card1s">
            <div class="two-card1-header">
              <img class="two-card1-img" src="../../assets/imgs/girl.png" alt />
            </div>
            <div class="two-card1-text">
              <div class="two-card1-text1">解小姐：</div>
              <div class="two-card1-text2">0571-87299551 / 13672436880</div>
              <div class="two-card1-text3">xiexiaoyu@xyck.com</div>
            </div>
          </div>
          <div class="two-card1">
            <div class="two-card1-header">
              <img class="two-card1-img" src="../../assets/imgs/boy.png" alt />
            </div>
            <div class="two-card1-text">
              <div class="two-card1-text1">许先生：</div>
              <div class="two-card1-text2">0571-87296889 / 15815814891</div>
              <div class="two-card1-text3">xuyuhua@xyck.com</div>
            </div>
          </div>
          <div class="two-title">
            <div class="two-title-line"></div>公司总部地址
          </div>
          <div class="two-card2">
            <div class="two-card2-header">
              <img class="two-card2-img" src="../../assets/imgs/hangzhou.png" alt />
            </div>
            <div class="two-card2-text">
              <div class="two-card2-text1">杭州总部</div>
              <div class="two-card2-text2">浙江省杭州市西湖区桃岭路桃源坞基金小镇16幢3A</div>
              <div class="two-card2-text3">联系电话：0571-87299551</div>
            </div>
          </div>
          <div class="two-title">
            <div class="two-title-line"></div>分公司地址
          </div>
          <div class="two-card2">
            <div class="two-card2-header">
              <img class="two-card2-img" src="../../assets/imgs/hangzhou.png" alt />
            </div>
            <div class="two-card2-text">
              <div class="two-card2-text1">广州分公司</div>
              <div class="two-card2-text2">广州市天河区科韵路12号之一801室</div>
              <div class="two-card2-text3">联系电话：15815814891</div>
            </div>
          </div>
          <div class="two-card2">
            <div class="two-card2-header">
              <img class="two-card2-img" src="../../assets/imgs/shenzhen.png" alt />
            </div>
            <div class="two-card2-text">
              <div class="two-card2-text1">深圳分公司</div>
              <div class="two-card2-text2">广东省深圳市南山区高新园科技南十二路朗诗大厦1209室</div>
              <div class="two-card2-text3">联系电话：13316807117</div>
            </div>
          </div>
          <div class="two-card2">
            <div class="two-card2-header">
              <img class="two-card2-img" src="../../assets/imgs/jiangxi.png" alt />
            </div>
            <div class="two-card2-text">
              <div class="two-card2-text1">江西分公司</div>
              <div class="two-card2-text2">江西省鹰潭市月湖区佳诚美丽园9栋3单元301</div>
              <div class="two-card2-text3">联系电话：18970187060</div>
            </div>
          </div>
          <div class="two-card2 two-card2s">
            <div class="two-card2-header">
              <img class="two-card2-img" src="../../assets/imgs/ganzhou.png" alt />
            </div>
            <div class="two-card2-text">
              <div class="two-card2-text1">江西赣州分公司</div>
              <div class="two-card2-text2">江西省赣州市章贡区兴国路61号赣州总部经济区东座办公大楼7层209室</div>
              <div class="two-card2-text3">联系电话：0571-87299551</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="加入我们">
        <div id="three">
          <div class="three-letter">
            <div class="three-letter-title">厦云创科愿与您携手并进，共创辉煌</div>
            <div
              class="three-letter-text"
            >你与我们的距离就只是一张简历的问题，厦云创科大家庭欢迎各位有志之士的加入，一起壮大厦云，笑傲江湖！在厦云的每一天都是新奇与挑战，激情与冒险，每一天我们洒下的汗水都是为了浇灌希望的种子，使之长成参天大树！让我们每个厦云人都可以在厦云大家庭中缔造自己的传奇，实现自己的事业目标和有意义的人生！</div>
          </div>
          <div class="three-gay"></div>

          <div class="three-title">
            <div class="three-title-line"></div>热招职位
          </div>
          <div class="three-invite">
            <div class="three-invite-item">
              <div class="three-invite-left">UI设计师</div>
              <img class="three-invite-right" src="../../assets/imgs/jiantou.png" alt />
            </div>
            <div class="three-invite-item three-invite-items">
              <div class="three-invite-left">JAVA工程师</div>
              <img class="three-invite-right" src="../../assets/imgs/jiantou.png" alt />
            </div>
            <div class="three-invite-item">
              <div class="three-invite-left">行政专员</div>
              <img class="three-invite-right" src="../../assets/imgs/jiantou.png" alt />
            </div>
          </div>
          <div class="three-invite-text">
            <div class="three-invite-text1">
              简历请投：
              <span class="three-invite-texts">xiexiaoyu@xyck.com</span>
            </div>
            <div class="three-invite-text1">
              联系电话：
              <span class="three-invite-texts">0571-87299551 / 13672436880</span>
            </div>
            <div class="three-invite-text1">
              投递简历时请在邮件标题中注明您的姓名以及应聘职位
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
        left: 302 / @rem;
        font-size: 36 / @rem;
        font-family: PingFang SC;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 60 / @rem;
      }
      .content1-text2 {
        position: absolute;
        top: 234 / @rem;
        left: 288 / @rem;
        font-size: 32 / @rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 60 / @rem;
      }
    }
  }
  #one {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    .one-title {
      width: 687 / @rem;
      height: 30 / @rem;
      font-size: 32 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 60 / @rem;
      margin-top: 61 / @rem;
      display: flex;
      align-items: center;
      .one-title-line {
        width: 4 / @rem;
        height: 30 / @rem;
        background: rgba(21, 171, 254, 1);
        margin-right: 20 / @rem;
      }
    }
    .one-titles {
      margin-bottom: 19 / @rem;
    }
    .one-text {
      width: 687 / @rem;
      font-size: 24 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 42 / @rem;
      margin-top: 37 / @rem;
    }
    .one-gay {
      width: 100%;
      height: 20 / @rem;
      background: rgba(250, 250, 250, 1);
      margin-top: 61 / @rem;
    }
    .name-card {
      width: 690 / @rem;
      height: 700 / @rem;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 / @rem 0 / @rem 20 / @rem 0 / @rem rgba(51, 51, 51, 0.1);
      border-radius: 6 / @rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30 / @rem;
      .name-card-header {
        width: 220 / @rem;
        height: 220 / @rem;
        margin-top: 60 / @rem;
        .name-card-img {
          width: 220 / @rem;
          height: 220 / @rem;
        }
      }

      .name-card-name {
        font-size: 32 / @rem;
        font-family: PingFang SC;
        font-weight: 600;
        color: rgba(51, 51, 51, 1);
        margin-top: 43 / @rem;
      }
      .name-card-post {
        font-size: 26 / @rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        margin-top: 20 / @rem;
      }
      .name-card-text {
        width: 590 / @rem;
        font-size: 26 / @rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 42 / @rem;
        margin-top: 36 / @rem;
      }
    }
    .name-cards {
      margin-bottom: 62 / @rem;
    }
  }
  #two {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    .two-title {
      width: 687 / @rem;
      height: 30 / @rem;
      font-size: 32 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 60 / @rem;
      margin-top: 61 / @rem;
      display: flex;
      align-items: center;
      .two-title-line {
        width: 4 / @rem;
        height: 30 / @rem;
        background: rgba(21, 171, 254, 1);
        margin-right: 20 / @rem;
      }
    }
    .two-card1s {
      margin-top: 49 / @rem;
    }
    .two-card1 {
      width: 690 / @rem;
      height: 200 / @rem;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 / @rem 0 / @rem 20 / @rem 0 / @rem rgba(51, 51, 51, 0.1);
      border-radius: 6 / @rem;
      display: flex;
      align-items: center;
      margin-top: 30 / @rem;
      .two-card1-header {
        width: 130 / @rem;
        height: 127 / @rem;
        margin-left: 30 / @rem;
        .two-card1-img {
          width: 130 / @rem;
          height: 127 / @rem;
        }
      }
      .two-card1-text {
        width: 401 / @rem;
        height: 106 / @rem;
        font-size: 26 / @rem;
        font-family: PingFang SC;
        font-weight: 600;
        color: rgba(102, 102, 102, 1);
        line-height: 39 / @rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 40 / @rem;
        .two-card1-text1 {
        }
        .two-card1-text2 {
        }
        .two-card1-text3 {
          color: #15abfe;
        }
      }
    }
    .two-card2 {
      width: 690 / @rem;
      height: 220 / @rem;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 / @rem 0 / @rem 20 / @rem 0 / @rem rgba(51, 51, 51, 0.1);
      border-radius: 6 / @rem;
      display: flex;
      align-items: center;
      margin-top: 30 / @rem;
      .two-card2-header {
        width: 160 / @rem;
        height: 160 / @rem;
        margin-left: 30 / @rem;
        .two-card2-img {
          width: 160 / @rem;
          height: 160 / @rem;
        }
      }
      .two-card2-text {
        height: 160 / @rem;
        font-size: 24 / @rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 39 / @rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 40 / @rem;
        .two-card2-text1 {
          color: #333333;
        }
        .two-card2-text2 {
        }
        .two-card2-text3 {
        }
      }
    }
    .two-card2s {
      margin-bottom: 62 / @rem;
    }
  }
  #three {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    .three-letter {
      height: 420 / @rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .three-letter-title {
        font-size: 28 / @rem;
        font-family: PingFang SC;
        font-weight: 600;
        color: rgba(51, 51, 51, 1);
        line-height: 90 / @rem;
      }
      .three-letter-text {
        width: 687 / @rem;
        font-size: 24 / @rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 42 / @rem;
      }
    }
    .three-gay {
      width: 100%;
      height: 20 / @rem;
      background: rgba(250, 250, 250, 1);
    }
    .three-title {
      width: 687 / @rem;
      height: 30 / @rem;
      font-size: 32 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      line-height: 60 / @rem;
      margin-top: 61 / @rem;
      display: flex;
      align-items: center;
      .three-title-line {
        width: 4 / @rem;
        height: 30 / @rem;
        background: rgba(21, 171, 254, 1);
        margin-right: 20 / @rem;
      }
    }
    .three-invite {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 55 / @rem;

      .three-invite-item {
        width: 690 / @rem;
        height: 100 / @rem;
        background: rgba(255, 255, 255, 1);
        border: 1 / @rem solid rgba(238, 238, 238, 1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        .three-invite-left {
          font-size: 26 / @rem;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 90 / @rem;
          margin-left: 30 / @rem;
        }
        .three-invite-right {
          width: 15 / @rem;
          height: 26 / @rem;
          margin-right: 30 / @rem;
        }
      }
      .three-invite-items {
        border-top: none;
        border-bottom: none;
      }
    }
    .three-invite-text {
      width: 690 / @rem;
      display: flex;
      flex-direction: column;
      margin-bottom: 105 / @rem;
      margin-top: 3 / @rem;
      .three-invite-text1 {
        margin-top: 29 / @rem;
        font-size: 24 / @rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        .three-invite-texts {
          color: #15abfe;
        }
      }
    }
  }
}
</style>
