import React from 'react'

const Header = () => {
  return (
    <div>
    <header id="site-header" className="header">
      <div id="header-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand logo" href="/">
                  <img id="logo-img" className="img-center" src="images/logo.png" alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                  aria-expanded="false" aria-label="Toggle navigation"> <span></span>
                  <span></span>
                  <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav ml-auto mr-auto ">
                    <li className="nav-item active" data-toggle="hover">
                      <a className="nav-link active" href="/" role="button" aria-haspopup="true" aria-expanded="false">Home
                      </a>
                    </li>
                    <li className="nav-item " data-toggle="hover">
                      <a className="nav-link" href="aboutus.html" role="button" aria-haspopup="true"
                        aria-expanded="false">About Us
                      </a>
                    </li>
                    <li className="nav-item" data-toggle="hover">
                      <a className="nav-link" href="services.html" role="button" aria-haspopup="true"
                        aria-expanded="false">Services
                      </a>
                    </li>
                    <li className="nav-item" data-toggle="hover">
                      <a className="nav-link" href="career.html" role="button" aria-haspopup="true"
                        aria-expanded="false">Career
                      </a>
                    </li>
                    <li className="nav-item" data-toggle="hover">
                      <a className="nav-link" href="contactus.html" role="button" aria-haspopup="true"
                        aria-expanded="false">Contact Us
                      </a>
                    </li>


                  </ul>
                </div>
                <div className="right-nav align-items-center d-flex justify-content-end list-inline">
                  <div className="search">

                  </div> <a href="#" className="ht-nav-toggle"><span></span></a>
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

export default Header
