import "./style.css"
import React, { useEffect } from 'react'
import Arrow from "../../assets/even-feel-icon.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Talent() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='telContainer'>
            <div className='teldivider'>
                <div className='telFirstPart'>
                    <div className='telHeading'
                        data-aos="fade-up"
                        data-aos-duration="1000">
                        <h1>What if you could supercharge your real estate sales without the hassle of
                            managing every detail ?</h1>
                    </div>
                    <div className='telHeading'
                        data-aos="fade-up"
                        data-aos-duration="1000">
                        <p>Picture having a dedicated team handling everything from lead
                            generation to final deal closure.</p>
                    </div>
                    <div className='telHeading'
                        data-aos="fade-up"
                        data-aos-duration="1000">
                        <p>Home Stream Solutions transforms the game. Our unique approach
                            means your real estate business can flourish. We take care of the entire sales process, ensuring
                            a smooth and efficient growth journey for you.</p>
                    </div>
                </div>
            </div>
            <div className='teldivider'>
                <div className='telSecondPart'>
                    <div className='telHeadingSecond'
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                        <h1>Our Vision<span className="blue-dot">.</span></h1>
                    </div>

                    <div className='telPoints'>
                        <div className='telIcon'>
                            <img src={Arrow} alt="" />
                        </div>
                        <div className='telIconPoint' data-aos="fade-left">
                            <p>Long Term Collaboration with Real Estate Business</p>
                        </div>
                    </div>
                    <div className='telPoints'>
                        <div className='telIcon'>
                            <img src={Arrow} alt="" />
                        </div>
                        <div className='telIconPoint' data-aos="fade-left">
                            <p>Ensure Profitability and Growth</p>
                        </div>
                    </div>  <div className='telPoints'>
                        <div className='telIcon'>
                            <img src={Arrow} alt="" />
                        </div>
                        <div className='telIconPoint' data-aos="fade-left">
                            <p>Brand Building and Marketing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Talent