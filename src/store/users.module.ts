import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  Action
} from 'vuex-module-decorators'
import store from '@/store'
import { Me, UserLogin, UserRegister } from './users.model'
import { SIGNUP_USER, LOGIN_USER } from './users.queries'
import { apolloClient, AUTH_TOKEN_NAME } from '@/plugins/apollo'

@Module({
  namespaced: true,
  name: 'users',
  store,
  dynamic: true
})
class UsersModule extends VuexModule {
  public me: Me | null = null
  public error: string | null = null

  get logged() {
    return this.me != null
  }

  get token() {
    if (this.me) {
      return this.me.token
    } else {
      return null
    }
  }

  @Mutation
  public setMe(me: Me) {
    this.me = me
  }

  @Mutation
  public setError(error: string) {
    this.error = error
  }

  @Mutation
  public logOut() {
    this.me = null
  }

  @Action
  public async login(userLogin: UserLogin) {
    try {
      const { data } = await apolloClient.mutate({
        mutation: LOGIN_USER,
        variables: userLogin
      })
      if (data && data.login && data.login.token) {
        localStorage.setItem(AUTH_TOKEN_NAME, data.login.token)
        this.setMe(data.login)
      } else {
        this.setError('Not able to get token')
      }
    } catch (error) {
      this.setError(error.message)
    }
  }

  @Action
  public async register(userRegister: UserRegister) {
    try {
      const { data } = await apolloClient.mutate({
        mutation: SIGNUP_USER,
        variables: userRegister
      })
      if (data && data.signup && data.signup.token) {
        localStorage.setItem(AUTH_TOKEN_NAME, data.signup.token)
        this.setMe(data.signup)
      } else {
        this.setError('Not able to get token')
      }
    } catch (error) {
      this.setError(error.message)
    }
  }
}

export default getModule(UsersModule)
