'use client'

import { PersonProps } from "./PeopleItem.types";

const PeopleItem = ({ id, first_name, last_name, email, age}: PersonProps) => {
  return <>
    <li className='rounded relative' key={id}>
      <div
        className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 p-4">
        <h4
          className="text-gray-800 dark:text-gray-100 font-bold mb-3">{first_name} {last_name}</h4>
        <button
          className="absolute top-1 right-1 w-[90px] mx-2 my-2 bg-gray-300 transition duration-150 ease-in-out hover:bg-gray-400 rounded text-indigo-700 px-6 py-2 text-xs">Remove
        </button>
        <div>
          <p className="text-gray-800 dark:text-gray-100 text-sm">Email: {email}</p>
          <p className="text-gray-800 dark:text-gray-100 text-sm">Age: {age}</p>
        </div>
      </div>
    </li>
  </>
}

export default PeopleItem