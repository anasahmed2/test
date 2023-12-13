import React from 'react'
import "./style.css"
import Arrow from "../../assets/even-feel-icon.webp"
function Talent() {
    return (
        <div className='telContainer'>
            <div className='teldivider'>
                <div className='telFirstPart'>

                    <div className='telHeading'>
                        <h1>What If Your Business Had More Talent Ready To Go?</h1>
                    </div>
                    <div className='telHeading'>
                        <p>Finding virtual assistants that know the real estate industry is exhausting without the right process.</p>
                    </div>
                    <div className='telHeading'>
                        <p>What if you had a steady source of virtual talent that actually understood your real estate business…how much could you grow?</p>
                    </div>
                </div>
            </div>
            <div className='teldivider'>
                <div className='telSecondPart'>
                    <div className='telHeadingSecond'>
                        <h1>Ever Feel Like This?</h1>
                    </div>

                    <div className='telPoints'>
                        <div className='telIcon'>
                            <img src={Arrow} alt="" /></div>
                        <div className='telIconPoint'>

                            <p>You're drowning in work,
                                with no end in sight.</p>
                        </div>
                    </div>  <div className='telPoints'>
                        <div className='telIcon'>
                            <img src={Arrow} alt="" /></div>
                        <div className='telIconPoint'>

                            <p>You're drowning in work,
                                with no end in sight.</p>
                        </div>
                    </div>  <div className='telPoints'>
                        <div className='telIcon'>
                            <img src={Arrow} alt="" /></div>
                        <div className='telIconPoint'>

                            <p>You're drowning in work,
                                with no end in sight.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Talent