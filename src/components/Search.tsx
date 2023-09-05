import React from 'react'
import CharityList from './CharityList'
import { useParams } from 'react-router-dom'

function Search() {
  const {searchTerm} = useParams();
  
  return (
    <div>
      <h1 className='py-5'>
        Search results for: {searchTerm}
      </h1>
      <CharityList/>
    </div>
  )
}

export default Search