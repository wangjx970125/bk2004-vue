// 该配置文件是用于配置网络请求需要的uri地址
// 集中管理地址, 效率高
// 城市列表:
//      接口地址：https://api.iynn.cn/film/api/v1/getCitiesInfo
let prefix = "/api"
export default {
    // 获取城市列表信息
    getCities: prefix + "/getCitiesInfo",
    // 获取正在热映信息
    getNowPlaying: prefix + "/getNowPlayingFilmList",
    // 获取即将上映列表
    getComingSoon: prefix + "/getComingSoonFilmList",
    // 获取详情信息
    getDetail: prefix + "/getFilmInfo",
    // ...
}