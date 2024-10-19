import leader from "../../assets/images/leader.jpg"
import vice from "../../assets/images/vice.jpg"
import media from "../../assets/images/media.jpg"
import marketing from "../../assets/images/marketing.jpg"
import free from "../../assets/images/free-1.jpg"
import hr from "../../assets/images/hr.jpg"
import pr from "../../assets/images/pr-fr.jpg"
import design from "../../assets/images/design.jpg"
import logictic from "../../assets/images/logistic.jpg"
export default function Board() {
      return (
            <section className="board">
                  <section className="container">
                        <section className="section-header">
                              <h2>BSA Board</h2>
                        </section>
                        <section className="content">
                              <section className="leader">
                                    <section className="box leader-box">
                                          <img src={leader} alt="img" />
                                          <section className="text">
                                                <h2>Mohammad Gamal Almazahy</h2>
                                                <p>Team Leader</p>
                                          </section>
                                    </section>
                                    <section className="box leader-box">
                                          <img src={vice} alt="img" />
                                          <section className="text">
                                                <h2>Mohamed Yasser Elnagar</h2>
                                                <p>Team Vice Leader</p>
                                          </section>
                                    </section>
                              </section>
                              <section className="boxs">
                                    <section className="box">
                                          <img src={media} alt="img" />
                                          <section className="text">
                                                <h2>Badr Esam Elsadany</h2>
                                                <p>Media Leader</p>
                                          </section>
                                    </section>
                                    <section className="box">
                                          <img src={marketing} alt="img" />
                                          <section className="text">
                                                <h2>Nada Elsayed</h2>
                                                <p>Marketing Leader</p>
                                          </section>
                                    </section>
                                    <section className="box">
                                          <img src={free} alt="img" />
                                          <section className="text">
                                                <h2>Shaza Bedir</h2>
                                                <p>Free Member</p>
                                          </section>
                                    </section>
                                    <section className="box">
                                          <img src={hr} alt="img" />
                                          <section className="text">
                                                <h2>Mohamed Gamel AboEllil</h2>
                                                <p>HR Director Leader</p>
                                          </section>
                                    </section>
                                    <section className="box">
                                          <img src={pr} alt="img" />
                                          <section className="text">
                                                <h2>Nour Eldin Montaser</h2>
                                                <p>PR / FR Leader</p>
                                          </section>
                                    </section>
                                    <section className="box">
                                          <img src={design} alt="img" />
                                          <section className="text">
                                                <h2>Mohamed Ghrabawy</h2>
                                                <p>Design Leader</p>
                                          </section>
                                    </section>
                                    <section className="box">
                                          <img src={logictic} alt="img" />
                                          <section className="text">
                                                <h2>Karim Mohamed Kashkoush</h2>
                                                <p>Logistic Leader</p>
                                          </section>
                                    </section>
                              </section>
                        </section>
                  </section>
            </section>
      )
}
