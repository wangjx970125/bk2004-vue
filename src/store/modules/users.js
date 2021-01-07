// 模块化的文件中的格式相对固定
export default{
    // 设置命名空间
    namespaced:true,
    state:{
        username:"zhangsan",
        age:22,
        email:"zhangsan@123.com"
    },
    mutations:{
        // 更改用户名
        setUsername(state,arg){
            state.username = "lisi"
        },
        // 更改年龄
        setAge(state,arg){
            state.age += arg
        }
    },
    actions:{
        // 异步更改年龄
        asyncSetAge(context,arg){
            setTimeout(()=>{
                context.commit('setAge',arg)
            },1000)
        }
    },
    getters:{
        // 判断是否成年
        IsAdult(state){
            return state.age >= 18 ? "成年了": "未成年"
        }
    }
}