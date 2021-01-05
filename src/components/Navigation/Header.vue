<template>
    <div>
        <van-tabs v-model="active" @click="onClick" line-width="60px">
            <van-tab title="正在热映"></van-tab>
            <van-tab title="即将上映"></van-tab>
        </van-tabs>
    </div>
</template>

<script>
// 导入 vant 需要的组件
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);

export default {
    data() {
        return {
            active:0,
            urls:["/films/nowPlaying","/films/comingSoon"],
        }
    },
    created() {
        // 纠正因为刷新而导致选项卡选中错误的情况
        this.active = this.urls.indexOf(this.$route.path) > -1 ?  this.urls.indexOf(this.$route.path) : 0
    },
    methods: {
        // 点击切换顶部导航选项卡事件处理程序
        onClick(index) {
            this.$router.push(this.urls[index])
        },
    },
 
}
</script>
