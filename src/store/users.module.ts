import {
  Module,
  VuexModule,
  MutationAction,
  getModule,
  Mutation,
  Action
} from 'vuex-module-decorators'
import store from '@/store'
import { Me, UserLogin, UserRegister } from './users.model'

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
    // axios.defaults.headers.common.Authorization = `Bearer ${me.token}`
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
      // const { data } = await axios.post('/api/auth/local', userLogin)
      // if (data && data.token) {
      //   axios.defaults.headers.common.Authorization = `Bearer ${data.token}`
      //   localStorage.setItem('bda-user', JSON.stringify(data))
      //   return { user: data as User, error: null }
      // } else {
      //   return { user: {}, error: data.error }
      // }
    } catch (error) {
      // return { user: null, error: error.message }
    }
  }

  // @Action
  // public async register(userRegister: UserRegister) {
  //   try {
  //     await axios.post('/api/auth/local/register', userRegister)
  //   } catch (error) {
  //     this.setError(error.message)
  //   }
  // }
}

export default getModule(UsersModule)
