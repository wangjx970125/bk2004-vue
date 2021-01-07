<template>
    <div class="main">
        <div>
            <!-- 用于显示图片 -->
            <img v-lazy="filmInfo.poster" width="100%">
        </div>

        <div class="neirong">
            <!-- 用于显示电影介绍 -->
            <div class="name">{{filmInfo.name}}</div>
            <div>{{filmInfo.category}}</div>
            <div>{{filmInfo.premiereAt | parsePremiereAt}} 上映</div>
            <div>{{filmInfo.nation}}</div>
            <div>{{filmInfo.synopsis}}</div>
        </div>

        <div class="actors">
            <!-- 用于显示演员信息 -->
            <div class="actors-title-bar">
                <span class="actors-title-text">
                    演职人员
                </span>
            </div>
            <Actors :key="filmInfo.actors.length">
                <!-- 给插槽填坑 -->
                <div class="swiper-slide" v-for="(item,index) in filmInfo.actors" :key="index">
                    <img :src="item.avatarAddress" width="85px">
                    <span class="actors-name">{{item.name}}</span>
                    <span class="actors-role">{{item.role}}</span>
                </div>
            </Actors>
        </div>

        <div>
            <!-- 用于显示剧照 -->
            <!-- <Actors>
                <div v-for="(item,index) in filmInfo.photos" :key="index">
                    <img :src="item.photos">
                </div>
            </Actors> -->
        </div>
    </div>
</template>

<script>
// 导入演员组件
import Actors from '@/views/Films/Actors'

import Vue from 'vue';
import uri from '@/config/uri'
import { Toast } from 'vant';
import moment from 'moment'
// 导入映射方法
import {mapMutations} from 'vuex'

Vue.use(Toast);

// 配置当前图片的懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    // 配置具体图片
    loading: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2962937242,1933230585&fm=26&gp=0.jpg",
});
export default {
    data() {
        return {
            filmInfo:{actors:[]}
        }
    },
    filters:{
        parsePremiereAt(timestamp){
            return moment(timestamp * 1000).format("YYYY-MM-DD")
        },
    },
    components:{
        Actors
    },
    methods: {
        ...mapMutations("global",["setFooter"])
    },
    created() {
        // 请求数据
        this.$http.get(uri.getDetail + "?filmId=" + this.$route.params.filmId).then((ret) => {
           if(ret.status == 0){
               // 请求成功
               this.filmInfo = ret.data.film
           }else{
               // 请求失败
               Toast.fail(ret.msg);
           }
        })  
        // 进入时通知 App 隐藏底部导航(emit)
        // this.$eventBus.$emit("show_jiojio",false)
        this.setFooter(false)
    },
    beforeDestroy(){
        // 离开时通知 App 显示底部导航
        // this.$eventBus.$emit("show_jiojio",true)

        this.setFooter(true)

    },
}
</script>

<style lang="scss" scoped>
    .main{
        height: 100%;
        background-color: rgba(0,0,0,0.1);
    }
    .neirong{
        font-size: 13px;
        color: #797d82;
        margin-top: 4px;
        padding: 15px;
        padding-top: 12px;
        background-color: #fff;
    }
    .name{
        color: #191a1b;
        font-size: 18px;
        height: 24px;
        line-height: 24px;
        margin-right: 7px;
    }
    .actors{
        margin-top: 10px;
        background-color: #fff;
    }
    .swiper-slide{
        display: block;
    }
    .actors-name{
        display: block;
        text-align: center;
        padding-top: 10px;
        font-size: 12px;
        color: #191a1b;
        height: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .actors-role{
        display: block;
        text-align: center;
        font-size: 10px;
        color: #797d82;
    }
    .actors-title-bar{
        width: 100%;
        padding: 15px;
    }
    .actors-title-text{
        font-size: 16px;
        text-align: left;
        color: #191a1b;
    }
</style>