import React from 'react'
import "./style.css"
function Testimonial({ heading, points, image, revers }) {
    return (
        <div className={` testiContainer ${revers && 'containerRevers'}`}>
            <div className='testidivider'>
                <div className='testtiHeading'>
                    <h1>{heading}</h1>
                </div>
                <div className='testtiHeading'>
                    {points.map((value, index) => <p key={index}>{value.point}</p>
                    )}
                    {/* <p>Rocket Station surrounds you with affordable virtual talent who know real estate.
                    </p>
                    <p>We’ll process map your open position, bring you a pool of top quality candidates ready to go, and we’ll make sure whoever you choose is prepped for success in any role you put them in.
                    </p>
                    <p>
                        Get a virtual team to handle everything you need done, so you can make an even bigger impact on your business.
                    </p> */}
                </div>
                <div className='testtiHeading'>
                    <button className='testiButton'>Hire AVA</button>
                </div>
            </div>
            <div className='testidivider'>
                <div className='testiImage'>
                    <img src={image} alt="gorup" />
                </div>
            </div>
        </div>
    )
}

export default Testimonial;