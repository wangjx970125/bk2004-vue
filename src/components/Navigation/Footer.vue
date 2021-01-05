<template>
    <div>
        <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" @change="changeItem">
            <van-tabbar-item><van-icon class-prefix="iconfont icon-dianying" slot="icon" size="1.2rem" />
                <span>
                    电影
                </span>
            </van-tabbar-item>
            <van-tabbar-item><van-icon class-prefix="iconfont icon-yingyuan" slot="icon" size="1.2rem" />
                <span>
                    影院
                </span>
            </van-tabbar-item>
            <van-tabbar-item><van-icon class-prefix="iconfont icon-yixianshi_huaban" slot="icon" size="1.2rem" />
                <span>
                    我的
                </span>
            </van-tabbar-item>
        
        </van-tabbar>
    </div>
</template>

<script>
// 导入 iconfont 图库
import "@/assets/font/iconfont.css"

// 导入 vant 组件
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
import { Icon } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);

export default {
    data() {
        return {
            active: 0,
            //定义底部导航需要的三个地址(按顺序)
            urls:["/films/nowPlaying","/cinemas","center"],
        };
    },
    created() {
        // 纠正刷新之后索引为 0
        this.active = this.urls.indexOf(this.$route.path) > -1 ? this.urls.indexOf(this.$route.path): 0
    },
    methods:{
        changeItem(index){
            this.$router.push(this.urls[index])
        }
    }
}
</script>