import React from 'react'
import "./style.css"
import MainTesttimonial from '../TestimonailCombine'
import Hero from '../../component/Hero'
import Navbar from '../../component/Navbar'
import { StatusBandDetail, StatusData } from '../../Data'
import { Status, StatusBand } from '../../component/Status'

function Home() {
  return (
    <div className='main'>
      <Navbar />
      <div className='HeroMin'>
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
      </div>
    </div>
  )
}

export default Home