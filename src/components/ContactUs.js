import React from 'react'

export default function ContactUs() {
  return (
    <div>
    <section
      className="page-title overflow-hidden text-center bg-contain animatedBackground"
      data-bg-img="images/pattern/08.png"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <h1 className="title">Contact Us</h1>
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                {/* <li className="breadcrumb-item"><a href="#">Contact</a>
        </li> */}
                <li className="breadcrumb-item active" aria-current="page">
                  Contact Us
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="page-title-pattern">
        <img className="img-fluid" src="images/bg/06.png" alt="" />
      </div>
    </section>

    <div className="page-content">
      <section className="contact-1" data-bg-img="images/pattern/02.png">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7">
              <div className="section-title mb-2">
                <h6>Get In Touch</h6>
                <h2>Contact Us</h2>
              </div>
              <div className="contact-main">
                <form
                  id="contact-form"
                  className="row"
                  method="post"
                  action="http://themeht.com/loptus/html/php/contact.php"
                >
                  <div className="messages"></div>
                  <div className="form-group col-md-6">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required="required"
                      data-error="Name is required."
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required="required"
                      data-error="Valid email is required."
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      id="form_phone"
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Phone"
                      required="required"
                      data-error="Phone is required"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group col-md-12">
                    <textarea
                      id="form_message"
                      name="message"
                      className="form-control"
                      placeholder="Message"
                      rows="4"
                      required="required"
                      data-error="Please,leave us a message."
                    ></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="col-md-12">
                    <button className="btn btn-theme btn-radius">
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 ml-auto sm-mt-5">
              <ul className="contact-info list-unstyled">
                <li className="mb-4">
                  <i className="flaticon-location"></i>
                  <span>Address:</span>
                  <p className="mb-0">203, Royal Square,</p>
                  <p className="mb-0">Near VIP Circle,</p>
                  <p className="mb-0">Utran,Surat.</p>
                  <p className="mb-0">Gujarat-394101,India</p>
                </li>
                <li className="mb-4">
                  <i className="flaticon-email"></i>
                  <span>Email</span>
                  <a href="mailto:info@webroidsolutions.com">
                    {" "}
                    info@webroidsolutions.com
                  </a>
                </li>
                <li className="mb-4">
                  <i className="flaticon-call"></i>
                  <span>Phone:</span>
                  <a href="tel:+919081816812">+91-9081816812</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="o-hidden p-0">
        <div className="container-fluid p-0">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe
                        width="600"
                        height="500"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?ll=21.2331719,72.864181&q=Royal Square&t=&z=19&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                      ></iframe>
                      <a
                        rel="nofollow"
                        href="https://couponpeeps.com/cyberghost-coupon-codes/"
                      >
                        coupon for cyberghost
                      </a>
                    </div>
                    {/* <style>.mapouter{position:relative;text-align:right;height:500px;width:1550px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:1550px;}</style> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  )
}
