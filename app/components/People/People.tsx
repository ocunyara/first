'use client'
import { useEffect, useState } from 'react';

interface PersonProps {
  first_name: string,
  last_name: string
  email: string
  id: number
  age: number
}

const PeopleList = () => {
  const [people, setPeople] = useState<PersonProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchPeople = async () => {
      try {
        const response = await fetch('/api/get-people');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPeople(data.people.rows || []);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchPeople();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (people.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <h1>People List</h1>
      <ul>
        {people.map(person => (
          <li key={person.id}>
            {person.first_name} {person.last_name} - {person.email} - Age: {person.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
