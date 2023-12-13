import React from 'react'
import "./style.css"
import Talent from '../../component/Talents'
import Testimonial from '../../component/Testimonial'
import { TestimonailData } from '../../Data'
 
function MainTesttimonial() {
  return (
    <div className='MainTestimonailContainer'>
      <Talent/>
      {TestimonailData.map((value , index)=><Testimonial {...value} key={index}/>)}
      
    </div>
  )
}

export default MainTesttimonial