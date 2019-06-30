import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import i18n from './i18n'
import lv from 'vee-validate/dist/locale/lv'
import ru from 'vee-validate/dist/locale/ru'
import en from 'vee-validate/dist/locale/en'
import './plugins/database'
import VeeValidate from 'vee-validate'
import Gravatar from 'vue-gravatar'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.component('v-gravatar', Gravatar)

Vue.use(VeeValidate, {
  locale: 'lv',
  dictionary: {
    lv,
    en,
    ru
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
