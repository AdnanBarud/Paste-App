import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {

  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const pasteId = searchParams.get('pasteId');
  
  
  const allPastes = useSelector( (state) => state.paste.pastes);

  useEffect(() => {
    
    if (pasteId) {
      const paste = allPastes.find( (p) => p._id === pasteId );
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId])
  
  function createPaste() {
    const paste= {
      title: title,
      content: value,
      _id: pasteId
       ||  Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }
    if (pasteId) {
      // update existing paste 
      dispatch(updateToPastes(paste));
    } else {
      // create new paste
      dispatch(addToPastes(paste));
    }

    setTitle('');
    setValue('');
    setSearchParams({});
  }
  return (
    <div>
      <div className='flex flex-row items-center gap-3 '>
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
        pasteId 
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