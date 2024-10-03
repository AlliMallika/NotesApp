import React, { useState } from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../Cards/SearchBar/SearchBar';


const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onLogout = () => {
      navigate('/login');
  };

  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div>
    <div className='bg-white flex items-center justify-between px-6 py-2'>
       <h2 className='text-xl font-medium text-black py-2'>Notes</h2>
        {/* <h2>Notes</h2><hr /> */}

        <SearchBar value={searchQuery} 
           onChange={({ target }) => {
             setSearchQuery(target.value);
           }}
           handleSearch={handleSearch}
           onClearSearch={onClearSearch}
        />

        <ProfileInfo onLogout={onLogout}/>
    </div>
        <hr className='border-t border-gray-300 my-2' />
    </div>
  )
}

export default Navbar