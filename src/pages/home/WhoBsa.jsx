// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';


import slide1 from "../../assets/images/slide1.jpg"
import slide2 from "../../assets/images/slide2.jpg"
import slide3 from "../../assets/images/slide3.jpg"
import slide4 from "../../assets/images/slide4.jpg"
import slide11 from "../../assets/images/slide11.jpg"
import slide22 from "../../assets/images/slide22.jpg"
import slide33 from "../../assets/images/slide33.jpg"
import slide44 from "../../assets/images/slide33.jpg"

export default function WhoBsa() {
      return (
            <section className="who-bsa">
                  <section className="section-header">
                        <h2>Who Bsa Team</h2>
                  </section>
                  <section className="max-width">
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                              <SwiperSlide><img src={slide1} alt="slide-image" /></SwiperSlide>
                              <SwiperSlide><img src={slide2} alt="slide-image" /></SwiperSlide>
                              <SwiperSlide><img src={slide3} alt="slide-image" /></SwiperSlide>
                              <SwiperSlide><img src={slide4} alt="slide-image" /></SwiperSlide>
                        </Swiper>
                  </section>
                  <section className="min-width">
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                              <SwiperSlide><img src={slide11} alt="slide-image" /></SwiperSlide>
                              <SwiperSlide><img src={slide22} alt="slide-image" /></SwiperSlide>
                              <SwiperSlide><img src={slide33} alt="slide-image" /></SwiperSlide>
                              <SwiperSlide><img src={slide44} alt="slide-image" /></SwiperSlide>
                        </Swiper>
                  </section>
            </section>
      )
}
