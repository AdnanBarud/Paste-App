import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const ViewPaste = () => {

  const {id} = useParams();
  const allPastes = useSelector( (state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id) || { title: "", content: "" }

  console.log(paste);
  
  return (
    <div>
      <div className='flex flex-row items-center gap-3 '>
      <input
      className='rounded-2xl border-gray-300 bg-black mt-4 p-2 pl-4 min-w-100'
        type="text" 
        placeholder="Enter Title here"
        value={paste.title}
        disabled
        onChange={(e) => setTitle((e.target.value))}
       />

       
       </div>

       <div
       className='flex flex-col mt-4'>
        <textarea 
        className='rounded-2xl border-gray-300 bg-black mt-4 p-5 min-w-100 min-h-140'
        placeholder="Write your note here..."
        value={paste.content}
        disabled
        onChange={(e) => setValue(e.target.value)}

        />
       </div>
    </div>
  )
}

export default ViewPaste