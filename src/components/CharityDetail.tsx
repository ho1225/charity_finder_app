import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Nonprofit } from '../interface/search';

function CharityDetail() {
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();


    const [showFavoriteButton, setShowFavoriteButton] = useState(true)
    

    const handleOnClickTags = (tag: string) => {
        navigate(`/search/${tag}` )
    }
    
    const handleAddFavorites = (data: Nonprofit) =>{
        localStorage.setItem(data.name, JSON.stringify(data))
        setShowFavoriteButton(false)
        console.log("favorites added")
    }
    
    const handleRemoveFavorites = (data: Nonprofit) => {
        localStorage.removeItem(data.name)
        setShowFavoriteButton(true)
        console.log("favorites removed")
    }

    console.log(data)
    return (
        <div className='d-flex'>
            <div className='shadows bg-body-tertiary rounde me-5'>
                {
                    <div className='detailLeft'>
                        {data.coverImageUrl && <img className='charityDetailImage' src={data.coverImageUrl}/>}
                        
                        <h2>
                            {data.name}
                        </h2>
                        <div className='d-flex my-3'>
                            <span>
                                <img className='locationIcon me-2' src='https://charity-finder.vitochan.com/assets/location-846b6e1a.svg'/>
                                
                            </span>
                            <div>
                                {data.location ? data.location : "N/A"}
                            </div>
                        </div>
                        <div className='my-3'>
                                {data.description}
                        </div>
                    </div>
                }
            </div>
            <div className='detailRight shadow bg-body-tertiary rounded p-5'>
                <div className='d-flex flex-column'>
                    
                    {localStorage.getItem(data.name) === null && showFavoriteButton ?
                        <button type="button" className="btn btn-danger m-2" onClick={() => handleAddFavorites(data)}>Add to favorites</button>
                        :
                        <button type="button" className="btn btn-primary m-2" onClick={() => handleRemoveFavorites(data)}>Remove from favorites</button>
                    }
                    <a href={data.profileUrl} className="btn btn-success m-2" role="button">
                        Check it in Every.org
                    </a>
                </div>
                <h4 className='mt-5'>Tag:</h4>
                {
                    data.tags?.map((tag: string) => {
                        return(
                            <button type="button" className="btn btn-secondary btn-sm tagBtn m-2" key={tag} onClick={() => handleOnClickTags(tag)}>{tag}</button> 
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CharityDetail