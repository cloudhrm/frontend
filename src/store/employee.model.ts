export interface EmployeeSkill {
  name: string
}

export interface Link {
  link: string
}

export interface Experience {
  id?: string
  employee?: Employee
  position: string
  company: string
  companyId?: string
  locationText?: string
  locationId?: number
  fromYear?: number
  toYear?: number
  current: boolean
}

export interface Education {
  id?: string
  employee: Employee
  fromYear: number
  toYear: number
  degree?: string
  fieldOfStudy?: string
  school?: string
  locationText?: string
  locationId?: number
  notes?: string
  current: boolean
}

export interface Employee {
  id?: string
  userId: string
  companyId?: string
  firstName: string
  lastName: string
  livingLocationText: string
  livingplaceId?: string
  about?: string
  workSince?: number
  skills?: [EmployeeSkill]
  links?: [Link]
  experience?: [Experience]
  education?: [Education]
}
