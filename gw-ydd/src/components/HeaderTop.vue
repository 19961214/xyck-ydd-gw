<template>
  <div>
    <div id="header">
      <img class="header1" src="../assets/imgs/header1.png" alt />
      <img class="header2" src="../assets/imgs/logo.png" alt />
      <van-cell is-link @click="showPopup">展示弹出层</van-cell>
      <van-popup v-model="show" position="top" :style="{ height: '20%' }" />
    
    </div>
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
      show: false
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  },
  mounted() {}
};
</script>

<style scoped lang="less">
@rem: 46.875rem;
#header {
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
}
</style>
