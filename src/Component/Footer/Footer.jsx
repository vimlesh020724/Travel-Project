import React, {useEffect} from 'react'
import './Footer.scss'
import { BiLogoMediumOld } from 'react-icons/bi'
import {BiLogoFacebook} from 'react-icons/bi'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 1500});
  },[]);
  return (
    <>
      <div className="footer">
        <div className="secContainer container grid">
          <div className="logoDiv">
            <div className="footerLogo" data-aos="fade-up">
              <BiLogoMediumOld className='icon' />
              <span>ORTAL-Trips</span>
            </div>
            <div className="socials flex" data-aos="fade-up">
              <BiLogoFacebook className='icon' />
              <BsTwitter className='icon' />
              <AiFillInstagram className='icon' />
            </div>
          </div>


          <div className="footerLinks" data-aos="fade-up"> 
            <span className="linkTitle">
              Information
            </span>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </div>

          <div className="footerLinks" data-aos="fade-up">
            <span className="linkTitle">
              Helpful Links
            </span>
            <li>
              <a href="#">Destnation</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Travel & Condition</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </div>

          <div className="footerLinks" data-aos="fade-up">
            <span className="linkTitle"> Contact Details</span>
            <span className="phone">+651 125 658</span>
            <span className="email">moontrips@outlook.com</span>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
