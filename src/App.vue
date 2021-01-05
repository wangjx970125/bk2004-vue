<template>
  <div id="app">
    <!-- 测试 vant 组件的使用 -->
    <!-- <van-cell title="选择单个日期" :value="date" @click="show = true" />
    <van-calendar v-model="show" @confirm="onConfirm" /> -->
    <Footer />
    <router-view/>
  </div>
</template>
<script>
// 导入 底部导航 组件
import Footer from '@/components/Navigation/Footer'

//导入vant 组件
// import Vue from 'vue';
// import { Calendar,cell } from 'vant';
// Vue.use(Calendar);
// Vue.use(cell);

// 导入 uri 地址模块
// import uri from '@/config/uri'
export default {
  //注册组件
  components:{
    Footer
  },

  // vant 测试代码
  // data() {
  //   return {
  //     date: '',
  //     show: false,
  //   };
  // },
  // methods: {
  //   formatDate(date) {
  //     return `${date.getMonth() + 1}/${date.getDate()}`;
  //   },
  //   onConfirm(date) {
  //     this.show = false;
  //     this.date = this.formatDate(date);
  //   },
  // },


  created() {
    // 测试网络请求是否可用
    // this.$http.get(uri.getCities).then(ret => console.log(ret))
  },
}
</script>
<style lang="scss">

</style>
