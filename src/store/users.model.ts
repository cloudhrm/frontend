export interface Me {
  token: string
  user: {
    id: string
    name: string
    email: string
    company: any
    groups: [{ name: string }]
  }
}

export interface UserLogin {
  email: string
  password: string
}

export interface UserRegister {
  email: string
  name: string
  password: string
}
