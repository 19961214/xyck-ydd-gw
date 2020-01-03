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
      <div class="titles">
        <div class="titles-line"></div>新闻动态
      </div>
      <div class="content2-item-wrap">
        <div class="content2-item">
          <img class="content2-item-img" src="../../assets/imgs/hd-item1.png" alt />
          <div class="content2-item-text">
            <div class="content2-item-text1">中小企业怎么做税务筹划 中小企如何做好税务筹划</div>
            <div class="content2-item-text2">2019.04.03</div>
          </div>
        </div>
        <div class="content2-item">
          <img class="content2-item-img" src="../../assets/imgs/hd-item2.png" alt />
          <div class="content2-item-text">
            <div class="content2-item-text1">明年1月1日社保入税 这10大变化财务要注意</div>
            <div class="content2-item-text2">2019.06.05</div>
          </div>
        </div>
        <div class="content2-item">
          <img class="content2-item-img" src="../../assets/imgs/hd-item3.png" alt />
          <div class="content2-item-text">
            <div class="content2-item-text1">两会提议：自由职业者要纳入正式社会职业体系？</div>
            <div class="content2-item-text2">2019.08.07</div>
          </div>
        </div>
        <div class="content2-item">
          <img class="content2-item-img" src="../../assets/imgs/hd-item4.png" alt />
          <div class="content2-item-text">
            <div class="content2-item-text1">2018小微企业认定标准 小微企业优惠政策解读</div>
            <div class="content2-item-text2">2019.09.20</div>
          </div>
        </div>
        <!-- <div class="content2-btn">展开更多</div> -->
      </div>
    </div>
    <div class="gay"></div>
    <div class="content3">
      <div class="titles">
        <div class="titles-line"></div>活动资讯
      </div>
      <div class="content3-item-wrap">
        <div class="content3-item">
          <img class="content3-item-img" src="../../assets/imgs/hd-item5.png" alt />
          <div class="content3-item-text">
            <div class="content3-item-text1">重磅利好第二弹——小微企业标准将放宽！</div>
            <div class="content3-item-text2">在今天举行的国新办的新闻发布会上，财政部部长助理许宏才介绍，要加大减税降费力度和加大支出力度...</div>
            <div class="content3-item-text3">2019.09.10</div>
          </div>
        </div>
        <div class="content3-item">
          <img class="content3-item-img" src="../../assets/imgs/hd-item6.png" alt />
          <div class="content3-item-text">
            <div class="content3-item-text1">工薪阶层如何做税务筹划 工薪阶层税务筹划解析</div>
            <div class="content3-item-text2">个税一直都是工薪阶层非常在意的事情。辛辛苦苦赚来的钱，却要拿出一大截交个税，谁都不会乐意。所以下面厦云创科小编给大家说说工...</div>
            <div class="content3-item-text3">2019.10.09</div>
          </div>
        </div>
        <!-- <div class="content3-btn">展开更多</div> -->
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
    padding-bottom: 56 / @rem;
    .titles {
      width: 690 / @rem;
      height: 130 / @rem;
      font-size: 32 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      margin-top: 49 / @rem;
      display: flex;
      align-items: center;
      margin: 0;
      .titles-line {
        width: 4 / @rem;
        height: 30 / @rem;
        background: rgba(21, 171, 254, 1);
        margin-right: 20 / @rem;
        // margin-left: 30 / @rem;
      }
    }
    .content2-item-wrap {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .content2-item {
        width: 690 / @rem;
        height: 180 / @rem;
        background: rgba(255, 255, 255, 1);
        border: 1 / @rem solid rgba(238, 238, 238, 1);
        display: flex;
        align-items: center;
        margin-top: 30 / @rem;
        .content2-item-img {
          width: 183 / @rem;
          height: 140 / @rem;
          margin-left: 20 / @rem;
        }
        .content2-item-text {
          height: 140 / @rem;
          margin-left: 31 / @rem;
          position: relative;
          .content2-item-text1 {
            width: 404 / @rem;
            font-size: 26 / @rem;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 39 / @rem;
            position: absolute;
            top: 10 / @rem;
            left: 0;
          }
          .content2-item-text2 {
            font-size: 24 / @rem;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            position: absolute;
            top: 121 / @rem;
            left: 297 / @rem;
          }
        }
      }

      .content2-btn {
        width: 200 / @rem;
        height: 60 / @rem;
        background: rgba(255, 255, 255, 1);
        border: 2 / @rem solid rgba(21, 171, 254, 1);
        border-radius: 8 / @rem;
        font-size: 26 / @rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(21, 171, 254, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30 / @rem;
      }
    }
  }
  .content3 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100/@rem;
    .titles {
      width: 690 / @rem;
      height: 130 / @rem;
      font-size: 32 / @rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      margin-top: 49 / @rem;
      display: flex;
      align-items: center;
      margin: 0;
      .titles-line {
        width: 4 / @rem;
        height: 30 / @rem;
        background: rgba(21, 171, 254, 1);
        margin-right: 20 / @rem;
        // margin-left: 30 / @rem;
      }
    }
    .content3-item-wrap {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .content3-item {
        width: 690 / @rem;
        height: 240 / @rem;
        background: rgba(255, 255, 255, 1);
        border: 1 / @rem solid rgba(238, 238, 238, 1);
        display: flex;
        align-items: center;
        margin-top: 30 / @rem;
        position: relative;
        .content3-item-img {
          width: 260 / @rem;
          height: 200 / @rem;
          margin-left: 20 / @rem;
        }
        .content3-item-text {
          width: 350 / @rem;
          height: 200 / @rem;
          margin-left: 31 / @rem;

          .content3-item-text1 {
            width: 345 / @rem;
            font-size: 26 / @rem;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 39 / @rem;
            position: absolute;
            top: 27 / @rem;
            left: 311 / @rem;
          }
          .content3-item-text2 {
            width: 345 / @rem;
            height: 62 / @rem;
            font-size: 22 / @rem;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            position: absolute;
            top: 115 / @rem;
            left: 310 / @rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .content3-item-text3 {
            font-size: 22 / @rem;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            position: absolute;
            top: 202 / @rem;
            left: 542 / @rem;
          }
        }
      }
      .content3-btn {
        width: 200 / @rem;
        height: 60 / @rem;
        background: rgba(255, 255, 255, 1);
        border: 2 / @rem solid rgba(21, 171, 254, 1);
        border-radius: 8 / @rem;
        font-size: 26 / @rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(21, 171, 254, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30 / @rem;
      }
    }
  }
  .gay {
    width: 100%;
    height: 20 / @rem;
    background: rgba(250, 250, 250, 1);
  }
}
</style>
