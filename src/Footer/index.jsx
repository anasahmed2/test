import React, { useState } from 'react';
import "./style.css"
import logo from "../assets/logo.png"

function Footer() {
  const [yaer, setYaer] = useState(new Date().getFullYear())
  return (
    <div className='footerContainer'>
      <div className='footerLogo' data-aos="fade" data-aos-easing="ease-in"
        data-aos-duration="700">
        <img src={logo} alt="" />
      </div>
      <div className='footerMail'>
        <p data-aos="fade" data-aos-easing="ease-in"
        data-aos-duration="1500">For more details or information, please email us at </p>
        <h5 data-aos="fade" data-aos-easing="ease-in"
        data-aos-duration="1500">support@homestreamsolutions.com</h5>
      </div>
      <div className='footerBody'>
        <div className='mediaIcon' data-aos="flip-up" data-aos-easing="ease-in"
          data-aos-duration="500">
          <img src="https://i.pinimg.com/originals/63/9b/3d/639b3dafb544d6f061fcddd2d6686ddb.png" alt="" />
        </div>
        <div className='mediaIcon' data-aos="flip-up" data-aos-easing="ease-in"
          data-aos-duration="500">
          <img src="https://i.pinimg.com/originals/b6/99/1c/b6991c27a36077737c09a40cb31ecdef.jpg" alt="" />
        </div>

        <div className='mediaIcon' data-aos="flip-up" data-aos-easing="ease-in"
          data-aos-duration="500">
          <img className='imgSize' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeIqqJlt6n7p1_vDyuzSngN0jHSntvv0e9sBnBR6JqmQ&s" alt="" />
        </div>
        <div className='mediaIcon' data-aos="flip-up" data-aos-easing="ease-in"
          data-aos-duration="500">
          <img className='imgSize' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6iCi4xN75MQj7bBpZxihQ8rXf6gMbfHMZOvSFcoX1Gg&s" alt="" />
        </div>
      </div>
      <div className='copyRight' data-aos="fade-right" data-aos-easing="linear"
        data-aos-duration="1500">
        <div className='copyRighttext'><p className='copyRightHeading'>© <span className='blue-text'>{yaer}</span> Home Stream Solutions</p></div>

        <div className='copyRighttext'><p>Developed by. <span className='copyRigthYellow'> AppXamine</span></p></div>
      </div>
    </div>
  )
}

export default Footer