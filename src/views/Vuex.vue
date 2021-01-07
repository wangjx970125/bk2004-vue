<template>
    <div>
        <h1>这是Vuex的专用组件</h1>
        <button @click="clickhe"> 触发修改</button>
        <button @click="clickhe2"> 模块化</button>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
    created(){
        // 获取state中的数据
        // console.log(this.$store.state.num);
        // console.log(this.$store.state.num2);

        // this.$store.state.num=123456
        // console.log(this.$store.state.num);

    },
    computed:{
        // ...mapState(['num','num2']),
        // ...mapGetters(["ageIsAdult"])

        // 模块化映射
        // 需要通过map系列第一个参数告诉我们需要数据的空间
        ...mapState("user",["username","age","email"])
    },
    mounted() {
        // console.log(this.num);
        // console.log(this.num2);

        //  调用正常方法
        // this.setNum(10)
        // this.setNum2(-10)

    },
    methods: {
        // 在 methods 中使用 mapMutations 方法
        // ...mapMutations(["setNum","setNum2"]),

        clickhe(){
            // 正常 this 调用修改数据(同步) 的形式
            // this.$store.commit('setNum',5)
            // this.$store.commit('setNum2',-5)

            // this.$store.dispatch("aysncSetNum2",50)

            // 正常this调用getter获取处理结果
            // console.log(this.$store.getters.ageIsAdult)

            // 通过map映射使用
            // console.log(this.ageIsAdult);
        },
        clickhe2(){
            // state模块化的方式
            // this 形式
            // console.log(this.$store.state.user.username);
            //map形式
            // console.log(this.username);

            // mutations模块化的形式
            // this形式
            // this.$store.commit("user/setUsername","lisi")
        },
    },
}
</script>