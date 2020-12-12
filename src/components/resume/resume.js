import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div>
          <main id="main">
                {/* ======= Resume Section ======= */}
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
            
          </div>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Saumya Srivastava</h3>
          
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Lovely Professional University, Punjab - B.tech CSE(Hons.) </h4>
                <h5>2019 - 2023</h5>
                
              </div>
              <div className="resume-item">
                <h4>Lucknow Public School, Uttar Pradesh</h4>
                <h5>Grade 12 <br />
                     APRIL 2017 - MAY 2018<br />
                     Percentage:- 87.8
                 </h5>
                
              </div>
              <div className="resume-item">
                <h4>Lucknow Public School, Uttar Pradesh</h4>
                <h5>Grade 10 <br />
                     APRIL 2015 - MAY 2016 <br />
                     CGPA:- 10
                 </h5>
                
              </div>
              <div className="resume-item">
                <h4>Areas of Responsbility</h4>
                <h5>Buisness Development Head <br />
                     Sapphire(LPU)<br />
                     
                 </h5> <br />
                 <h5>Anchoring<br />
                     Lovely Professional University<br />
                     (Freshmen's Induction)
                     
                 </h5>
                
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <h3 className="resume-title">Certifications</h3>
              <div className="resume-item">
                <h4>Problem Solving (Basics)</h4>
                <h5>June-2020<br />
                HackerRank
                </h5>
                <p><em>See Credentials :- <a href=""></a></em></p>
           
              </div>
              <div className="resume-item">
                <h4>Python Data Structures</h4>
                <h5>University of Michigan (Coursera)<br />
                 Percentage:- 97%
                </h5>
                <p><em>See Credentials :- <a href=""></a></em></p>
           
              </div>
              <div className="resume-item">
                <h4>Programming for Everybody(Python)</h4>
                <h5>University of Michigan (Coursera)<br />
                Percentage:- 96%
                </h5>
                <p><em>See Credentials :- <a href=""></a></em></p>
           
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Resume Section */}
          </main>
      </div>
    );
  }
}
