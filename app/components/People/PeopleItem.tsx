'use client'

import { PersonProps } from "./PeopleItem.types";
import { useState } from "react";

const PeopleItem = ({ id, first_name, last_name, email, age}: PersonProps) => {
  const [message, setMessage] = useState<string>('')

  console.log(123)

  const removePerson = async (id: number) => {
    try {
      const response = await fetch(`/api/delete-people?ID=${id}`);
      const data = await response.json();
      setMessage(data.message)
    } catch (error: unknown) {
      console.log(error)
    }
  };

  const successDelete = <div>Person {first_name} {last_name} has been deleted</div>


  return <>
    <li className='rounded relative' key={id}>
      { message ? successDelete :
        <div
          className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 p-4">
          <h4
            className="text-gray-800 dark:text-gray-100 font-bold mb-3">{first_name} {last_name}</h4>
          <button
            onClick={() => removePerson(id || 0)}
            className="absolute top-1 right-1 w-[90px] mx-2 my-2 bg-gray-300 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-indigo-700 px-6 py-2 text-xs">Remove
          </button>
          <div>
            <p className="text-gray-800 dark:text-gray-100 text-sm">Email: {email}</p>
            <p className="text-gray-800 dark:text-gray-100 text-sm">Age: {age}</p>
          </div>
        </div>
      }
    </li>
  </>
}

export default PeopleItem