import { gql } from 'apollo-boost'

export const LOGIN_USER = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
        company {
          id
          homepage
        }
        groups {
          name
        }
      }
    }
  }
`

export const SIGNUP_USER = gql`
  mutation($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      token
      user {
        id
        name
        email
        company {
          id
          homepage
        }
        groups {
          name
        }
      }
    }
  }
`
