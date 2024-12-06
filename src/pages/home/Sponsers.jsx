import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import philips from '../../assets/images/Phillips-Logo.png';
import siemens from '../../assets/images/siemens-healthineers.jpg';
import proengineer from '../../assets/images/proengineer.png';
import hsi from '../../assets/images/hsi_center_for_healthcare_training_consultation_logo.jpg';
import medica from '../../assets/images/medica-space.jpg';
import bmc from '../../assets/images/bmc.png';
import medicalSolution from '../../assets/images/medical solution.jpeg';
import mc from '../../assets/images/mc.jpeg';
import movere from '../../assets/images/movere.png';
import etbaly from '../../assets/images/etbaly.png';
import cec from '../../assets/images/cec.png';




export default function Sponsers() {
      return (
            <section className="sponsers">
                  <section className="section-header">
                        <h2>Partners</h2>
                  </section>
                  <section className="container">
                        <section className="image" data-aos="zoom-in-up">
                              <img src="https://ebmes.com/images/logo.svg" alt="img" />
                        </section>
                  </section>
                  <section className="section-header">
                        <h2>Previous Sponsor</h2>
                  </section>
                  <section className="container">
                        <Swiper
                              slidesPerView={3} // الافتراضي يكون 3 سلايدات
                              spaceBetween={30}
                              pagination={{
                                    clickable: true,
                              }}
                              autoplay={{
                                    delay: 0, // لجعل السلايد يعمل بدون توقف
                                    disableOnInteraction: false, // منع التوقف عند التفاعل
                              }}
                              speed={4500} // لجعل الانتقال بين السلايدات smooth
                              loop={true} // تكرار السلايدات بشكل مستمر
                              breakpoints={{
                                    640: {
                                          slidesPerView: 2, // لشاشات صغيرة (أقل من 640px) تظهر سلايدتين
                                          spaceBetween: 20,
                                    },
                              }}
                              modules={[Navigation, Autoplay]}
                              className="mySwiper"
                        >
                              <SwiperSlide><img src={philips} alt="image" /></SwiperSlide>
                              <SwiperSlide><img src={siemens} alt="image" /></SwiperSlide>
                              <SwiperSlide><img src={proengineer} alt="image" /></SwiperSlide>
                              <SwiperSlide><img src={hsi} alt="image" /></SwiperSlide>
                              <SwiperSlide><img src={medica} alt="image" /></SwiperSlide>
                              <SwiperSlide><img src={bmc} alt="image" /></SwiperSlide>
                              <SwiperSlide><img src={medicalSolution} alt="image" /></SwiperSlide>
                              <SwiperSlide><img src={mc} alt="image" /></SwiperSlide>
                              <SwiperSlide><img src={movere} alt="image" /></SwiperSlide>
                              <SwiperSlide><img src={etbaly} alt="image" /></SwiperSlide>
                              <SwiperSlide><img src={cec} alt="image" /></SwiperSlide>
                        </Swiper>
                  </section>
            </section>
      )
}
