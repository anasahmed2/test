import React, { useEffect } from 'react'
import "./style.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function Testimonial({ heading, points, image, revers }) {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className={` testiContainer ${revers && 'containerRevers'}`}>
            <div className='testidivider'>
                <div className='testtiHeading'>
                    <h1  data-aos="fade"  data-aos-duration="500" data-aos-easing="ease-in">{heading} <span className="blue-text">!</span></h1>
                    <div className='borderLines' data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in"></div>
                </div>
                <div className='testtiHeading' >
                    {points.map((value, index) => <p data-aos="fade"  data-aos-duration="500" data-aos-easing="ease-in" key={index}>{value.point}</p>
                    )}
                </div>
                <div className='testtiHeading'>
                    <button data-aos="fade"  data-aos-duration="500" data-aos-easing="ease-in" className='testiButton'>Hire AVA</button>
                </div>
            </div>
            <div className='testidivider'>
                <div className='testiImage'>
                   
                    <img src={image} alt="gorup" data-aos="fade-left"  data-aos-duration="1000" data-aos-easing="ease-in-out" />
                </div>
            </div>
        </div>
    )
}

export default Testimonial;