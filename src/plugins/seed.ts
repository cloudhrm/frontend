import { Flawor } from '../entity/Flawor'
import { Product } from '../entity/Product'
import { Person } from '../entity/Person'

// Flawors
const sweet: Flawor = {
  id: '1',
  name: 'Sweet'
}
const sour: Flawor = {
  id: '2',
  name: 'Sour'
}

// Products
const banana: Product = {
  id: '1',
  name: 'Banana',
  flawor: sweet
}
const strawbery: Product = {
  id: '2',
  name: 'Strawbery',
  flawor: sweet
}
const lemon: Product = {
  id: '3',
  name: 'Lemon',
  flawor: sour
}

// Persons
const robdeniro: Person = {
  id: 'robdeniro',
  firstName: 'Robert',
  lastName: 'De Niro',
  address: `c/o Tribeca Productions
    375 Greenwich Street
    New York, N.Y 10013
    USA`
}
const jacknickel: Person = {
  id: 'jacknickel',
  firstName: 'Jack',
  lastName: 'Nicholson',
  address: `Beverly Hills, California (CA), US`
}
const merbrando: Person = {
  id: 'merbrando',
  firstName: 'Marlon',
  lastName: 'Brando',
  address: `USA`
}

// All together
const seed = {
  flawor: [sweet, sour],
  product: [strawbery, lemon],
  person: [robdeniro, jacknickel, merbrando],
  delivery: []
}

export default seed
