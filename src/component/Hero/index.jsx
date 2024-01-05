import React, { useEffect } from 'react'
import "./style.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='heroContainer'>
            <div className='heroMain'>
                <div
                    className='heroHeading'
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="300"
                    data-aos-offset="0">

                    <h1> Unlock <span className='blue-text'>Profitable Growth</span> with <span className='blue-text'> Real Estate</span>  Virtual Sales Teams<span className='blue-text'>.</span></h1>
                </div>
                <div className='heroDetail'
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="300"
                    data-aos-offset="0" >
                    <p>Home Stream Solutions secures expert virtual sales teams for you. Accelerate
                        profits effortlessly, with no additional costs</p>
                </div>
                
            </div>
        </div>
    )
}

export default Hero;