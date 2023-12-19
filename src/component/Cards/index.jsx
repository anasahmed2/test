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
function SimpleProcess({image, title, description }) {
    return (
        <div className='SimpleProcess'>
           <img src={image} alt="" />
           <div className='SimpleProcessDetail'>
            <h1>{title}</h1>
            <p>{description}</p>
           </div>
        </div>
    )
}

export { ProjectmanCard,SimpleProcess }