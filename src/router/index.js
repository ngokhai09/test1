import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/paramaster/:id',
    name: 'Paramaster',
    component: ()=>import('../views/Paramaster.vue')
  },
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: ()=>import('../views/PostDetail.vue')
  },
    {
    path: '/check',
    name: 'CheckLogin',
    component: ()=>import('../views/CheckLogin.vue')
  },
  {
    path:'/chat',
    name: 'ChatRoom',
    component: ()=>import('../views/ChatRoom.vue')
  },
  {
    path: '*',
    name: 'Not Found',
    component: () =>import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
