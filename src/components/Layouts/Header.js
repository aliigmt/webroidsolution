import {
  Link
} from "react-router-dom";
import React, { Component } from 'react'
export default class Header extends Component {
  render() {
    return (
     <div>
      <header id="site-header" className="header">
        <div id="header-wrap">
          <div className="container">
            <div className="row">
              <div className="col">
                <nav className="navbar navbar-expand-lg">
                  <Link className="navbar-brand logo" to="/">
                    <img
                      id="logo-img"
                      className="img-fluid"
                      src="images/logo.png"
                      alt=""
                    />
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                     <span></span>
                     <span></span>
                     <span></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto position-relative">
                       <li className="nav-item dropdown">
                          <Link className="nav-link active" aria-current="page" to="/"> Home </Link>
                       </li>
                       <li className="nav-item dropdown">
                          <Link className="nav-link" to="/aboutus"> About Us </Link>
                       </li>

                       <li className="nav-item dropdown">
                          <Link className="nav-link " to="/services"> Services </Link>
                       </li>

             
                       <li className="nav-item dropdown">
                          <Link className="nav-link " to="/career"> Career </Link>
                       </li>

                       <li className="nav-item dropdown">
                          <Link className="nav-link " to="/contactus"> Contact Us </Link>
                       </li>
                   </ul>
                  </div>
                  <div className="right-nav align-items-center d-flex justify-content-end">
                    <Link to="/" className="ht-nav-toggle">
                      <span></span>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav id="ht-main-nav"> <a href="#" className="ht-nav-toggle active"><span></span></a>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img className="img-fluid side-logo mb-3" src="images/logo.png" alt=""/>
                        <p className="mb-5">WebRoid Solutions - We're focused to provide reliable, quality and the best IT
                            services accross the globe. We always want to be customer centric and achieve the best place
                            in the industry!</p>
                        <div className="form-info">
                            <h4 className="title">Contact info</h4>
                            <ul className="contact-info list-unstyled mt-4">
                                <li className="mb-4"><i className="flaticon-location"></i><span>Address:</span>
                                    <p className="mb-0">203, Royal Square,</p>
                                    <p className="mb-0">Near VIP Circle,</p>
                                    <p className="mb-0">Utran,Surat.</p>
                                    <p className="mb-0">Gujarat-394101,India</p>
                                </li>
                                <li className="mb-4"><i className="flaticon-call"></i><span>Phone:</span><a
                                        href="tel:+919081816812">+91-9081816812</a>
                                </li>
                                <li><i className="flaticon-email"></i><span>Email</span>
                                    <a href="mailto:info@webroidsolutions.com">
                                        info@webroidsolutions.com</a>
                                </li>
                            </ul>
                        </div>
                        <div className="social-icons social-colored mt-5">
                            <ul className="list-inline">
                                <li className="mb-2 social-facebook"><a href="#"><i className="fab fa-facebook-f"></i></a>
                                </li>
                                <li className="mb-2 social-twitter"><a href="#"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li className="mb-2 social-linkedin"><a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </li>
                                <li className="mb-2 social-gplus"><a href="#"><i className="fab fa-google-plus-g"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        
     </div>
    )
  }
}

