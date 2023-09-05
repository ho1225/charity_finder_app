import React, { useState } from 'react'
import { Nonprofit } from '../interface/search';
import { useNavigate } from 'react-router-dom';

function FavoriteCharities() {
    const navigate = useNavigate();
    
    let favoriteItems: Nonprofit[] = []
    const allKeys = Object.keys(localStorage);
    allKeys.map(key => 
        favoriteItems.push(JSON.parse(localStorage.getItem(key)|| '')))
    

    const handleOnClickCharity = (data: Nonprofit) => {
        navigate(`../charity/${data.name}`, {state: data})
        
    }
    
    return (
        <div>
            <h1 className='py-5'>
                Favourite
            </h1>

            <div className='list d-flex flex-wrap'>
            {
                favoriteItems?.map((data: Nonprofit) => {
                    const logoUrl = data.logoUrl ? data.logoUrl : "https://charity-finder.vitochan.com/assets/donateLogo-96b99806.svg"
                    return(
                    <a
                        href=''
                        className='shadow listItem mt-5 mx-2 px-5 py-5 rounded-md bg-white shadow-lg hover:bg-[#FBFBFB]'
                        key={data.name}
                        onClick={() => handleOnClickCharity(data)}
                        >
                        <div className='d-flex'>
                        <span className='flex items-center text-lg font-semibold'>
                            <img src={logoUrl} className='me-3 logoIcon'/>
                        </span>
                        <div>
                            {data.name}
                        </div>
                        </div>
                        
                        <hr className="hr" />
                        <div className='d-flex'>
                        <span>
                            <img className='locationIcon me-2' src='https://charity-finder.vitochan.com/assets/location-846b6e1a.svg'/>
                            
                        </span>
                        <div>
                            {data.location ? data.location : "N/A"}
                        </div>
                        </div>
                        
                    </a>
                    )
                })
                }
            </div>
        </div>
    )
}

export default FavoriteCharities