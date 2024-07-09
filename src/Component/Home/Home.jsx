import React, { useEffect } from 'react'
import './Home.css'


import video from '../../Assests/v4.mp4'
import {AiOutlineSwapRight} from 'react-icons/ai'

import pp1 from '../../Assests/pp1.jpg'
import pp2 from '../../Assests/pp2.jpg'
import pp3 from '../../Assests/pp3.jpg'
import pp4 from '../../Assests/pp4.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'




const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 1500});
  },[]);
  return (
    <>
      <div className='Home'>
        <div className='videoBg'>
          <video src={video} autoPlay loop muted></video>
        </div>

        <div className="sectionText">
          <h1 data-aos="fade-up">Unlock Your Travel Dreams With Us!</h1>
          <p data-aos="fade-up">
            Discover the world's most adventurous nature,
            life is so short for a trip.
          </p>
          <button className='btn flex' data-aos="fade-up">
            GET STARTED <AiOutlineSwapRight className='icon'/>
          </button>
        </div>

        <div className="popularplace">
          <div className="content">
            <h3 data-aos="fade-up">Popular Places</h3>
            <div className="image flex" data-aos="fade-up">
              <img src={pp1} alt="Destination Image" />
              <img src={pp2} alt="Destination Image" />
              <img src={pp3} alt="Destination Image" />
              <img src={pp4} alt="Destination Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Home
