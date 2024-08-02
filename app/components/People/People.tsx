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


// SSR component
const PeopleList = async () => {
  const data: PersonProps = await getPerson();

  return (
    <div className="container mx-auto">
      <h1 className="py-10 text-4xl font-semibold leading-9 text-center text-white">People List in DB</h1>
      <ul className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {data.people.rows.map(person => (
          <li className='rounded relative' key={person.id}>
            <div
              className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 p-4">
              <h4
                className="text-gray-800 dark:text-gray-100 font-bold mb-3">{person.first_name} {person.last_name}</h4>
              <button
                className="absolute top-1 right-1 w-[90px] mx-2 my-2 bg-gray-300 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-indigo-700 px-6 py-2 text-xs">Remove
              </button>
              <div>
                <p className="text-gray-800 dark:text-gray-100 text-sm">Email: {person.email}</p>
                <p className="text-gray-800 dark:text-gray-100 text-sm">Age: {person.age}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
