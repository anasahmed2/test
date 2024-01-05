import "./style.css"
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';
import MainTesttimonial from '../TestimonailCombine'
import Hero from '../../component/Hero'
import ResponsiveAppBar from '../../component/Navbar'
import { StatusBandDetail, StatusData, StatusBandProjectDetail, ProjectMandata, SimpleProject, TestimonailData } from '../../Data'
import { Status, StatusBand } from '../../component/Status'
import { ProjectmanCard } from '../../component/Cards'
import Bannar from '../../component/Bannar/index.'
import Footer from '../../Footer'
import Testimonial from "../../component/Testimonial"
import Carousel from "../../component/Carousel"

function Home() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className='main'>
      <ResponsiveAppBar />
      <div className='HeroMin scroll-div' id='hero'>
        <Hero />
      </div>
      <div className='statusBand'>
        {StatusBandDetail.map((value, index) => <StatusBand key={index} {...value} />)}
      </div>
      <MainTesttimonial />
      {TestimonailData.map((value, index) => <Testimonial key={index} {...value} />)}
      <div className='statusCantainer'>
        <div className='statusHeadingMain'>
          <h1 data-aos="fade" data-aos-duration="500" data-aos-easing="ease-in">What We Have Offer<span className="blue-dot">.</span></h1>
          <div className="bottom-line" data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in"></div>
        </div>
        <div className='StatusCard'>
          {StatusData.map((value, index) => <Status key={index} {...value} />)}

        </div>
        <div className='carouselMain'>
          <div className='carouselHeading'>
            <h1 data-aos="fade" data-aos-duration="500" data-aos-easing="ease-in">Proudly Collaborating With Companies Like <span className="blue-dot">...</span></h1>
            <div className="under-line" data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease-in"></div>
          </div>

          <div className="carousalMain">
            <Carousel StatusBandProjectDetail={StatusBandProjectDetail} />
          </div>

          <div className='projectmangHeading'>
            <h1 data-aos="fade" data-aos-duration="500" data-aos-easing="ease-in">We Collaborate with<span className="blue-dot">:</span></h1>
            <div className="under-line" data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in"></div>

          </div>
        </div>
      </div>

      <div className='ProjectManImg'>
        {ProjectMandata.map((value, index) => <ProjectmanCard key={index} {...value} />)}
      </div>
      <div className='GetStartBtn'>
        <div className='resultBand' data-aos="flip-down" data-aos-easing="ease-in"
          data-aos-duration="500">
          <h1>Efficient Process <span className="blue-text">+</span> The Right People <span className="blue-text">=</span> Accelerated Profits</h1>
        </div>
      </div>

      <div className='bannarSection'>
        <Bannar />
      </div>
      <div className='footerMain'>
        <Footer />
      </div>
    </div>
  )
}

export default Home