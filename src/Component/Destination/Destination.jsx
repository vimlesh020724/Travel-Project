import React, {useEffect} from 'react'
import './Destination.css'
import { MdLocationPin } from 'react-icons/md'
import { BsFillCreditCardFill } from 'react-icons/bs'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { TiLocation } from 'react-icons/ti'

import image1 from '../../Assests/image1.png';
import image2 from '../../Assests/image2.png';
import image3 from '../../Assests/image3.png';
import image4 from '../../Assests/image4.png';
import image5 from '../../Assests/image5.png';
import image6 from '../../Assests/image6.png';
import image7 from '../../Assests/image7.png';
import image8 from '../../Assests/image8.png';

import Aos from 'aos'
import 'aos/dist/aos.css'

const destinations = [
  {
    id: 1,
    img: image1,
    name: 'Seychelles Island',
    location: 'Indian Ocean',
    rating: 4.7,
  },

  {
    id: 2,
    img: image2,
    name: 'Yellow Tree on Lake With Brown Mountain',
    location: 'Indian Ocean',
    rating: 4.4,
  },

  {
    id: 3,
    img: image3,
    name: 'A Waterfalls Surrounded by Trees',
    location: 'Indian Ocean',
    rating: 4.5,
  },

  {
    id: 4,
    img: image4,
    name: 'Statue of libarty',
    location: 'United States',
    rating: 4.6,
  },

  {
    id: 5,
    img: image5,
    name: 'The Palace of Westminster',
    location: 'River Thames, England',
    rating: 4.8,
  },

  {
    id: 6,
    img: image6,
    name: 'Green Trees Near Body of Water',
    location: 'Germany',
    rating: 4.9,
  },

  {
    id: 7,
    img: image7,
    name: 'Golden Gate Bridge',
    location: 'Mill Valley, CA, United States',
    rating: 4.7,
  },

  {
    id: 8,
    img: image8,
    name: 'Cathedral Illustration',
    location: 'Berlin',
    rating: 4.6,
  },
]

const Destination = () => {
  useEffect(()=>{
    Aos.init({duration: 1500});
  },[]);
  return (
    <>
      <div className="destination section container">
        <div className="secContainer">
          <div className="secTitle">
            <span className="redText" data-aos="fade-up">EXPLORE NOW</span>
            <h3 data-aos="fade-up" >Find Your Dream Destination</h3>
            <p data-aos="fade-up" >Fill in the feilds below to find the best spot for your next tour.</p>
          </div>

          <div className="searchField grid">
            <div className="inputField flex" data-aos="fade-up">
              <MdLocationPin className='icon' />
              <input type="text" placeholder='Location' />
            </div>

            <div className="inputField flex" data-aos="fade-up">
              <BsFillCreditCardFill className='icon' />
              <input type="text" placeholder='Budget' />
            </div>

            <div className="inputField flex" data-aos="fade-up">
              <BsFillCalendarDateFill className='icon' />
              <input type="text" placeholder='Date' />
            </div>

            <button className='btn flex' data-aos="fade-up"><BiSearchAlt className='icon' />
              Search</button>
          </div>

          <div className="secMenu">
            <ul className='flex' data-aos="fade-up">
              <li className="active">All</li>
              <li>Recommended</li>
              <li>Beach</li>
              <li>Park</li>
              <li>Nature</li>
              <li>Mountain</li>

            </ul>
          </div>

          <div className="destinationContainer grid">
            {
              destinations.map((destination) =>{
                return (
                  <div className="singleDestination" key={destination.id} data-aos="fade-up">
                    <div className="imgDiv" data-aos="fade-up">
                      <img src={destination.img} alt="Destination Image" />
                      <div className="descInfo flex">
                        <div className="text">
                          <span className="name">
                            {destination.name}
                          </span>
                          <p className='flex'>
                            <TiLocation className='icon' />
                            {destination.location}
                          </p>
                        </div>
                        <span className="rating ">
                          {destination.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                )
              })
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default Destination
