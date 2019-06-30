import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'list',
      component: () =>
        import(/* webpackChunkName: "deliveryList" */ '@/components/delivery/Index.vue'),
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/delivery',
      name: 'delivery',
      component: () =>
        import(/* webpackChunkName: "about" */ '@/components/delivery/DeliveryForm.vue')
    }, {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ '@/components/About.vue')
    }
  ]
})

export default router
