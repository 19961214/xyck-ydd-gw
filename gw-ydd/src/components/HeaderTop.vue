<template>
    <div class="header">
      <img class="header1" src="../assets/imgs/header1.png" alt="">
      <img class="header2" src="../assets/imgs/logo.png" alt="">
    </div>
</template>

<script>
export default {
  name: 'HeaderTop',
  data() {
    return {};
  },
  methods: {
  },
  mounted() {
  },
};
</script>

<style scoped lang="less">
@rem:46.875rem;
.header{
  width: 100%;
  height: 100/@rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  .header1{
    width: 40/@rem;
    height: 36/@rem;
    margin-left: 30/@rem;
  }
  .header2{
    width: 230/@rem;
    height: 80/@rem;
    margin-left: 190/@rem;
  }
}
</style>
