import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import whatsapp from "../../assets/images/whatsapp.png"
import facebook from "../../assets/images/facebook_2111398.png"
import instagram from "../../assets/images/instagram.png"
import youtube from "../../assets/images/youtube.png"
import tiktok from "../../assets/images/social-media.png"
import linkedin from "../../assets/images/linkedin.png"
import "./footer.css"
import moment from "moment"
export default function Footer() {
      return (
            <>
                  <section className="footer">
                        <section className="container">
                              <section className="footer-content">
                                    <section className="image" data-aos="zoom-in-up">
                                          <img src={logo} alt="logo" />
                                    </section>
                                    <section className="boxs">
                                          <section className="box">
                                                <h3>important links</h3>
                                                <ul>
                                                      <li><Link to="/events">events</Link></li>
                                                      <li><a href="/#about">about</a></li>
                                                      <li><a href="/#board">board</a></li>
                                                      <li><a href="/#contact">contact us</a></li>
                                                </ul>
                                          </section>
                                          <section className="box">
                                                <h3>social media</h3>
                                                <ul>
                                                      <li>
                                                            <Link target="_blank" to="https://wa.me/01092851943">
                                                                  <img src={whatsapp} alt="whatsapp" />
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link target="_blank" to="https://www.facebook.com/share/17rmjBuyj8/?mibextid=LQQJ4d">
                                                                  <img src={facebook} alt="facebook" />
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link target="_blank" to="https://www.instagram.com/bsaofficialacc/profilecard/?igsh=MW4yYjQ3dnk1b2R5NA==">
                                                                  <img src={instagram} alt="instagram" />
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link target="_blank" to="https://www.linkedin.com/company/biomedical-scientific-association/">
                                                                  <img src={linkedin} alt="instagram" />
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link target="_blank" to="https://youtube.com/@bsa5020?si=Hxd7Is159sHhYaRr">
                                                                  <img src={youtube} alt="youtube" />
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link target="_blank" to="https://www.tiktok.com/@bsaofficialacc?_t=8rzdsZBmT3A&_r=1">
                                                                  <img src={tiktok} alt="tiktok" />
                                                            </Link>
                                                      </li>
                                                </ul>
                                          </section>
                                    </section>
                              </section>
                        </section>
                  </section>
                  <section className="copy-right">
                        <p>© {moment().format('YYYY')} BSA Team. All rights reserved.</p>
                  </section>
            </>
      )
}
