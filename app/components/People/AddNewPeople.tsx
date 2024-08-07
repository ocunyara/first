'use client'

import { useEffect, useState } from 'react'
import { PersonProps } from "./PeopleItem.types";

const AddNewPeople = () => {

  const [formData, setFormData] = useState<PersonProps>({
    first_name: '',
    last_name: '',
    email: '',
    age: 0
  });
  const [message, setMessage] = useState<string>('')

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(a: React.FormEvent) {
    e.preventDefault()

    fetchPeople();

    setFormData(
      {
        first_name: '',
        last_name: '',
        email: '',
        age: 0
      }
    )
  }

  const fetchPeople = async () => {
    console.log(123123)
    try {
      const response = await fetch(`/api/add-people?firstName=${formData.first_name}&lastName=${formData.last_name}&age=${formData.age}&email=${formData.email}`);
      const data = await response.json();

      data.people.fields.length ? setMessage('Person added') : setMessage('Something wrong')
      console.log(data)
    } catch (error: unknown) {
      console.log(error)
    }
  };


  return <>
    <form onSubmit={handleSubmit} className='bg-gray-800 dark:border-gray-700 rounded-lg border border-gray-400 p-4 flex'>
      <div>
        <h2 role="heading" className="text-xl font-semibold leading-7 mt-5 text-white">
          Personal data
        </h2>
        <div className="mt-8 md:flex items-center">
          <div className="flex flex-col">
            <label className="mb-3 text-sm leading-none text-white">First name</label>
            <input type="text" tabIndex={0} aria-label="Enter first name"
                   name='first_name'
                   value={formData.first_name}
                   required
                   onChange={handleChange}
                   className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"/>
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none text-white">Last name</label>
            <input type="text" tabIndex={0} aria-label="Enter last name"
                   name='last_name'
                   value={formData.last_name}
                   onChange={handleChange}
                   required
                   className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"/>
          </div>
        </div>
        <div className="mt-12 md:flex items-center">
          <div className="flex flex-col">
            <label className="mb-3 text-sm leading-none text-white">Email Address</label>
            <input type="email" tabIndex={0} aria-label="Enter email Address"
                   name='email'
                   value={formData.email}
                   required
                   onChange={handleChange}
                   className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"/>
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none text-white">Place of birth</label>
            <input type="data" tabIndex={0} aria-label="Enter place of birth"
                   name='age'
                   value={formData.age}
                   onChange={handleChange}
                   className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"/>
          </div>
        </div>
        <button role="button" aria-label="Next step"
                className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
          <span className="text-sm font-medium text-center text-gray-800 capitalize">Add person</span>
        </button>
      </div>
      <h2 className='text-xl font-semibold leading-7 text-green-500 mx-auto'>{message}</h2>
    </form>
  </>
}

export default AddNewPeople