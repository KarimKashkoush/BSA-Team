import Landing from "./Landing"
import About from "./About"

import './home.css'
import Board from "./Board"
import BsaFamily from "./BsaFamily"
import WhoBsa from "./WhoBsa"

export default function Home() {
      return (
            <section className="home">
                  <Landing />
                  <About />
                  <WhoBsa />
                  <Board />
                  <BsaFamily />
            </section>
      )
}
