import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div>
        <main id="main">
          {/* ======= Portfolio Section ======= */}
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Projects</h2>
            
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">Completed Projects</li>
                <li data-filter=".filter-card">On-Going Projects</li>
                
              </ul>
            </div>
          </div>
          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={100}>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/port-1.png" className="img-fluid" alt="" />
                <div >
                  <p>
                   <h5>Calculator Using React.js</h5> <br />

                  </p>
                </div>
              </div>
            </div>
           
            
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
                <img src="assets/img/portfolio/hero-bg.jpg" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <h1>cf</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
                <img src="assets/img/portfolio/stop.jpg" className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/stop.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="bx bx-plus" /></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>{/* End Portfolio Section */}
        </main>
      </div>
        );
  }
}
