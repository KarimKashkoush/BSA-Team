import "./events.css"
import Footer from "../../components/footer/Footer"
import reg from "../../assets/images/reg_open.png"

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
                              {/* <section className="box" data-aos="zoom-in-up">
                                    <img src={scientificDay} alt="image-events" />
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
                                                <p>Prof. Dr. Saeed Ashour Hall</p>
                                          </section>
                                          <section className="links">
                                          <a href="/scientificDayForm">Registration closed</a>
                                          <a href="#"><i className="fa-solid fa-download"></i>Agenda</a>
                                          </section>
                                    </section>
                              </section> */}

                              <section className="box" data-aos="zoom-in-up">
                                    <img src={reg} alt="image-events" />
                                    
                                    <section className="title">
                                          <section>
                                                <h3>9th Conference</h3>
                                          </section>
                                          <section>
                                                <p>9th Conference for the Academic Year 2024-2025.</p>
                                          </section>
                                          <section>
                                                <i className="fa-solid fa-clock"></i>
                                                <p>3/5/2025 - 8:30AM</p>
                                          </section>
                                          <section>
                                                <i className="fa-solid fa-location-dot"></i>
                                                <p>Faculty of Engineering - Prof. Dr. Magdy Abu Rayyan Hall</p>
                                          </section>
                                          <section className="links">
                                          <a href="/conference">Register</a>
                                          <a href="#"><i className="fa-solid fa-download"></i>Agenda</a>
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
