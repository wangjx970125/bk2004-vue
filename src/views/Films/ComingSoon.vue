<template>
    <div class="container">
        <van-list
            v-model="isLoading"
            :finished="finished"
            finished-text="我没有底线了,底下没了别划了"
            @load="onLoad"
        >
            <!-- <div class="loading" v-show="isLoading">
                <van-loading size="24px" type="spinner" >加载中...</van-loading>
            </div> -->
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
                            主演: {{item.actors | parseActors}}
                        </div>
                        <div>
                        上映日期: <span>{{item.premiereAt | parsePremiereAt}}</span>
                        </div>
                        <div>
                            {{item.nation}} | {{item.runtime}} 分钟
                        </div>
                        <div class="nowPlayingFilm-buy">
                            预约
                        </div>
                    </div>
                </template>
                
            </van-card>
        </van-list>
    </div>
</template>

<script>
// 导入加载文案
import Vue from 'vue';
import { Loading, Toast, Card,List } from 'vant';

Vue.use(Loading);
Vue.use(Toast);
Vue.use(Card);
Vue.use(List);
// 导入moment包
import moment from 'moment'

// 导入地址模块
import uri from '@/config/uri'
export default {
    data() {
        return {
            // 列表的数据源
            list:[],
            // 控制加载组件是否显示
            isLoading:false,
            // 默认的页码
            pageNum: 1,
            finished: false,
        }
    },
    methods: {
        // 往上划的处理程序
        onLoad(){
            // 获取数据
            this.getData()
        },
        
        // 专门获取网络请求
        getData(){
            this.$http.get(uri.getComingSoon + '?pageNum=' + this.pageNum).then(ret => {
                if(ret.status == 0){
                    if(this.pageNum <= Math.ceil(ret.data.total/10)){
                        // 请求成功(新旧数据的整合)
                        this.list = [...this.list,...ret.data.films]
                        // 让页码+1
                        this,this.pageNum++

                    }else{
                        // 没有数据了 (显示加载完成)
                        this.finished=true
                    }
                }else{
                    // 请求失败
                    Toast.fail('网络繁忙');
                }
                // 数据加载完成,去除加载组件显示
                this.isLoading = false
                this.isLoading2 = false
            })
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
        },
        // 针对上映时间的处理
        parsePremiereAt(timestamp){ 
            // 周几的数组 (避免使用分支)
            const arr = ['周日','周一','周二','周三','周四','周五','周六']
            //  周几
            const week = arr[moment(timestamp*1000).format('d')]
            // 日
            const day = moment(timestamp*1000).format('D')
            // 月
            const month = moment(timestamp*1000).format('M')
            return `${week} ${month}月${day}日`
        }

    },
    created() {
        
        // this.getData()
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
    .van-card__thumb img[data-v-5c89891c]{
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
