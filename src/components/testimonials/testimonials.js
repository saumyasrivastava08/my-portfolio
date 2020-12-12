import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
       <div>
         <main id= "main">
         <section id="info" className="d-flex flex-column justify-content-center align-items-center">
        <div className="info-container" data-aos="fade-in">
          <h1>Saumya Srivastava</h1>
          <p>
        <br />

             I'm a Front-End Developer and a Little Coder!!<br />

         - 🌱 I’m currently working on React and I love Coding as well🤣<br />
            - 👯 I’m looking to collaborate with other creators<br />
           - 🥅 2020 Goals: Contribute more to Open Source projects <br />
- 🌱 I’m currently learning Node.js <br />
- 👯 I’m looking to collaborate on Open Source Projects<br />
- 😄 Pronouns: Richu<br />
- ⚡ Fun fact: I love making Reels on Instagram<br />


            
            
            </p>
        </div>
      </section>
         </main>
       </div>
        );
  }
}
