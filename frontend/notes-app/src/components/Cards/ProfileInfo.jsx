import React from 'react'
import { getInitials } from '../../utils/helper'

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className='flex items-center gap-3'>
        <div className='w-12 h-12 flex items-center justify-center rounded-full bg-pink-500'>
            {getInitials("Mallika Alli")}
        </div>
        <div>
            <p className='text-sm font-medium'>Mallika Alli</p>
            <button className='text-red-500 hover:underline' onClick={onLogout}>
                Logout
            </button>
        </div>
    </div>
  )
}

export default ProfileInfo