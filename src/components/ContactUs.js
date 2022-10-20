import React, { Component } from 'react'

export default class ContactUs extends Component {
  render() {
    return (
      <div>
 <section className="page-title overflow-hidden text-center grey-bg bg-contain animatedBackground" data-bg-img="images/pattern/05.png">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-12">
        <h1 className="title">Contact Us</h1>
        <nav aria-label="breadcrumb" className="page-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item"><a href="#">Contact</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div className="page-title-pattern"><img className="img-fluid" src="images/bg/06.png" alt="" /></div>
</section>

<div className="page-content">


<section className="contact-1" data-bg-img="images/pattern/02.png">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 col-md-7">
        <div className="section-title mb-2">
          <h6>Get In Touch</h6>
          <h2 className="title">Contact Us</h2> 
        </div>
        <div className="contact-main">
          <form id="contact-form" className="row g-4 needs-validation" method="post" action="http://themeht.com/loptus/rtl/php/contact.php" novalidate>
            <div className="messages"></div>
            <div className="col-md-6">
              <input id="form_name" type="text" name="name" className="form-control" placeholder="Name" required />
              <div className="invalid-feedback">Name is required.</div>
            </div>
            <div className="col-md-6">
              <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required />
              <div className="invalid-feedback">Valid email is required.</div>
            </div>
            <div className="col-md-12">
              <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Phone" required />
              <div className="invalid-feedback">Phone is required</div>
            </div>
            <div className="col-md-12">
              <textarea id="form_message" name="message" className="form-control" placeholder="Message" rows="3" required ></textarea>
              <div className="invalid-feedback">Please,leave us a message.</div>
            </div>
            <div className="col-md-12">
              <button className="btn btn-theme btn-radius"><span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-5 col-md-5 ms-auto mt-5 mt-md-0">
        <ul className="contact-info list-unstyled">
          <li className="mb-4"><i className="flaticon-location"></i><span>Address:</span>
            <p>423B, Road Wordwide Country, USA</p>
          </li>
          <li className="mb-4"><i className="flaticon-email"></i><span>Email</span><a href="mailto:themeht23@gmail.com"> themeht23@gmail.com</a>
          </li>
          <li className="mb-4"><i className="flaticon-call"></i><span>Phone:</span><a href="tel:+912345678900">+91-234-567-8900</a>
          </li>
          <li><i className="flaticon-user"></i><span>Fax:</span><a href="tel:+912345678900">+91-234-567-8900</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


<section className="overflow-hidden p-0">
  <div className="container-fluid p-0">
    <div className="row align-items-center">
      <div className="col-md-12">
        <div className="map iframe-h-2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840108181602!2d144.95373631539215!3d-37.8172139797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1497005461921" allowfullscreen=""></iframe>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
      </div>
    )
  }
}
