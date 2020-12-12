import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div>
        <main id="main">
          {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
          </div>
          <div className="row" data-aos="fade-in">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="icofont-google-map" />
                  <h4>Location:</h4>
                  <p>Raebareli, UttarPradesh <br />
                   229001</p>
                </div>
                <div className="email">
                  <i className="icofont-envelope" />
                  <h4>Email:</h4>
                  <p>saumyasanjay08@gmail.com</p>
                </div>
                <div className="linkdein">
                  <i className="icofont-envelope" />
                  <h4>Linkdein:</h4>
                  <p>saumya-sanjay-srivastava</p>
                </div>
                
              </div>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <iframe src="" frameBorder={0} style={{border: 0, width: '200%', height: '500px'}} allowFullScreen />

              
            </div>
          </div>
        </div>
      </section>{/* End Contact Section */}
        </main>
      </div>
        );
  }
}
