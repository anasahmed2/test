import "./style.css"
import React from 'react'
import MainTesttimonial from '../TestimonailCombine'
import Hero from '../../component/Hero'
import ResponsiveAppBar from '../../component/Navbar'
import { StatusBandDetail, StatusData, StatusBandProjectDetail, ProjectMandata, SimpleProject, TestimonailData } from '../../Data'
import { Status, StatusBand } from '../../component/Status'
import { ProjectmanCard, SimpleProcess } from '../../component/Cards'
import { Button } from '@mui/material'
import GuideHire from '../../component/GuideHire'
import Bannar from '../../component/Bannar/index.'
import Footer from '../../Footer'
import Testimonial from "../../component/Testimonial"

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
      {TestimonailData.map((value, index)=><Testimonial key={index} {...value}/>)}
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
            <h1>We Collaborate with:</h1>
          </div>
        </div>
      </div>

      <div className='ProjectManImg'>
        {ProjectMandata.map((value, index) => <ProjectmanCard key={index} {...value} />)}
      </div>
      <div className='simpleProcess'>
        <div className='statusHeadingMain'>
          <h1>3 Things You Can Count On</h1>
        </div>
        <div className='simpleCardShow'>
          {SimpleProject.map((value, index) => <SimpleProcess {...value} key={index} />)}
        </div>
      </div>

      <div className='GetStartBtn'>
        <Button><p className='textStartBtn'>Get Start Here</p></Button>
      </div>
      <div className='GetStartBtn'>
        <div className='resultBand'>
          <h1>GREAT PROCESS + GREAT PEOPLE = GREAT RESULTS</h1>
        </div>
      </div>
      <div className='GetStartBtn'>
        <GuideHire />
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