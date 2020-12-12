import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
     <div>
        <main id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>About</h2>
             
            </div>
            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img src="assets/img/hero-bg.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>Web Developer &amp; Coder  .</h3>
                
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="icofont-rounded-right" /> <strong>Birthday:-</strong> 31 March 2001</li>
                      <li><i className="icofont-rounded-right" /> <strong>Website:-</strong>saumyaportfolio.herokuapp.com</li>
                      <li><i className="icofont-rounded-right" /> <strong>Email:-</strong> saumyasanjay08@gmail.com </li>
                      <li><i className="icofont-rounded-right" /> <strong>City:-</strong>Raebareli, Uttar Pradesh</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="icofont-rounded-right" /> <strong>Age:-</strong> 19</li>
                      <li><i className="icofont-rounded-right" /> <strong>College:-</strong> Lovely Professional University</li>
                      <li><i className="icofont-rounded-right" /> <strong>Degree:-</strong> B.Tech (CSE Hons.)</li>
                      <li><i className="icofont-rounded-right" /> <strong>Freelance:-</strong> Available</li>
                    </ul>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>{/* End About Section */}
        {/* ======= Facts Section ======= */}
        
        {/* ======= Skills Section ======= */}
      <section id="skills" className="skills section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Skills</h2>
           
          </div>
          <div className="row skills-content">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="progress">
                <span className="skill">HTML <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">CSS <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">Bootstrap <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">React.js <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              
              <div className="progress">
                <span className="skill">C/C++<i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">Data Structures &amp; Algorithms  <i className="val">55%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">Python  <i className="val">70%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">My-Sql <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
              <div className="progress">
                <span className="skill">Problem Solving <i className="val">60%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Skills Section */}
        </main>
      </div>
     
    );
  }
}
