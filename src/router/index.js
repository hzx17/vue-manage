import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import Home from '../views//home/Home.vue'
import User from '../views/user/User'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'主页面',
    component: Main,
    children:[
      {
        path:'/home',
        nmae:'首页',
        component:Home
      },
      {
        path:'/user',
        nmae:'用户',
        component:User
      }
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router