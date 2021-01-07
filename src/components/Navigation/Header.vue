<template>
    <div :class="{header:is_show}">
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
            // 用于控制是否显示头部信息
            is_show:false,
        }
    },
    created() {
        // 纠正因为刷新而导致选项卡选中错误的情况
        this.active = this.urls.indexOf(this.$route.path) > -1 ?  this.urls.indexOf(this.$route.path) : 0
    },
    // 页面加载完成获取滚动条高度
    mounted() {
        window.addEventListener('scroll',()=>{
            // 获取高度
            let scrollTop = document.documentElement.scrollTop
            if(scrollTop >= 150){
                this.is_show = true
            }else{
                this.is_show = false
            }
        })
    },
    methods: {
        // 点击切换顶部导航选项卡事件处理程序
        onClick(index) {
            this.$router.push(this.urls[index])
        },
    },
 
}
</script>

<style lang="scss" scoped>
    // class样式绑定. 是否显示头,取决于是否有class样式
    .header{
        position: fixed;
        z-index: 100;
        width: 100%;
    }
</style>
