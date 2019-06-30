import { Product } from './Product'
import { Person } from './Person'

export interface Delivery {
  product: Product
  qty: number
  price: number
  summ: number
  address: string
  employee: Person
  supplier: Person
}
