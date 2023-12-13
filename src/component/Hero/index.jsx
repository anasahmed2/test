import React from 'react'
import "./style.css"
function Hero() {
    return (
        <div className='heroContainer'>
            <div className='heroMain'>
                <div className='heroHeading'>
                    <h1>Get Virtual Teammates Who Know <span className='YellowText'> Real Estate</span></h1>
                </div>
                <div className='heroDetail'>
                    <p>Rocket Station ensures you get affordable virtual teamates that KNOW the real estste industry and keeps themon track as you grow</p>
                </div>
                <div className='heroDetail'>
                    <button className='btnHero'>Click Here To See How</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;