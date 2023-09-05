import { useState } from 'react'
import CharityList from './components/CharityList'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Search from './components/Search'
import CharityDetail from './components/CharityDetail'
import FavoriteCharities from './components/FavoriteCharities'

function App() {

  return (
    <>
    <div className='Navbar'>
      <Navbar/>
    </div>
    <div className='main'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/search/:searchTerm?' element={<Search />}></Route>
        <Route path='/charity/:charityName' element={<CharityDetail />} />
        <Route path='/favorites' element={<FavoriteCharities />}/>
      </Routes>
    </div>
    </>
  )
}

export default App
