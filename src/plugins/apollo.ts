import Vue from 'vue'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

Vue.use(VueApollo)

// Name of the localStorage item
const AUTH_TOKEN_NAME = 'apollo-token'

const defaultClient = new ApolloClient({
  uri: 'http://localhost:4000',
  fetchOptions: {
    credentials: 'include'
  },
  request: async (operation) => {
    if (!localStorage.token) {
      localStorage.setItem(AUTH_TOKEN_NAME, '')
    }

    operation.setContext({
      headers: {
        authorization: localStorage.getItem(AUTH_TOKEN_NAME)
      }
    })
  }
  // onError: ({graphQLErrors, networkError}) => {
  //   if (networkError) {
  //     console.log('[networkError]', networkError)
  //   }

  //   if (graphQLErrors) {
  //     for (let err of graphQLErrors) {
  //       console.dir(err)
  //     }
  //   }
  // }
})

export const apolloProvider = new VueApollo({ defaultClient })
