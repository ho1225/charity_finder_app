import React, { useState } from 'react'
import '../../css/seach.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate(`search/${searchTerm}`)
    setSearchTerm("")
  }
  return (
    <nav className="navbar navbar-light bg-light fixed-top">
        <div className="container-fluid justify-content-between">
            <a className="navbar-brand ps-5" href="/">
                <img src="https://charity-finder.vitochan.com/assets/icon-98e2ff09.svg" width={40} height={36}></img>
                Charity Finder
            </a>

            <form className="d-flex pe-5">
                <input
                  className="form-control me-2" 
                  type="search" 
                  placeholder="Find a charity" 
                  aria-label="Search" 
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}  
                />
                <button 
                  className="btn btn-outline-success" 
                  type="submit"
                  onClick={handleSubmit}
                  >
                    Search
                </button>
            </form>

            <a className="pe-5" href="/favorites">
              <img src="https://charity-finder.vitochan.com/assets/heart-9fc34c01.svg" width={40} height={36}></img>
            </a>
        </div>
    </nav>
  )
}

export default Navbar