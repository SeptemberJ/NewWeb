import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../store/store'
import App from '../app'
import SmartHox_Home from '../page/SmartHox/Home'
import SmartHox_ApplicationScene from '../page/SmartHox/ApplicationScene'
import SmartHox_Products from '../page/SmartHox/Products'
import Company from '../page/SmartHox/Company'
import {deviceInfo} from "../util/device"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: App,
    children: [
    {path:'/SmartHox_Home',name: '首页', component: SmartHox_Home},
    {path:'/SmartHox_ApplicationScene',name: '物联网场景应用', component: SmartHox_ApplicationScene},
    {path:'/SmartHox_Products',name: '产品与服务', component: SmartHox_Products},
    {path:'/Company',name: '公司', component: Company},
    {path:'*', redirect: '/SmartHox_Home'}
      // {path: '/article/:id', name: 'article', component: Article},
    ]
  }
]
const router = new VueRouter({
  routes: routes, // short for routes: routes
  //linkActiveClass: 'active',  // router-link的选中状态的class，也有一个默认的值
  saveScrollPosition: true ,//记住页面的滚动位置 html5模式适用
  //mode: 'history',
  //ashbang: false,
  history: true
})
//登录控制
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (localStorage.getItem("user_ID")) {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            next({
                path: '/Login',
            })
        }
    }
    else {
        next();
    }
})
//导航显示当前路由名称
router.afterEach((to, from, next) => {
  var ISMobile = deviceInfo()
  Store.state.activeRoute=to.name;
  Store.state.isMobile=!ISMobile;
  document.title = to.name;
  Store.commit('ROUTE_CHANGE',{activeRoute: to.name})
  // console.log(window.history)
  // window.history.pushState({},to.name,location.href)
  // window.history.replaceState({}, document.title, this.landingPage)
  //     console.log(window.history)
})
//离开
// router.beforeRouteLeave((to, from, next) => {
//     window.history.replaceState({}, '', this.currentPage)
//     next()
// })
export default router
