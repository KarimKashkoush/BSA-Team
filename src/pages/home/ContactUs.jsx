import Lottie from "lottie-react";
import contact from '../../assets/animation/contact-us.json'
export default function ContactUs() {
      return (
            <section className="contactus">
                  <section className="section-header">
                        <h2>Contact Us</h2>
                  </section>
                  <section className="container">
                        <section className="image">
                              <Lottie animationData={contact} className="animation" />
                        </section>
                        <form>
                              <section className="form-control">
                                    <input type="text" placeholder="Enter your name" required />
                              </section>
                              <section className="form-control">
                                    <input type="email" placeholder="Enter your email" required />
                              </section>
                              <section className="form-control">
                                    <input type="text" placeholder="Enter your phone number" required />
                              </section>
                              <section className="form-control">
                                    <textarea name="massege" id="massege" placeholder="Enter your massege"></textarea>
                              </section>
                              <button>Send</button>
                        </form>
                  </section>
            </section>
      )
}
