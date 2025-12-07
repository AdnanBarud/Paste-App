import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { removeFromPastes } from '../redux/pasteSlice';



const pastes = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const pastes = useSelector( (state) => state.paste.pastes );

  const filterPastes =  pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
 
  // handlers for edit, copy, view, delete, share
  function handleEdit() {
    // implement edit functionality
     

  }
  function handleCopy(paste) {
    // implement copy functionality
    navigator.clipboard.writeText(paste?.content);
    toast.success('Copied to clipboard!');
  }
  function handleView() {
    // implement view functionality
  } 
  function handleDelete(pasteId) {
    // implement delete functionality
    dispatch(removeFromPastes(pasteId));
  } 
  function handleShare() {
    // implement share functionality
  }
  return (
    <div>
      <input 
      className='rounded-2xl border-gray-300 bg-black mt-4 p-2 pl-4 min-w-[700px]'
      type="search"
      placeholder='search here'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <div>

        {
        filterPastes.length > 0 
        && filterPastes.map( 
          (paste) => {
            return (
              <div className='border' key={paste._id}>
                <div>
                  {paste.title}
                </div>
                <div>
                  {paste.content}
                </div>
                <div>
                  <button >
                    <a href='/?pastes=${paste?._id}' >
                      Edit
                    </a>
                    
                  </button>
                  <button onClick={() => handleCopy(paste)}>
                    Copy
                  </button>
                  <button onClick={handleView}>
                    View
                  </button>
                  <button onClick={() => handleDelete(paste?._id)}>
                    Delete
                  </button>
                  <button onClick={handleShare}>
                    Share
                  </button>
                </div>

              </div>
              
            )
          }
        )
        }
      
      </div>
    </div>
  )
}

export default pastes