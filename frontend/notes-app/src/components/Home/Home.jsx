import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import NoteCard from '../Cards/NoteCard'
import { MdAdd, MdOutlineAlarmAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes'
import Modal from 'react-modal'

const Home = () => {

  const [openAddEditModel, setOpenAddEditModal] = useState({
     isShown: false,
     type:"add",
     data: null,
  })
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

      <button className='w-10 h-10 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-500 absolute right-10 bottom-10' 
      onClick={() => {
         setOpenAddEditModal({ isShown: true, type: "add", data: null});
      }}>
          <MdAdd className='text-[32px] text-white' />
      </button>

      <Modal 
         isOpen={openAddEditModel.isShown}
         onRequestClose={() => {}}
         style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          },
          content: {
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '20px', 
            borderRadius: '4px', 
            maxHeight: '75%', 
            overflow: 'auto', 
          },
         }} 
          contentLabel=" max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
          className="w-[50vw] mx-auto mt-20"
         >
          <AddEditNotes/>
      </Modal>
    </>
  )
}

export default Home