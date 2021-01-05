<template>
    <div>
        <div class="loading" v-show="isLoading">
            <van-loading size="24px" type="spinner" >加载中...</van-loading>
        </div>
        <van-card v-for="item in list" :key="item.filmId">
            <!-- 封面图片 -->
            <template #thumb>
                <img :src="item.poster" width="66">
            </template>
            <!-- 电影名称 -->
            <template #title>
                <div class="title">
                    {{item.name}}
                    <span class="item">{{item.filmType.name}}</span>
                </div>
            </template>
            <!-- 电影基本介绍 -->
            <template #desc>
                <div class="desc">
                    <div>
                    观众评分 <span class="grade">{{item.grade}}</span>
                    </div>
                    <div>
                        主演: {{item.actors | parseActors}}
                    </div>
                    <div>
                        {{item.nation}} | {{item.runtime}} 分钟
                    </div>
                    <div class="nowPlayingFilm-buy">
                        购票
                    </div>
                </div>
            </template>
            
        </van-card>
    </div>
</template>

<script>
// 导入加载文案
import Vue from 'vue';
import { Loading, Toast, Card, Tag, Button } from 'vant';

Vue.use(Loading);
Vue.use(Toast);
Vue.use(Card);
Vue.use(Tag);
Vue.use(Button);

// 导入地址模块
import uri from '@/config/uri'
export default {
    data() {
        return {
            // 列表的数据源
            list:[],
            // 控制加载组件是否显示
            isLoading:true,
        }
    },
    // 过滤器
    filters:{
        // 处理演员的信息
        parseActors(actors){
            // 由于卖座网的数据可能没有主演
            if(actors){
                // 由主演
                var str = ""
                actors.forEach(el => {
                    str += el.name + " "
                })
                return str.substring(0,14) + "..."
            }else{
                // 没有主演
                return "暂无主演"
            }
        }
    },
    created() {
        // 遵循原则:早获取,早显示
        this.$http.get(uri.getNowPlaying).then(ret => {
            if(ret.status == 0){
                // 请求成功
                this.list = ret.data.films
            }else{
                // 请求失败
                Toast.fail('网络繁忙');
            }
            // 数据加载完成,去除加载组件显示
            this.isLoading = false
        })
    },
}
</script>

<style lang="scss" scoped>
    // scoped 表示样式只在当组件生效
    .loading{
        text-align: center;
        margin-top: 10px;
        background-color: rgba(0,0,0,0.1);
    }
    .van-card__thumb img {
    border-radius: 8px;
    margin-top:-5px ;
    }
    img{
        border-radius: 0;
    }
    .title{
        font-size: 16px;
        color: black;
    }
    .item{
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
    }
    .grade{
        color: #ffb232;
        font-size: 14px;
    }
    .desc{
        font-size: 13px;
        margin-top: 4px;
        color: #797d82;
    }
    .nowPlayingFilm-buy{
        float: right;
        line-height: 25px;
        height: 25px;
        width: 50px;
        color: #ff5f16;
        font-size: 13px;
        text-align: center;
        border-radius: 2px;
        position: relative;
        top: -45px;
    }
    .nowPlayingFilm-buy::after{
        content: " ";
        transform: scale(.5);
        position: absolute;
        border: 1px solid #ff5f16;
        top: -50%;
        right: -50%;
        bottom: -50%;
        left: -50%;
        border-radius: 4px;
    }
</style>
