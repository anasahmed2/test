import React, { useEffect } from 'react'
import "./style.css"
import { Button } from '@mui/material'
import 'aos/dist/aos.css';
import Aos from 'aos';
function Bannar() {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='bannadContainer'>
            <div className='bannarHeading'>
                <h1 data-aos="zoom-out" data-aos-easing="ease-in"
                    data-aos-duration="500"><span className="blue-text">Virtual Teammates</span>
                    To Fuel Your <span className="blue-text"> Success</span>.</h1>
                
            </div>
        </div>
    )
}

export default Bannar