import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import users from './store/users.module'
import { AUTH_TOKEN_NAME } from './plugins/apollo'

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
    },
    {
      path: '/cv/',
      name: 'cv',
      components: {
        default: () =>
          import(/* webpackChunkName: "cv" */ '@/components/me/cv/CV.vue'),
        childMenu: () =>
          import(/* webpackChunkName: "cv" */ '@/components/me/cv/EmpChildMenu.vue')
      },
      children: [
        {
          path: 'details',
          component: () =>
            import(/* webpackChunkName: "education" */ '@/components/me/cv/EmpEmployeeDetails.vue'),
        }, {
          path: 'education',
          component: () =>
            import(/* webpackChunkName: "education" */ '@/components/me/cv/EmpEducation.vue'),
        }, {
          path: 'experience',
          component: () =>
            import(/* webpackChunkName: "education" */ '@/components/me/cv/EmpExperience.vue'),
        }
      ],
      meta: {
        requiresAuth: true
      }
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

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (users.me === null) {
      const data = localStorage.getItem(AUTH_TOKEN_NAME)
      if (data) {
        users.setMe(JSON.parse(data))
      }
    }
    if (users.me === null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      const userdata = users.me
      if (
        to.matched.some((record) => {
          if (!record.meta.roles) {
            return true
          }
          return record.meta.roles.some((role: any) => {
            return userdata.user.groups.some((group) => role === group)
          })
        })
      ) {
        next()
      } else {
        next({ name: '403' })
      }
    }
  } else {
    next()
  }
})

export default router
