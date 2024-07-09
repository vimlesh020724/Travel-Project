import React, {useEffect} from 'react'
import './Reviews.css'

import {AiFillStar} from 'react-icons/ai'

import i1 from '../../Assests/i1.jpg'
import i2 from '../../Assests/i2.jpg'
import i3 from '../../Assests/i3.jpg'
import i4 from '../../Assests/i4.jpg'
import i5 from '../../Assests/i5.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Reviews = () => {
  useEffect(()=>{
    Aos.init({duration: 1500});
  },[]);
  return (
    <>
      <div className="review section container">
        <div className="secContainer grid">
          <div className="textDiv">
            <span className="redText" data-aos="fade-up">FROM OUR CLIENTS</span>
            <h3 data-aos="fade-up">Real Travel History From Our Beloved Clients</h3>
            <p data-aos="fade-up">
              By choosing us as their tour agency,
              customers can expect an enriching and
              enjoyable travel experience, filled
              with unforgettable memories that will
              last a lifetime.
            </p>
            <span className="stars flex" data-aos="fade-up">
              <AiFillStar className='icon' />
              <AiFillStar className='icon' />
              <AiFillStar className='icon' />
              <AiFillStar className='icon' />
              <AiFillStar className='icon' />
            </span>

            <div className="clientsImages flex">
              <img src={i1} alt="Client Image" data-aos="fade-up"/>
              <img src={i2} alt="Client Image" data-aos="fade-up"/>
              <img src={i3} alt="Client Image" data-aos="fade-up"/>  
              <img src={i4} alt="Client Image" data-aos="fade-up"/>
            </div>
          </div>

          <div className="imgDiv">
            <img src={i5} alt="Div image" data-aos="fade-down"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviews
