import React from 'react'
import Navbar from '../Navbar/Navbar'
import NoteCard from '../Cards/NoteCard'
import { MdAdd } from 'react-icons/md'

const Home = () => {
  return (
    <>
      <Navbar/>

      <div className='container mx-auto'>
         <div className='grid grid-cols-3 gap-4 mt-8'>
        <NoteCard title="Meeting on 11th OCT"
          date='10th OCT 2024'
          content='About MES Project Progress'
          tags='#Meeting'
          isPinned={true}
          onEdit={false}
        />
        </div>
      </div>

      <button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-500 absolute right-10 bottom-10' onClick={() => {}}>
          <MdAdd className='text-[32px] text-white' />
      </button>
    </>
  )
}

export default Home