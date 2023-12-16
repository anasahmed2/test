import React from 'react'
import "./style.css"
function ProjectmanCard({image, field}) {
    return (
        <div className='proCardContainer'>
            <div className='proImg'>
                <img src={image} alt="" />
            </div>
            <div className='proheading'>
                <h1>{field}</h1>
            </div>
        </div>
    )
}

export { ProjectmanCard }