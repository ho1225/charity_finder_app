import React from 'react'
import CharityList from './CharityList'
import backgroundImage from '../assets/backgroundImage.jpg'

function HomePage() {
  return (
    <div>
      <img className='backgroundImage' src={backgroundImage}/>
      <CharityList />
    </div>
    
  )
}

export default HomePage