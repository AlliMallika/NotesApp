import React from 'react'
import TagInput from '../Input/TagInput'

const AddEditNotes = () => {
   return (
        <div className=" bg-white items-center rounded-lg p-6 max-w-md ">
         <div className=' flex flex-col gap-2'>
           <label className='input-label'>TITLE</label>
           <input
               type="text"
               className='text-2xl text-slate-950 outline-none'
               placeholder='Do Meditation'
           />
         </div>
 
         <div className='flex flex-col gap-2 mt-4'>
           <label className='input-label'>CONTENT</label>
           <textarea
               type='text'
               className='text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded'
               placeholder='content'
               rows={10}
           />
         </div>
 
         <div className='mt-3'>
           <label className='input-label'>TAGS</label>
           <TagInput />
         </div>
 
         <button className='bg-blue-500 text-white font-medium mt-5 p-3 rounded' onClick={() => {}}>
           ADD
         </button>
       </div>
    )
}

export default AddEditNotes;
