import "./events.css"
import Footer from "../../components/footer/Footer"
export default function Events() {
      return (
            <>
            <section className="events">
                  <section className="container">
                        <section className="section-header">
                              <h2>
                                    Events
                              </h2>
                        </section>
                        <section className="boxs">
                              <section className="box" data-aos="zoom-in-up">
                                    <img src="https://localmedia.org/wp-content/uploads/2021/06/events-1.png" alt="" />
                                    <section className="title">
                                          <section>
                                                <h3>Scientific Day</h3>
                                          </section>
                                          <section>
                                                <p>Scientific Day for the Academic Year 2024-2025 in Cooperation with the Baheya Breast Cancer Foundation.</p>
                                          </section>
                                          <section>
                                                <i className="fa-solid fa-clock"></i>
                                                <p>16/12 - 9:30AM to 2:00PM</p>
                                          </section>
                                          <section>
                                                <i className="fa-solid fa-location-dot"></i>
                                                <p>مجدي ابو ريان</p>
                                          </section>
                                          <section className="links">
                                          <a href="/scientificDayForm"><i className="fa-solid fa-ticket"></i> Book Now</a>
                                          <a href="#"><i className="fa-solid fa-download"></i> Agenda</a>
                                          </section>
                                    </section>
                              </section>
                        </section>
                  </section>
            </section>
            <Footer />
            </>
            
      )
}
