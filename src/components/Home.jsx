import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Home = () => {

  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [serachParams, setSearchParams] = useSearchParams('');

  const pastesId = serachParams.get('pastesId');
  
  function createPaste() {
    
    if (pastesId) {
      // update existing paste 
    } else {
      // create new paste
    }
  }
  return (
    <div>
      <div className='flex flex-row items-center gap-3 p-3'>
      <input
      className='rounded-2xl border-gray-300 bg-black mt-4 p-2 pl-4 min-w-100'
        type="text" 
        placeholder="Enter Title here"
        value={title}
        onChange={(e) => setTitle((e.target.value))}
       />

       <button
       className='rounded-2xl border-gray-300 bg-black mt-4 p-2 '
       onClick={createPaste}
       >
        {
        pastesId 
        ? 'Update Paste'
        : 'Create Paste'
        }
       </button>

       </div>

       <div
       className='flex flex-col mt-4'>
        <textarea 
        className='rounded-2xl border-gray-300 bg-black mt-4 p-5 min-w-100 min-h-140'
        placeholder="Write your note here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}

        />
       </div>

       
      
      
    </div>
  )
}

export default Home