import "./events.css"
import logo from "../../assets/images/logo.png"

function End() {
      return (
            <section className="end">
                  <section className="container">
                        <h2 data-aos="zoom-in-up">Registration closed</h2>
                        <section className="image" >
                              <img src={logo} alt="" />
                        </section>
                  </section>
            </section>
      )
}

export default End