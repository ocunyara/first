export interface PersonProps {
  first_name: string,
  last_name: string
  email: string
  id: number
  age: number
}

export interface PersonListProps {
  rows: PersonProps[]
}