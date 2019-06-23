import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'me',
      component: () =>
        import(/* webpackChunkName: "me" */ '@/components/me/Me.vue'),
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ '@/components/About.vue')
    }
  ]
})

export default router
