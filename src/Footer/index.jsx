import React from 'react';
import "./style.css"

function Footer() {
  return (
    <div className='footerContainer'>
      <div className='footerLogo'>
        <img src="https://rocketstation.com/wp-content/uploads/2022/03/Rocket-Station-logo.png" alt="" />
      </div>
      <div className='footerBody'>
        <div className='footerLinksContainer'>
          <ul className='footerListItems'>
            <li className='footerListHeading'>How It Works</li>
            <li className='listHover'> Process</li>
            <li className='listHover'>People</li>
            <li className='listHover'>Pricing</li>
          </ul>
        </div>
        <div className='footerLinksContainer'>
          <ul className='footerListItems'>
            <li className='footerListHeading'>Service Areas</li>
            <li className='listHover'> Property Management</li>
            <li className='listHover'>Investment</li>
            <li className='listHover'>Brokers & Agents</li>
            <li className='listHover'>Service Providers</li>
          </ul>
        </div>

        <div className='footerLinksContainer'>
          <ul className='footerListItems'>
            <li className='footerListHeading'>Contact Us</li>
            <li className='listHover'> Contact Us</li>
            <li className='listHover'>Blog  </li>
            <li className='listHover'>Podcast</li>
            <li className='listHover'>Press Releases</li>
            <li className='listHover'>FAQs    </li>
            <li className='listHover'>Career  </li>
          </ul>
        </div>
        <div className='footerLinksContainer'>
          <ul className='footerListItems'>
            <li className='footerListHeading'>Follow Us</li>
            <li className='listHover'> Contact Us</li>
            <li className='footerListHeading'>Email Us</li>
            <li className='listHover'>info@rocketstation.com</li>
          </ul>
        </div>
        <div className='footerLinksContainers'>
          <div className='footerRoundCirlcle'>
            <img src="https://rocketstation.com/wp-content/uploads/2022/03/Group-576.png" alt="" />
          </div>
        </div>
      </div>
      <div className='copyRight'>
        <div className='copyRighttext'><p className='copyRightHeading'>© 2022 Rocket Station</p></div>
        <div className='copyRighttext'><p>Privacy Policy</p></div>
        <div className='copyRighttext'><p>Terms & Conditions</p></div>
        <div className='copyRighttext'><p>Design by<span className='copyRigthYellow'> Republic Branding Co.</span> | Developed by<span  className='copyRigthYellow'> WiRe Innovation</span></p></div>
      </div>
    </div>
  )
}

export default Footer