import React from 'react'
import { useState } from 'react';
export default function ContactUs() {



  const [info, setNote] = useState({name:"", email:"", mobile:"", msg:""})

  const handleClick = (e)=>{
      e.preventDefault();

      // console.log(info);
      addNote(info.name, info.email, info.mobile,info.msg);
      
  }


  const onChange = (e)=>{
      setNote({...info, [e.target.name]: e.target.value})
  }

  const addNote = async (name,email,mobile,msg) => {
    await fetch('http://192.168.0.10/webroid/api.php', {
    method: 'POST',
    body: JSON.stringify({
       name: name,
       email: email,
       mobile: mobile,
       msg: msg,
    }),

  }
  )
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    //  setPosts((posts) => [data, ...posts]);
    //  setTitle('');
    //  setBody('');
  })
  .catch((err) => {
     console.log(err.message);
  });
    // const response = await fetch(`http://192.168.0.10/webroid/api.php`, {
    //   method: 'POST',
    //   body: JSON.stringify({name,email,mobile,message})
    // });

    //const note = await response.json();

    //console.log(note);
    // setNotes(notes.concat(note))
  }

  return (
    <div>
    <section
      className="page-title overflow-hidden text-center bg-contain animatedBackground"
      data-bg-img="images/pattern/08.png">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <h1 className="title">Contact Us</h1>
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
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
                <form>
                  <div className="messages"></div>
                  <div className="form-group col-md-6">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      onChange={onChange}
                      required="required"
                      data-error="Name is required."
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      onChange={onChange}
                      required="required"
                      data-error="Valid email is required."
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      id="mobile"
                      type="tel"
                      name="mobile"
                      className="form-control"
                      placeholder="Phone"
                      onChange={onChange}
                      required="required"
                      data-error="Phone is required"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="form-group col-md-12">
                    <textarea
                      id="msg"
                      name="msg"
                      className="form-control"
                      placeholder="Message"
                      rows="4"
                     onChange={onChange}
                      required="required"
                      data-error="Please,leave us a message."
                    ></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                  <div className="col-md-12">
                    <button className="btn btn-theme btn-radius" type="submit" onClick={handleClick}>
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
