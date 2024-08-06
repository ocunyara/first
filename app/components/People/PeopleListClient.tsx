'use client';
import { useEffect, useState } from 'react';
import Button from '@/app/components/Button/Button'
import { PeopleItem } from "./index";
import { PersonListProps } from '@/app/components/People/PeopleItem.types'


// SSR component
const PeopleListClient = async () => {
  const [people, setPeople] = useState<PersonListProps>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchPeople = async () => {
    try {
      const response = await fetch('/api/get-people');
      const data = await response.json();

      setPeople(data);
    } catch (error: unknown) {
      console.log(error)
    }
  };


  const deletePeople = async (ID: number) => {
    try {
      const response = await fetch(`/api/delete-people?${ID}`);
      const data = await response.json();
      setPeople(data);
    } catch (error: unknown) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPeople();
  }, []);

  console.log(people)

  if (error) return <div>Error: {error}</div>;
  if (people.length === 0) return <div>Loading...</div>;

  return (
    <div className="container mx-auto">
      <h1 className="py-10 text-4xl font-semibold leading-9 text-center text-white">People List in DB</h1>
      <ul className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {people.rows.map(person => (
          <PeopleItem {...person} />
        ))}
      </ul>
    </div>
  );
};

export default PeopleListClient;
