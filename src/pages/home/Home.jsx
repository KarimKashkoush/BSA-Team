import './home.css'

import Landing from "./Landing"
import About from "./About"
import Board from "./Board"
import BsaFamily from "./BsaFamily"
import WhoBsa from "./WhoBsa"
import Sponsers from "./Sponsers"
import ContactUs from "./ContactUs"
import Footer from '../../components/footer/Footer'
import ScrollTop from '../../components/scrollTop/ScrollTop'

export default function Home() {
      

      return (
            <section className={'home'}>
                  <ScrollTop />
                  <Landing />
                  <About />
                  <WhoBsa />
                  <Board />
                  <BsaFamily />
                  <Sponsers />
                  <ContactUs />
                  <Footer />
            </section>
      )
}
