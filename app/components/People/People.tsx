'use server'

import { getPerson } from '@/app/components/People/lib/getDataOnServer'

interface PersonProps {
  people: {
    rows: {
      first_name: string,
      last_name: string
      email: string
      id: number
      age: number
    }[]
  }
}



const PeopleList = async () => {
  const data: PersonProps = await getPerson().then();

  return (
    <div>
      <h1>People List</h1>
      <ul>
        {data.people.rows.map(person => (
          <li key={person.id}>
            {person.first_name} {person.last_name} - {person.email} - Age: {person.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
