import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <div>
    <section
      className="page-title overflow-hidden text-center bg-contain animatedBackground"
      data-bg-img="images/pattern/08.png"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <h1 className="title">About Us</h1>
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>

                <li className="breadcrumb-item active" aria-current="page">
                  About Us
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <div className="page-title-pattern"><img className="img-fluid" src="images/bg/06.png" alt="" /></div> */}
    </section>

    <div className="page-content">
      <section data-bg-img="images/pattern/02.png">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 order-lg-1">
              <div className="row">
                <div className="col-md-6">
                  <div className="image-block">
                    <img
                      className="img-fluid box-shadow radius w-100"
                      src="images/about/01.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-6 mt-4">
                  <div className="image-block">
                    <img
                      className="img-fluid box-shadow radius w-100"
                      src="images/about/02.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-6 sm-mt-3">
                  <div className="image-block">
                    <img
                      className="img-fluid box-shadow radius w-100"
                      src="images/about/03.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-6 mt-4">
                  <div className="image-block">
                    <img
                      className="img-fluid box-shadow radius w-100"
                      src="images/about/08.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
              <div className="section-title mb-3">
                <h2 className="title">About Us</h2>
                {/* <h2>We iusto Creative Digital Agency, We Provide professional Web page.</h2> */}
              </div>
              <p className="text-black">
                Our experienced and skilled teams are fully dedicated to go
                beyond client requirements. In addition to this, we provide
                SEO services to help our clients to get ranked higher on
                Search Engine Page Results.
              </p>

              <p className="text-black">
                There are many moments that we find in life when we
                experience something magnificent, something so wonderful
                that we stop and respect its radiance. Such moments are
                uncommon and hold no physical or natural esteem, however,
                are loved for the light and ponder they convey to our lives.
                This is the thing that we`re about. This is our main event.
                At Webroid Solutions, we comprehend this. We understand the
                requirement for you to be one of a kind, to be remarkable in
                your own right. And we have an entire cluster of team
                members who put stock in this.
              </p>
              {/* <ul className="custom-li list-unstyled list-icon-2 my-3 d-inline-block">
      <li>Design must be functional</li>
      <li>Futionality must into</li>
      <li>Aenean pellentes vitae</li>
      <li>Mattis effic iturut magna</li>
      <li>Lusce enim nulla mollis</li>
      <li>Phasellus eget felis</li>
    </ul> <a className="btn btn-theme" href="#"><span>Learn More</span></a> */}
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-3 col-sm-6">
              <div className="counter style-2">
                <img
                  className="img-center"
                  src="images/counter/01.png"
                  alt=""
                />
                <span
                  className="count-number"
                  data-to="50"
                  data-speed="1000"
                >
                  50
                </span>
                <h5>Project Done</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-3 col-sm-6 xs-mt-5">
              <div className="counter style-2">
                <img
                  className="img-center"
                  src="images/counter/02.png"
                  alt=""
                />
                <span
                  className="count-number"
                  data-to="99"
                  data-speed="1000"
                >
                  99%
                </span>
                <h5>Success Rate</h5>
              </div>
            </div>

            <div className="col-lg-4 col-md-3 col-sm-6 sm-mt-5">
              <div className="counter style-2">
                <img
                  className="img-center"
                  src="images/counter/04.png"
                  alt=""
                />
                <span
                  className="count-number"
                  data-to="20"
                  data-speed="1000"
                >
                  20
                </span>
                <h5>Happy Client</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  )
}
