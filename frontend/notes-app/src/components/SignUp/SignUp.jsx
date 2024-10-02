import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom'
import PasswordInput from '../Input/PasswordInput';
import { validateEmail } from '../../utils/helper';

const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async(e) => {
    e.preventDefault();

    if(!name){
      setError('Please enter your name');
      return;
    }

    if(!validateEmail(email)){
      setError('Please enter a valid email address');
      return;
    }

    if(!password){
      setError('Please enter the password');
      return;
    }

    setError('');

    //SignUp API call

  };

  return (
    <>
      <Navbar/>

      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10'>
          <form onSubmit={handleSignUp}>
            <h4 className='text-2xl font-bold mb-6 text-center'>SignUp</h4>

            <input type="text"
               placeholder='Name'
               className='w-full text-sm bg-transparent border border-gray-300 rounded py-3 px-4 outline-none focus:border-blue-500 mb-4'
               value={name}
               onChange={(e) => setName(e.target.value)}
            />

            <input type="text"
               placeholder='Email'
               className='w-full text-sm bg-transparent border border-gray-300 rounded py-3 px-4 outline-none focus:border-blue-500 mb-4'
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
        
        <PasswordInput
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            /> 

             {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}


            <button 
              type="submit" 
              className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 w-full mt-4"
            >
              Create Account
            </button>
          </form>
          <p className="text-center mt-4">
            Already have an account?</p>
          <p className="text-center">
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default SignUp