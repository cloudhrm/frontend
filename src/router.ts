import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login/',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ '@/views/Login.vue')
    },
    {
      path: '/register/',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "register" */ '@/views/Register.vue')
    },
    {
      path: '/403',
      name: '403',
      component: () =>
        import(/* webpackChunkName: "403" */ '@/views/Code403.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/About.vue')
    }
  ]
})
