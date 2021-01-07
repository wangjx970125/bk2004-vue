import Vue from 'vue'
import Vuex from 'vuex'

// 导入模块
import user from './modules/users'
import global from './modules/global'

Vue.use(Vuex)

export default new Vuex.Store({
  // 状态 (数据源, 存储需要共享数据的)
  state: {
    // 定义一个数据源 (任意类型)
    num :0,
    num2: 100,
    age:17,
  },

  // 用于存放修改状态的'方法'(同步)
  mutations: {
    // 设置num的方法
    setNum(state,arg){
      // 让每次调用 setNum 的时候让 num+arg
      state.num += arg
    },
    setNum2(state,arg){
      // 让每次调用 setNum 的时候让 num+arg
      state.num2 += arg
    },
  },

  // 用于存放修改状态的'方法的'(异步)
  // 其实 actions 最终还是调用的 mutations
  actions: {
    // 异步程序
    aysncSetNum2(context,arg){
      // 调用方法:
      setTimeout(() => {
        // 最终调用还是mutations中的方法
        context.commit("setNum2",arg)
      },1000)
    },
  },

  // 用于存储对数据进行加工处理的方法的(类似于vue实例中的计算属性)
  getters:{
    ageIsAdult(state){
      return state.age >= 18 ? "成年了": "未成年"
    }
  },

  // 用于存放模块( 从当前前面四个中抽离出去形成的模块 )的
  modules: {
    user,
    global,
  }
})
