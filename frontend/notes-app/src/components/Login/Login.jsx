import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import PasswordInput from '../Input/PasswordInput'

//Login

const Login = () => {
  return (
    <>
      <Navbar/>

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={() => {}} className="flex flex-col space-y-4">
            {/* <h4 className='text-2xl mb-7'>Login</h4> */}
            <input
              type="text"
              placeholder='Email'
              className='input-box'
            />

            <PasswordInput/>

            <button 
              type="submit" 
              className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <p className="text-center mt-4">Not registered yet?</p>
          <p className="text-center">
            <Link to="/signup" className="text-blue-500 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login