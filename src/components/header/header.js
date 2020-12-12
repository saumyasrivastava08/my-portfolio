import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      {/*generated code*/}
      <div>
        {/* ======= Mobile nav toggle button ======= */}
        <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu" /></button>
        {/* ======= Header ======= */}
        <header id="header">
          <div className="d-flex flex-column">
            <div className="profile">
              <img src="assets/img/hero-bg.jpg" alt="" className="img-fluid rounded-circle" />
              <h1 className="text-light">Saumya Srivastava</h1>
              <div className="social-links mt-3 text-center">
              
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               
              </div>
            </div>
            <nav className="nav-menu">
              <ul>
                <li className="active"><a href="#info"><i className="bx bx-home" /> <span>Home</span></a></li>
                <li><a href="#about"><i className="bx bx-user" /> <span>About</span></a></li>
                <li><a href="#resume"><i className="bx bx-file-blank" /> <span>Resume</span></a></li>
                <li><a href="#portfolio"><i className="bx bx-book-content" /> Projects</a></li>
                <li><a href="#contact"><i className="bx bx-envelope" /> Contact</a></li>
              </ul>
            </nav>{/* .nav-menu */}
            <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu" /></button>
          </div>
        </header>{/* End Header */}
       
        
      </div>

      </React.Fragment>
    );
  }
}
