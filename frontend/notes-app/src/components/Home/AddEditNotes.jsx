import React, { useState } from 'react'
import TagInput from '../Input/TagInput'
import { MdClose } from 'react-icons/md'

const AddEditNotes = ({ noteData, type, onClose }) => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState([]);
    const [error, setError] = useState(null);

     // Add Note
     const addNewNote = async() => {};
     
    // Edit Note
    const editNote = async() => {};

    const handleAddNote = () => {
      if(!title) {
        setError("Please enter the title");
        return;
      }

      if(!content){
        setError("Please enter the content");
        return;
      }

      setError("");

      if(type === 'edit'){
        editNote()
      }
      else{
        addNewNote()
      }
    };

   return (
       <div className='relative'>
        <button
           className='w-12 h-12 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50'
           onClick={onClose}
        >
          <MdClose className='text-xl text-slate-400' />
        </button>
        <div className=" bg-white items-center rounded-lg p-6 max-w-md ">

         <div className=' flex flex-col gap-2'>
           <label className='input-label'>TITLE</label>
           <input
               type="text"
               className='text-2xl text-slate-950 outline-none'
               placeholder='Title'
               value={title}
               onChange={(e) => setTitle(e.target.value)}
           />
         </div>
 
         <div className='flex flex-col gap-2 mt-4'>
           <label className='input-label'>CONTENT</label>
           <textarea
               type='text'
               className='text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded'
               placeholder='content'
               rows={10}
               value={content}
               onChange={(e) => {setContent(e.target.value)}}
           />
         </div>
 
         <div className='mt-3'>
           <label className='input-label'>TAGS</label>
           <TagInput tags={tags} setTags={setTags} />
         </div>
 
         {error && <p className='text-red-500 text-xs pt-4'>{error}</p>} 

         <button className='bg-blue-500 text-white font-medium mt-5 p-3 rounded' onClick={handleAddNote}>
           ADD
         </button>
       </div>
       </div>
    )
}

export default AddEditNotes;
