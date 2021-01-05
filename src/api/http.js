//  封装 axios
import axios from 'axios'

//对于 axios 响应结果的封装 (响应拦截器)
/* 
例如: 之前学习axios的时候, 说 axios 的网络请求返回结果是在
返回对象ret的data属性中,而每次获取数据的时候都需要ret.data
比较麻烦,此处可以静心封装,如果返回结构中有ret.daa我们就可以在这里
直接返回ret.data
*/
axios.interceptors.response.use((ret) => {
    // 可以进行响应的拦截处理
    // if(ret.data){
    //     return ret.data
    // }else{
    //     return ret
    // }
    //短路运算符
    return ret.data || ret
})



//对于 axios 请求处理的封装 (请求拦截器)
/* 
例如: 之前在 node 学习了 jwt , 需要将其丢到请求中. 由于其
后续每次请求都需要在头中携带 jwt , 因此可以在此进行封装,让
其每次都自动加入 header 中
*/

// axios.interceptors.response.use((cfg) => {

// })

//导出axios
export default axios