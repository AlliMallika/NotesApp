import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import PasswordInput from '../Input/PasswordInput'
import { validateEmail } from '../../utils/helper'

//Login

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async(e) => {
    e.preventDefault();

    if(!validateEmail(email)){
      setError("Please enter a valid email address.");
      return;
    }

    if(!password) {
      setError("Please enter the password");
      return;
    }
    setError(null);

    // Login API call
  };
  

  return (
    <>
      <Navbar/>

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleLogin} className="flex flex-col space-y-4">
            {/* <h4 className='text-2xl mb-7'>Login</h4> */}
            {/* <input
              type="text"
              placeholder='Email'
              className='input-box'
            /> */}

            <input
              type="text"
              placeholder="Email"
              className="w-full text-sm bg-transparent border border-gray-300 rounded py-3 px-4 outline-none focus:border-blue-500"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />

            <PasswordInput
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />

            {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}


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