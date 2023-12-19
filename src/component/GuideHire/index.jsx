import React from 'react'
import "./style.css"
import { Button } from '@mui/material'

function GuideHire() {
    return (
        <div className='unlimites'>
            <div className='hireDivider'>
                <div className='hireDetail'>
                    <h1>Ultimate Guide to Hiring Virtually</h1>
                    <p>We’ve placed 1000s of virtual teammates successfully, and learned TONS of tips and tricks along the way.</p>
                    <p>Want to ensure a successful hire for YOUR open position? Download our short e-book to learn our hiring secrets.</p>
                    <Button><p className='textStartBtn2'>Download Now</p></Button>
                </div>
            </div>
            <div className='hireDivider'>
                <div className="hireimageContainer">
                    <img src="https://rocketstation.com/wp-content/uploads/2022/08/secretguidetohiring-1.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default GuideHire