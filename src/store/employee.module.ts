import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  Action
} from 'vuex-module-decorators'
import store from '@/store'
import { Employee } from './employee.model'

import faker from 'faker'

@Module({
  namespaced: true,
  name: 'employee',
  store,
  dynamic: true
})
class EmployeeModule extends VuexModule {
  private employees: Employee[] = Array(100).map((emp) => {
    return emp = {
      id: faker.random.uuid(),
      userId: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      livingLocationText: faker.address.streetAddress(true),
      skills: [
        {
          name: faker.name.jobArea
        }
      ],
      links: [
        {}
      ],
      experience: [{}],
      education: [{}],
    }
  })

  @Action
  public getEmployees() {
    return this.employees
  }
}


export default getModule(EmployeeModule)
