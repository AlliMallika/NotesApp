import React from 'react'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <>
      <Navbar/>

      <div className='container mx-auto'>

        <NoteCard/>
      </div>
    </>
  )
}

export default Home