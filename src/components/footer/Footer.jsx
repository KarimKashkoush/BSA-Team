import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import whatsapp from "../../assets/images/whatsapp.png"
import facebook from "../../assets/images/facebook_2111398.png"
import instagram from "../../assets/images/instagram.png"
import twitter from "../../assets/images/twitter.png"
import youtube from "../../assets/images/youtube.png"
import tiktok from "../../assets/images/social-media.png"
import "./footer.css"
import moment from "moment"
export default function Footer() {
      return (
            <>
                  <section className="footer">
                        <section className="container">
                              <section className="footer-content">
                                    <section className="image">
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
                                                            <Link to="/events">
                                                                  <img src={whatsapp} alt="whatsapp" />
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link to="/events">
                                                                  <img src={facebook} alt="facebook" />
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link to="/events">
                                                                  <img src={instagram} alt="instagram" />
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link to="/events">
                                                                  <img src={twitter} alt="twitter" />
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link to="/events">
                                                                  <img src={youtube} alt="youtube" />
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link to="/events">
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
