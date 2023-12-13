import React from 'react'
import "./style.css"

function Navbar() {
  return (
    <div className='navHead'>
      <div className='navlogo'><img src="https://rocketstation.com/wp-content/uploads/2022/03/Rocket-Station-logo.png" alt="" /></div>
      <div className='navLink'>
        <ul className='navItems'>
          <li>Home</li>
          <li>How Its Works</li>
          <li>Who We Srve</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;