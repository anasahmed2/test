import React, { useEffect } from 'react'
import "./style.css"
import 'aos/dist/aos.css';
import Aos from 'aos';

function ProjectmanCard({image, field}) {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className='proCardContainer' data-aos="zoom-out" data-aos-easing="linear"
        data-aos-duration="1500" >
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