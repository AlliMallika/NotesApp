import React from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
      navigate('/login');
  }

  return (
    <div className='bt-white flex items-center justify-between px-6 py-2'>
       <h2 className='text-xl font-medium text-black py-2'>Notes</h2>
        {/* <h2>Notes</h2><hr /> */}

        <ProfileInfo onLogout={onLogout}/>
    </div>
  )
}

export default Navbar