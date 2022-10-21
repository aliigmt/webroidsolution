import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
    <div className="page-wrapper-homepage">
      <section
        className="fullscreen-banner p-0 banner overflow-hidden"
        data-bg-img="images/pattern/01.png"
      >
        <div className="insideText">Webroid Solutions</div>
        <div className="align-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12 order-lg-1 position-relative">
                <div className="mouse-parallax">
                  <div className="bnr-img1 animated fadeInLeft delay-4 duration-4">
                    <img
                      className="img-fluid rotateme"
                      src="images/banner/05.png"
                      alt=""
                    />
                  </div>
                  <img
                    className="img-fluid bnr-img2 animated zoomIn delay-5 duration-4"
                    src="images/banner/Daco_4765402.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-7 col-md-12 mt-5 mt-lg-0">
                <h3
                  className="mb-4 wow bounceInRight"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  Welcome To{" "}
                  <span className="font-w-5" style={{ color: "red" }}>
                    {" "}
                    WEBROID SOLUTIONS{" "}
                  </span>
                </h3>
                <h1
                  className="mb-4 wow bounceInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  Solutions for building{" "}
                  <span className="font-w-5">a smart world!</span>{" "}
                </h1>

                <h4
                  className="md-1 lead wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  We are a outcome-focused and result-conscious organization
                  that offers a complete portfolio of Web Application &
                  Mobile Application development services.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content section-two">
        <section className="position-relative">
          <div className="container-fluid px-lg-3 px-md-8 px-3">
            <div className="row align-items-center">
              <div
                className="col-lg-5 bg-contain bg-pos-l"
                data-bg-img="images/testimonial/10.png"
              >
                <div className="round-animation">
                  <img
                    className="img-fluid"
                    src="images/testimonial/10.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-5 col-md-12 me-auto mt-5 mt-lg-0 ps-lg-11">
                <div className="section-title mb-4">
                  <h2 className="title">About Us</h2>
                  <p className="mb-5">
                    WebRoid Solutions - We're focused to provide reliable,
                    quality and the best IT services accross the globe. We
                    always want to be customer centric and achieve the best
                    place in the industry!
                  </p>
                </div>
                <ul className="list-unstyled list-icon-3">
                  <li className="mb-2">
                    <i className="fas fa-check"></i> + Projects
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check"></i> + Our Clients
                  </li>
                  <li>
                    <i className="fas fa-check"></i>99 % Success Rate
                  </li>
                  <Link className="btn btn-theme mt-5" to="aboutus">
                    Learn More
                  </Link>
                </ul>
                <div className="white-bg box-shadow radius px-4 py-4 mt-5">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="counter">
                        {" "}
                        <i className="flaticon-development"></i>
                        <span
                          className="count-number"
                          data-to="100"
                          data-speed="1000"
                        >
                          100
                        </span>
                        <h5>Success</h5>
                      </div>
                    </div>
                    <div className="col-sm-6 mt-5 mt-sm-0">
                      <div className="counter">
                        {" "}
                        <i className="flaticon-user"></i>
                        <span
                          className="count-number"
                          data-to="50"
                          data-speed="1000"
                        >
                          50
                        </span>
                        <h5>Happy Clients</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grey-bg position-relative text-center position-three">
          <div className="pattern-3">
            <img
              className="img-fluid rotateme"
              src="images/pattern/03.png"
              alt=""
            />
          </div>
          <div className="container section-three">
            <div className="row">
              <div className="col-lg-8 col-md-12 mx-auto">
                <div className="section-title">
                  <h2 className="title">WHAT WE DO</h2>
                  {/* <p className="mb-5">WebRoid Solutions - We're focused to provide reliable, quality and the best IT services accross the globe. We always want to be customer centric and achieve the best place in the industry!</p> */}
                  <p className="mb-5">
                    We Offer All Kind Of Web Design & Development And Mobile
                    Application Development Solutions And Maintenance.
                  </p>
                </div>

                {/* <div className="section-title">
      <h6>Service</h6>
      <h2 className="title">We’r Provided Best Digital Marketing Services!</h2> 
    </div> */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="featured-item text-center">
                  <div className="featured-icon">
                    <img
                      className="img-fluid"
                      src="images/feature/mobile.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>IPhone Application Development</h5>
                  </div>
                  <div className="featured-desc">
                    <Link className="btn btn-theme" to="services">
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 md-mt-3">
                <div className="featured-item text-center">
                  <div className="featured-icon">
                    <img
                      className="img-fluid"
                      src="images/feature/web.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Website Design & Development</h5>
                  </div>
                  <div className="featured-desc">
                    <Link className="btn btn-theme" to="services">
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
                <div className="featured-item text-center">
                  <div className="featured-icon">
                    <img
                      className="img-fluid"
                      src="images/feature/mobile.png"
                      alt=""
                    />
                  </div>
                  <div className="featured-title">
                    <h5>Android Application Development</h5>
                  </div>
                  <div className="featured-desc">
                    <Link className="btn btn-theme" to="services">
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  )
}
