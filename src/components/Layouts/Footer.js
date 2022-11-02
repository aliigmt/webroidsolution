import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
            <footer className="footer white-bg z-index-1 overflow-hidden bg-contain" data-bg-img="images/pattern/01.png">
        <div className="round-p-animation"></div>
        <div className="primary-footer">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-lg-4">
                <div className="ht-theme-info bg-contain bg-pos-r h-100 dark-bg text-white" data-bg-img="images/bg/02.png">
                  <div className="footer-logo">
                      <Link href="/">
                        <img className="img-center" src="images/logo.png" alt="" />
                      </Link>
                  </div>
                    <p className="mb-3">WebRoid Solutions - We're focused to provide reliable, quality and the best IT services accross the globe. We always want to be customer centric and achieve the best place in the industry!</p>
                     <a className="btn-simple" to="/aboutus"><span>Read More <i className="fas fa-long-arrow-alt-right"></i> </span></a>
                  <div className="social-icons social-border circle social-hover mt-5">
                    <h4 className="title">Follow Us</h4>
                    <ul className="list-inline">
                      {/* <li className="social-facebook"><a href="#"><i className="fab fa-facebook-f"></i></a>
                      </li> */}
                      <li className="social-instragram"><a href="https://www.instagram.com/webroid.solution/" target="_blank"><i className="fab fa-instagram"></i></a>
                      </li>
                      <li className="social-gplus"><a href="/" target="_blank"><i className="fab fa-google-plus-g"></i></a>
                      </li>
                      <li className="social-linkedin"><a href="https://www.linkedin.com/company/webroid-solutions/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                      </li>
                      {/* <li className="social-skype"><a to="#"><i className="fab fa-skype"></i></a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 py-8 px-5">
                <div className="row">
                  <div className="col-lg-6 col-md-6 footer-list">
                    <h4 className="title">Useful Links</h4>
                    <div className="row">
                      <div className="col-sm-5">
                      <ul className="list-unstyled">
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/aboutus">About Us</Link></li>
                          <li><Link to="/services">Services</Link></li>
                          <li><Link to="/career">Career</Link></li>
                          <li><Link to="/contactus">Contact Us</Link></li>
                      </ul>
                      </div>
                   </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mt-5 mt-md-0">
                    <h4 className="title">Contact us</h4>
                    <ul className="media-icon list-unstyled">
                        <li>
                          <p className="mb-0">203, Royal Square,</p>
                          <p className="mb-0">Near VIP Circle,</p>
                          <p className="mb-0">Utran,Surat.</p>
                          <p className="mb-0">Gujarat-394101,India</p>
                          </li>
                          <li><Link to="mailto:info@webroidsolutions.com">info@webroidsolutions.com</Link></li>
                        <li><Link to="tel:+919081816812">+91-9081816812</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="secondary-footer">
          <div className="container">
            <div className="copyright">
              <div className="row align-items-center">
    

                <div className="col-md-6"> 
                  <span>Copyright
                  {(new Date().getFullYear())}
                  <a href="http://www.webroidsolutions.com" style={{color: "red"}}> Webroid Solutions</a>. All Rights Reserved
                   </span>
                 </div>
                 <div className="col-md-6 text-md-right sm-mt-2"> <span>POWERED BY
                      <a href="http://www.webroidsolutions.com" style={{color: "red"}}> WebRoid Solutions</a></span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
