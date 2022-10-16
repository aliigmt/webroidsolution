import React from "react";

export default function Header() {
  return (
    <div>
      <header id="site-header" class="header">
        <div id="header-wrap">
          <div class="container">
            <div class="row">
              <div class="col">
                <nav class="navbar navbar-expand-lg">
                  <a class="navbar-brand logo" href="index.html">
                    <img
                      id="logo-img"
                      class="img-fluid"
                      src="images/logo.png"
                      alt=""
                    />
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto position-relative">
                       <li class="nav-item dropdown">
                          <a class="nav-link active" href="/" data-bs-toggle="dropdown"> Home </a>
                       </li>
                       <li class="nav-item dropdown">
                          <a class="nav-link " href="/" data-bs-toggle="dropdown">About Us </a>
                       </li>

                       <li class="nav-item dropdown">
                          <a class="nav-link " href="/" data-bs-toggle="dropdown">Services </a>
                       </li>

                       <li class="nav-item dropdown">
                          <a class="nav-link " href="/" data-bs-toggle="dropdown">Services </a>
                       </li>

                       <li class="nav-item dropdown">
                          <a class="nav-link " href="/" data-bs-toggle="dropdown">Career </a>
                       </li>

                       <li class="nav-item dropdown">
                          <a class="nav-link " href="/" data-bs-toggle="dropdown">Contact Us </a>
                       </li>
                   </ul>
                  </div>
                  <div class="right-nav align-items-center d-flex justify-content-end">
                      <div class="search">
                      <div class="search-content">
                        <div class="search-button">
                          <i class="fas fa-search"></i>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="ht-nav-toggle">
                      <span></span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav id="ht-main-nav"> <a href="#" class="ht-nav-toggle active"><span></span></a>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <img class="img-fluid side-logo mb-3" src="images/logo.png" alt=""/>
                        <p class="mb-5">WebRoid Solutions - We're focused to provide reliable, quality and the best IT
                            services accross the globe. We always want to be customer centric and achieve the best place
                            in the industry!</p>
                        <div class="form-info">
                            <h4 class="title">Contact info</h4>
                            <ul class="contact-info list-unstyled mt-4">
                                <li class="mb-4"><i class="flaticon-location"></i><span>Address:</span>
                                    <p class="mb-0">203, Royal Square,</p>
                                    <p class="mb-0">Near VIP Circle,</p>
                                    <p class="mb-0">Utran,Surat.</p>
                                    <p class="mb-0">Gujarat-394101,India</p>
                                </li>
                                <li class="mb-4"><i class="flaticon-call"></i><span>Phone:</span><a
                                        href="tel:+919081816812">+91-9081816812</a>
                                </li>
                                <li><i class="flaticon-email"></i><span>Email</span>
                                    <a href="mailto:info@webroidsolutions.com">
                                        info@webroidsolutions.com</a>
                                </li>
                            </ul>
                        </div>
                        <div class="social-icons social-colored mt-5">
                            <ul class="list-inline">
                                <li class="mb-2 social-facebook"><a href="#"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li class="mb-2 social-twitter"><a href="#"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li class="mb-2 social-linkedin"><a href="#"><i class="fab fa-linkedin-in"></i></a>
                                </li>
                                <li class="mb-2 social-gplus"><a href="#"><i class="fab fa-google-plus-g"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  );
}
