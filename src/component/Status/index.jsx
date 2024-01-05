import "./style.css"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function StatusBand({ image, heading, color }) {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className={`statusBandContaier ${color && "statusBandContaiers"}`}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <div className='StatusBandIcon'>
                <img src={image} alt="" />
            </div>
            {heading && <div className='StatusBandHeading'>
                <h1>{heading}</h1>
            </div>}
        </div>
    )
}


function Status({ heading, detail, btnValue, image }) {
    return (
        <div className='statusContaier'>
            <div className='statusImg' data-aos="fade" data-aos-duration="500" data-aos-easing="ease-in">
                <img src={image} alt="" />
            </div>
            <div className='statusHead' data-aos="fade" data-aos-duration="500" data-aos-easing="ease-in">
                <h1>{heading}</h1>
            </div>
            <div className='statusHead' data-aos="fade" data-aos-duration="500" data-aos-easing="ease-in">
                <p>{detail}</p>
            </div>
            <div className='statusHead' data-aos="fade" data-aos-duration="500" data-aos-easing="ease-in"   >
                <button className='StatusBtn'>{btnValue}</button>
            </div>

        </div>
    )
}


export { Status, StatusBand }