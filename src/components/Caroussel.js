import React from 'react'
import '../styles/Caroussel.css'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import mannequin from "../assets/mannequin.png";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
SwiperCore.use([Navigation]);

function Caroussel() {

  return (
    <Swiper autoplay={{ delay: 3000 }} className="caroussel">
      <SwiperSlide className='slide'>
          <div>
              <p className='text1'>Shop in style</p>
              <p className='text2'>You can explore ans shop many differnt collection
                  from various jackets here.</p>
              <img src={mannequin} alt="mannequin" className="mannequin"/>

          </div>


      </SwiperSlide>
      <SwiperSlide className='slide'>
        <p className='text1'>Shop in style</p>
        <p className='text2'>With this shop hompeage template</p>
      </SwiperSlide>
    </Swiper>
  )
}

export default Caroussel