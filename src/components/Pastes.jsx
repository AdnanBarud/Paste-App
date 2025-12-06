import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import toLowerCase from 'react'

const pastes = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const pastes = useSelector( (state) => state.paste.pastes );

  const filterPastes =  pastes.filter(
    (paste) => paste.title.toLowerCase().includes().searchTerm.toLowerCase()
  )
 
  return (
    <div>
      <input 
      className='rounded-2xl border-gray-300 bg-black mt-4 p-2 pl-4 min-w-[700px]'
      type="search"
      placeholder='search here'
      value={searchTerm}
      onChange={(e) => setSearchTerm(searchTerm)}
      />
    </div>
  )
}

export default pastes