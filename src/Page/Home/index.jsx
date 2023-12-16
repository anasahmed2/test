import React from 'react'
import "./style.css"
import MainTesttimonial from '../TestimonailCombine'
import Hero from '../../component/Hero'
import ResponsiveAppBar from '../../component/Navbar'
import { StatusBandDetail, StatusData, StatusBandProjectDetail, ProjectMandata } from '../../Data'
import { Status, StatusBand } from '../../component/Status'
import { ProjectmanCard } from '../../component/Cards'

function Home() {
  return (
    <div className='main'>
      <ResponsiveAppBar />
      <div className='HeroMin' id='hero'>
        <Hero />
      </div>
      <div className='statusBand'>
        {StatusBandDetail.map((value, index) => <StatusBand key={index} {...value} />)}
      </div>
      <MainTesttimonial />
      <div className='statusCantainer'>
        <div className='statusHeadingMain'>
          <h1>3 Things You Can Count On</h1>
        </div>
        <div className='StatusCard'>
          {StatusData.map((value, index) => <Status key={index} {...value} />)}

        </div>
        <div className='carouselMain'>
          <div className='carouselHeading'><h1>Proudly Partnering With Companies Like...</h1></div>
          <div className={`statusBand ${StatusBandProjectDetail && "bg-yellow"}`}>
            {StatusBandProjectDetail.map((value, index) => <StatusBand key={index} {...value} />)}
          </div>
          <div className='projectmangHeading'>
            <h1>Real Estate is our Specialty</h1>
          </div>
        </div>
      </div>

      <div className='ProjectManImg'>
        {ProjectMandata.map((value, index)=> <ProjectmanCard key={index} {...value}/>)}
        
      </div>
    </div>
  )
}

export default Home