export default{
    namespaced:true,
    state:{
        // 控制底部是否显示
        isshowFooter:true, 
    },
    mutations:{
        // 是否显示操作
        setFooter(state,arg){
            state.isshowFooter = arg
        },
    },
    actions:{

    },
    getters:{

    }
}