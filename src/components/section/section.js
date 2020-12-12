import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
   return (
            <div>
             {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1>Alex Smith</h1>
        <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer" /></p>
      </div>
    </section>{/* End Hero */}
            </div>
     
        );
      }
    }
