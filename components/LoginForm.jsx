'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



  return (




    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="mt-10 w-62 sm:w-58 md:w-1/2 lg:w-1/2 lg:max-w-sm h-max bg-white rounded-lg shadow dark:border sm:mt-4 md:mt-0 lg:mt-2 sm:max-w-full xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className=" mt-5 flex justify-center">

          <div className="-m-1.5 p-0">
            <span className="sr-only">Gaming Community Hub</span>
            <Image
              className="h-16 w-auto"
              src="/logo.png"
              alt="Logo"
              width={48}
              height={48}
            />
          </div>

        </div>
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className=" text-center mb-10 text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" action="/">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={e => setPassword(e.target.value)} />

              

            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className=" text-xs text-gray-500 dark:text-gray-300">Remember me</label>
                </div>
              </div>
              <a href="#" className="text-xs font-medium text-primary-600 dark:text-primary-500 border-b-2 border-transparent hover:border-slate-200 transition-all duration-200">Forgot password?</a>
            </div>

            <button
              type="submit"
              className= 'w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gray-700 hover:bg-gray-600 duration-200' 
            >
              Sign in
            </button>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>

  );
}