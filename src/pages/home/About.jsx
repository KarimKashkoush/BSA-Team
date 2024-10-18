import logo from '../../assets/images/logo.png'

export default function About() {
      return (
            <section className="about">
                  <section className="container">
                        <section className="section-header">
                              <h2>About</h2>
                        </section>
                        <section className="content">
                              <section className="image">
                                    <img src={logo} alt="logo-image" />
                              </section>
                              <section className="text">
                                    <h2>BSA Team</h2>
                                    <p>BSA (Biomedical Scientific Association of the Biomedical Engineering Department at Mansoura University) is a non - profit scientific association organized for a collective and public benefits.
                                          BSA was launched in 2015 by a group of students with the help of Dr. Sheriff Sayed Keshk. Dr. Mohammed Moawed is the supervisor of BSA and the executive manager of Biomedical Engineering Program, Faculty of Engineering, Mansoura University</p>
                              </section>
                        </section>
                  </section>
            </section>
      )
}
