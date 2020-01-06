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
      <div class="content2-text1">工薪阶层如何做税务筹划 工薪阶层税务筹划解析</div>
      <div class="content2-text2">2019.10.09</div>
      <div class="content2-text3">
        个税一直都是工薪阶层非常在意的事情。辛辛苦苦赚来的钱，却要拿出一大截交个税，谁都不会乐意。所以下面厦云创科小编给大家说说工薪阶层如何通过税务筹划给自己的收入增收。
        <br />工薪阶层为什么要做税务筹划
        <br />个人所得税是与工薪阶层密切相关的一个税种，工资越高，需要缴纳的个人所得税也越来越多。中国工薪阶层税收占个税总税负的50%；而美国将近50%的工薪阶层只承担了联邦所得税的5%，10%的最高收入者承担了个人所得税的超过60%比重。
        <br />目前工薪阶层的个人所得税是由企业代扣代缴的，对于个人来说，被扣的钱多了，心里难免不舒服，而对于企业来说，一方面不得不提员工代扣代缴个税，另一方面，如果想要留住一些高质量的人才，就不得不提高薪资，或者承担员工的个税，那么企业的人力成本就大大提高了。无论是哪一种办法，都是一种吃力不讨好的活儿。所以说税务筹划非常重要。
      </div>
      <img class="content2-img" src="../../assets/imgs/hd-item4.png" alt />
      <div class="content2-text4">
        合理选择存货计价方法
        <br />税务筹划，一方面可以帮助员工提高收入，另一方也能够帮助企业降低人力成本，留住人才。是一种双赢的决定。
        <br />工薪阶层如何做税务筹划
        <br />那么工薪阶层该如何做税务筹划呢？
        <br />据了解，目前很多公司为为了让员工少交个税。就会员工找发票来换提成，员工为了拿提成，凑发票，就会到各种电线杆上去找，各种渠道去买。其实这是一种非常不明智的做法。随着金税三期的越渐成熟，这种做法也显得越来越危险，无异于走钢丝。这也不是小编要说的税务筹划。
        一定要记住，税务筹划，一定是合法合规的。税务筹划的方式有很多种，老板和会计不要只盯着眼前工资表的几种违规手段，被稽查到了得不偿失。会计需要了解更多的收税优惠政策并合理加以利用。如果企业会计不够专业，建议老板们找专业的机构委托办理，比如厦云创科 以上就是关于工薪阶层如何做税务筹划的内容，仅供参考。
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
