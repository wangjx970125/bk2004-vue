import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 导入需要的组件

// 导入经过模块化的路由
import filmRouter from './routes/film'
import cinemaRouter from './routes/cinema'
import centerRouter from './routes/center'

const routes = [
  {
    path:"/",
    redirect:"/films/nowPlaying"
  },
  // 模块化
  //需要展开, 导出的是一个数组,但是人家想要的是一个对象
  ...filmRouter,  
  ...cinemaRouter,
  ...centerRouter,

  // 电影模块
  //    电影模块父      /films
  //    正在热映        /films/nowPlaying
  //    即将上映        /filme/comingSoon
  //   电影详情         /film/:filmId

  // {
  //   path:"/films",
  //   component:Films,
  //   children:[
  //     {path:"nowPlaying",component: NowPlaying },
  //     {path:"comingSoon",component: ComingSoon },
  //   ],
  // },
  // {
  //   path:"/film/:filmId",
  //   component:Detail
  // },



  //影院模块
  //  /cinemas
  // {
  //   path:"/cinemas",
  //   component:Cinemas,
  // },

  //我的模块
  //  /center
  // {
  //   path:"/center",
  //   component:Center,
  // },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
