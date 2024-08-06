'use server'

import { getPerson } from '@/app/components/People/lib/getDataOnServer'
import {PeopleItem} from "./index";

interface PersonProps {
  rows: {
    first_name: string,
    last_name: string
    email: string
    id: number
    age: number
  }[]
}


// SSR component
const PeopleListSSR = async () => {
  const data: PersonProps = await getPerson();

  return (
    <div className="container mx-auto">
      <h1 className="py-10 text-4xl font-semibold leading-9 text-center text-white">People List in DB SSR</h1>
      <ul className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {data.rows.map(person => (
          <PeopleItem {...person} />
        ))}
      </ul>
    </div>
  );
};

export default PeopleListSSR;
