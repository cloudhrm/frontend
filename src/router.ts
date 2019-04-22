import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'

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
        import(/* webpackChunkName: "login" */ '@/components/auth/Login.vue')
    },
    {
      path: '/register/',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "register" */ '@/components/auth/Register.vue')
    },
    {
      path: '/403',
      name: '403',
      component: () =>
        import(/* webpackChunkName: "403" */ '@/components/auth/Code403.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ '@/components/About.vue')
    }
  ]
})
