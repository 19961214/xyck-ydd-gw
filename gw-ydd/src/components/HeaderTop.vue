<template>
  <div>
    <div class="header">
      <img class="header1" @click="showPopup" src="../assets/imgs/header1.png" alt />
      <img class="header2" src="../assets/imgs/logo.png" alt />
    </div>
    <van-popup v-model="show" position="top">
      <div>
        <div class="header">
          <img class="header3" @click="showPopup" src="../assets/imgs/xxx.png" alt />
          <img class="header2" src="../assets/imgs/logo.png" alt />
        </div>
        <div class="header-item-wrap">
          <div class="header-item" @click="gotoIndex">首页</div>
          <div class="header-item" @click="gotoArticle">关于厦云</div>
          <div class="header-item" @click="gotoProduct">产品介绍</div>
          <div class="header-item" @click="gotoTeam">解决方案</div>
          <div class="header-item" @click="gotoStory">活动资讯</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Popup } from "vant";

Vue.use(Popup);
export default {
  name: "HeaderTop",
  data() {
    return {
      show: false,
      time: 0.1
    };
  },
  methods: {
    showPopup() {
      this.show = !this.show;
    },
    gotoIndex() {
      this.$router.push({ path: "/index" });
    },
    gotoArticle() {
      this.$router.push({ path: "/article" });
    },
    gotoTeam() {
      this.$router.push({ path: "/team" });
    },
    gotoStory() {
      this.$router.push({ path: "/story" });
    },
    gotoProduct() {
      this.$router.push({ path: "/product" });
    },
  },
  mounted() {
    
  }
};
</script>

<style scoped lang="less">
@rem: 46.875rem;
.header {
  width: 100%;
  height: 100 / @rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  .header1 {
    width: 40 / @rem;
    height: 36 / @rem;
    margin-left: 30 / @rem;
  }
  .header2 {
    width: 230 / @rem;
    height: 80 / @rem;
    margin-left: 190 / @rem;
  }
  .header3 {
    width: 32 / @rem;
    height: 32 / @rem;
    margin-left: 34 / @rem;
  }
}
.header-item-wrap{
  margin-top: 100/@rem;
  .header-item {
  width: 690 / @rem;
  height: 100 / @rem;
  font-size: 30 / @rem;
  font-family: PingFang SC;
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  display: flex;
  align-items: center;
  padding-left: 41 / @rem;
}
}

</style>
