import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import philips from '../../assets/images/Phillips-Logo.png'
import siemens from '../../assets/images/siemens-healthineers.jpg'
import proengineer from '../../assets/images/proengineer.png'
import hsi from '../../assets/images/hsi_center_for_healthcare_training_consultation_logo.jpg'
import medica from '../../assets/images/medica-space.jpg'
export default function Sponsers() {
      return (
            <section className="sponsers">
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
                        </Swiper>
                  </section>
            </section>
      )
}
