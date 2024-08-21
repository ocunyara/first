'use client'

import {useState} from "react";
import {PersonProps} from "../People/PeopleItem.types";

interface LoginProps {
  first_name: string,
  email: string
}

const Login = () => {

  const [formData, setFormData] = useState<LoginProps>({
    first_name: '',
    email: ''
  });
  const [message, setMessage] = useState<boolean>(true)

  const handleLogin = fetch(`/api/sing-in?&email=${formData.email}&firstName=${formData.first_name}`);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevData => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    handleLogin.then((response) => response.json()).then((data) => {
      data.exists ? console.log(data) : setMessage(false);
    }).then(() => {
      setTimeout(() => {
        setMessage(true);
        setFormData(
          {
            first_name: '',
            email: ''
          })
      }, 1000)
    })
  }

  const addCookie = () => {

  }

  return <div className="m-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
      <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
        <div>
          <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800 dark:text-white">Login</p>
        </div>
        <div className="mt-4 lg:w-4/5 xl:w-3/5">
          <p className="text-base leading-6 text-gray-600 dark:text-white">It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <form onSubmit={handleSubmit} >
          <div className="xl:mt-6 mt-4">
            <input
              className="focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 pb-1 border border-gray-600 w-full h-12 sm:w-96 md:w-full lg:w-72 px-4 text-base leading-4 text-gray-600 placeholder-gray-600 dark:placeholder-white dark:bg-transparent dark:border-white dark:text-white"
              placeholder="Name"
              type='next'
              name='first_name'
              value={formData.first_name}
              required
              onChange={handleChange}
            />
          </div>
          <div className="xl:mt-12 mt-6 w-full">
            <input
              className="focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 pb-1 border border-gray-600 w-full h-12 sm:w-96 md:w-full lg:w-72 px-4 text-base leading-4 text-gray-600 placeholder-gray-600 dark:placeholder-white dark:bg-transparent dark:border-white dark:text-white"
              placeholder="Email address"
              type='email'
              name='email'
              value={formData.email}
              required
              onChange={handleChange} />
          </div>
          <div className="xl:mt-4 mt-6 w-full">
            <button
              type='submit'
              className="hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 h-12 w-full sm:w-96 md:w-full lg:w-72 bg-gray-800 text-base font-medium leading-4 text-white dark:bg-white dark:text-gray-900 dark:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-900">Login
            </button>
          </div>
          {!message ? <h2 className='text-white'>User {formData.first_name} not exit</h2> : <h2 className='text-white'></h2>}
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
          </div>
        </form>
      </div>
    </div>

    <div
      className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
      <div className="">
        <img className="hidden lg:block" src="https://i.ibb.co/61TfVVW/olena-sergienko-gx-KL334b-UK4-unsplash-1.png"
             alt="sofa"/>
        <img className="w-80 sm:w-auto lg:hidden"
             src="https://i.ibb.co/QvxmJjB/olena-sergienko-gx-KL334b-UK4-unsplash-1-1.png" alt="sofa"/>
      </div>
      <div
        className="flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
        <div>
          <img className="hidden lg:block"
               src="https://i.ibb.co/1MY5P3y/nirzar-pangarkar-Csw-Kf-D546-Z8-unsplash-1.png" alt="chairs"/>
          <img className="w-80 sm:w-auto lg:hidden"
               src="https://i.ibb.co/r0rvcCh/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png" alt="chairs"/>
        </div>
        <div>
          <img className="hidden lg:block"
               src="https://i.ibb.co/9N7ZX2C/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png" alt="chairs"/>
          <img className="w-80 sm:w-auto lg:hidden"
               src="https://i.ibb.co/0BFt400/nirzar-pangarkar-Csw-Kf-D546-Z8-unsplash-2.png" alt="chairs"/>
        </div>
      </div>
    </div>
  </div>
}

export default Login