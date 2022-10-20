import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <section className="page-title overflow-hidden text-center grey-bg bg-contain animatedBackground" data-bg-img="images/pattern/08.png">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-12">
        <h1 className="title">About Us</h1>
        <nav aria-label="breadcrumb" className="page-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link>
            </li>
           
            <li className="breadcrumb-item active" aria-current="page">About Us</li>
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
              <img className="img-fluid box-shadow radius w-100" src="images/about/04.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="image-block">
              <img className="img-fluid box-shadow radius w-100" src="images/about/05.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-6 sm-mt-3">
            <div className="image-block">
              <img className="img-fluid box-shadow radius w-100" src="images/about/06.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="image-block">
              <img className="img-fluid box-shadow radius w-100" src="images/about/07.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
        <div className="section-title mb-3">
          <h6>About Us</h6>
          <h2>We iusto Creative Digital Agency, We Provide professional Web page.</h2>
        </div>
        <p className="text-black">Deos et accusamus et iusto odio dignissimos qui blanditiis praesentium voluptatum dele corrupti quos dolores et quas molestias a orci facilisis rutrum.</p>
        <ul className="custom-li list-unstyled list-icon-2 my-3 d-inline-block">
          <li>Design must be functional</li>
          <li>Futionality must into</li>
          <li>Aenean pellentes vitae</li>
          <li>Mattis effic iturut magna</li>
          <li>Lusce enim nulla mollis</li>
          <li>Phasellus eget felis</li>
        </ul> <a className="btn btn-theme" href="#"><span>Learn More</span></a>
      </div>      
    </div>
  </div>
</section>



<section className="pt-0">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-6">
        <div className="counter style-2">
          <img className="img-fluid" src="images/counter/01.png" alt="" /> <span className="count-number" data-to="2304" data-speed="10000">2304</span>
          <h5>Project Done</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 mt-5 mt-sm-0">
        <div className="counter style-2">
          <img className="img-fluid" src="images/counter/02.png" alt="" /> <span className="count-number" data-to="2304" data-speed="10000">2304</span>
          <h5>Success Rate</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 mt-5 mt-md-0">
        <div className="counter style-2">
          <img className="img-fluid" src="images/counter/03.png" alt="" /> <span className="count-number" data-to="2304" data-speed="10000">2304</span>
          <h5>Awards</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-6 mt-5 mt-md-0">
        <div className="counter style-2">
          <img className="img-fluid" src="images/counter/04.png" alt="" /> <span className="count-number" data-to="2304" data-speed="10000">2304</span>
          <h5>Happy Client</h5>
        </div>
      </div>
    </div>
  </div>
</section>




<section className="overflow-hidden dark-bg custom-pb-18 animatedBackground" data-bg-img="images/pattern/06.png">
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-lg-8 col-md-12">
        <div className="section-title mb-0">
          <h6>SUCCESS STORIES</h6>
          <h2 className="title">Our Case Study</h2> 
          <p className="mb-0 text-white">Deos et accusamus et iusto odio dignissimos qui blanditiis praesentium voluptatum dele corrupti quos dolores et quas molestias.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="overflow-hidden pt-0 custom-mt-10 position-relative z-index-1">
  <div className="container-fluid p-0">
    <div className="row">
      <div className="col-lg-12 col-md-12">
        <div className="owl-carousel owl-center" data-items="4" data-md-items="2" data-sm-items="2" data-center="true" data-dots="false" data-nav="true" data-autoplay="true">
          <div className="item">
            <div className="cases-item">
              <div className="cases-images">
                <img className="img-fluid" src="images/case-studies/01.jpg" alt="" />
              </div>
              <div className="cases-description">
                <h5><a href="case-studies-single.html">Digital Marketing</a></h5>
                <span>Digital</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="cases-item">
              <div className="cases-images">
                <img className="img-fluid" src="images/case-studies/02.jpg" alt="" />
              </div>
              <div className="cases-description">
                <h5><a href="case-studies-single.html">Web & Mobile Apps</a></h5>
                <span>Digital</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="cases-item">
              <div className="cases-images">
                <img className="img-fluid" src="images/case-studies/03.jpg" alt="" />
              </div>
              <div className="cases-description">
                <h5><a href="case-studies-single.html">Traffic Management</a></h5>
                <span>Digital</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="cases-item">
              <div className="cases-images">
                <img className="img-fluid" src="images/case-studies/04.jpg" alt="" />
              </div>
              <div className="cases-description">
                <h5><a href="case-studies-single.html">Seo Optimization</a></h5>
                <span>Digital</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="cases-item">
              <div className="cases-images">
                <img className="img-fluid" src="images/case-studies/05.jpg" alt="" />
              </div>
              <div className="cases-description">
                <h5><a href="case-studies-single.html">Marketing Financing</a></h5>
                <span>Digital</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="cases-item">
              <div className="cases-images">
                <img className="img-fluid" src="images/case-studies/06.jpg" alt="" />
              </div>
              <div className="cases-description">
                <h5><a href="case-studies-single.html">SEO Analiysis</a></h5>
                <span>Digital</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="pt-0">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="ht-clients d-flex flex-wrap align-items-center text-center">
          <div className="clients-logo">
            <img className="img-fluid" src="images/client/07.png" alt="" />
          </div>
          <div className="clients-logo">
            <img className="img-fluid" src="images/client/08.png" alt="" />
          </div>
          <div className="clients-logo">
            <img className="img-fluid" src="images/client/09.png" alt="" />
          </div>
          <div className="clients-logo">
            <img className="img-fluid" src="images/client/10.png" alt="" />
          </div>
          <div className="clients-logo">
            <img className="img-fluid" src="images/client/11.png" alt="" />
          </div>
          <div className="clients-logo">
            <img className="img-fluid" src="images/client/12.png" alt="" />
          </div>
          <div className="clients-logo">
            <img className="img-fluid" src="images/client/12.png" alt="" />
          </div>
          <div className="clients-logo">
            <img className="img-fluid" src="images/client/12.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="grey-bg position-relative text-center overflow-hidden">
  <div className="pattern-3">
    <img className="img-fluid rotateme" src="images/pattern/03.png" alt="" />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-12 mx-auto">
        <div className="section-title">
          <h6>Service</h6>
          <h2 className="title">We’r Provided Best Digital Marketing Services!</h2> 
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="featured-item text-center">
          <div className="featured-icon">
            <img className="img-fluid" src="images/feature/04.png" alt="" />
          </div>
          <div className="featured-title">
            <h5>Digital Marketing</h5>
          </div>
          <div className="featured-desc">
            <p>Design must be functional, and futionality must translated into, and futionality must translated into.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 sm-mt-3">
        <div className="featured-item text-center">
          <div className="featured-icon">
            <img className="img-fluid" src="images/feature/05.png" alt="" />
          </div>
          <div className="featured-title">
            <h5>Content marketing</h5>
          </div>
          <div className="featured-desc">
            <p>Design must be functional, and futionality must translated into, and futionality must translated into.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 md-mt-3">
        <div className="featured-item text-center">
          <div className="featured-icon">
            <img className="img-fluid" src="images/feature/06.png" alt="" />
          </div>
          <div className="featured-title">
            <h5>Market analysis</h5>
          </div>
          <div className="featured-desc">
            <p>Design must be functional, and futionality must translated into, and futionality must translated into.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-3">
        <div className="featured-item text-center">
          <div className="featured-icon">
            <img className="img-fluid" src="images/feature/07.png" alt="" />
          </div>
          <div className="featured-title">
            <h5>Email Marketing</h5>
          </div>
          <div className="featured-desc">
            <p>Design must be functional, and futionality must translated into, and futionality must translated into.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-3">
        <div className="featured-item text-center">
          <div className="featured-icon">
            <img className="img-fluid" src="images/feature/08.png" alt="" />
          </div>
          <div className="featured-title">
            <h5>Link Building</h5>
          </div>
          <div className="featured-desc">
            <p>Design must be functional, and futionality must translated into, and futionality must translated into.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mt-3">
        <div className="featured-item text-center">
          <div className="featured-icon">
            <img className="img-fluid" src="images/feature/09.png" alt="" />
          </div>
          <div className="featured-title">
            <h5>Quick Support</h5>
          </div>
          <div className="featured-desc">
            <p>Design must be functional, and futionality must translated into, and futionality must translated into.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="bg-contain" data-bg-img="images/pattern/02.png">
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-lg-8 col-md-12">
        <div className="section-title">
          <h6>Creative Team</h6>
          <h2 className="title">Meet Our Expert team member will ready for your service</h2> 
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-12">
        <div className="team-member">
          <div className="team-images">
            <img className="img-fluid" src="images/team/01.jpg" alt="" />
          </div>
          <div className="team-description"> <span>Manager</span>
            <h5><a href="team-single.html">Jemy Lusto</a></h5> 
            <div className="team-social-icon">
              <ul>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a>
                </li>
                <li><a href="#"><i className="fab fa-twitter"></i></a>
                </li>
                <li><a href="#"><i className="fab fa-google-plus-g"></i></a>
                </li>
                <li><a href="#"><i className="fab fa-linkedin-in"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
        <div className="team-member active">
          <div className="team-images">
            <img className="img-fluid" src="images/team/02.jpg" alt="" />
          </div>
          <div className="team-description"> <span>Manager</span>
            <h5><a href="team-single.html">Jemy Lusto</a></h5> 
            <div className="team-social-icon">
              <ul>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a>
                </li>
                <li><a href="#"><i className="fab fa-twitter"></i></a>
                </li>
                <li><a href="#"><i className="fab fa-google-plus-g"></i></a>
                </li>
                <li><a href="#"><i className="fab fa-linkedin-in"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
        <div className="team-member">
          <div className="team-images">
            <img className="img-fluid" src="images/team/03.jpg" alt="" />
          </div>
          <div className="team-description"> <span>Manager</span>
            <h5><a href="team-single.html">Jemy Lusto</a></h5> 
            <div className="team-social-icon">
              <ul>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a>
                </li>
                <li><a href="#"><i className="fab fa-twitter"></i></a>
                </li>
                <li><a href="#"><i className="fab fa-google-plus-g"></i></a>
                </li>
                <li><a href="#"><i className="fab fa-linkedin-in"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="grey-bg bg-contain bg-pos-r" data-bg-img="images/bg/02.png">
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-lg-8 col-md-12">
        <div className="section-title">
          <h6>Testimonial</h6>
          <h2 className="title">You Can See our clients feedback What You Say?</h2> 
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="owl-carousel" data-items="1" data-autoplay="true">
          <div className="item">
            <div className="testimonial style-2">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="testimonial-img info-img">
                    <img className="img-fluid leftRight" src="images/testimonial/01.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 ms-auto mt-5 mt-lg-0">
                  <div className="testimonial-content">
                    <div className="testimonial-quote"><i className="flaticon-quotation"></i>
                    </div>
                    <p>Professional recommended and great experience, Nam pulvinar vitae neque et porttitor, Praesent sed nisi eleifend, Consectetur adipisicing elit, sed do eiusmodas temporo incididunt</p>
                    <div className="testimonial-caption">
                      <h5>Lana Roadse</h5>
                      <label>CEO of Loptus</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial style-2">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="testimonial-img info-img">
                    <img className="img-fluid leftRight" src="images/testimonial/01.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 ms-auto mt-5 mt-lg-0">
                  <div className="testimonial-content">
                    <div className="testimonial-quote"><i className="flaticon-quotation"></i>
                    </div>
                    <p>Professional recommended and great experience, Nam pulvinar vitae neque et porttitor, Praesent sed nisi eleifend, Consectetur adipisicing elit, sed do eiusmodas temporo incididunt</p>
                    <div className="testimonial-caption">
                      <h5>Lana Roadse</h5>
                      <label>CEO of Loptus</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial style-2">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="testimonial-img info-img">
                    <img className="img-fluid leftRight" src="images/testimonial/01.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 ms-auto mt-5 mt-lg-0">
                  <div className="testimonial-content">
                    <div className="testimonial-quote"><i className="flaticon-quotation"></i>
                    </div>
                    <p>Professional recommended and great experience, Nam pulvinar vitae neque et porttitor, Praesent sed nisi eleifend, Consectetur adipisicing elit, sed do eiusmodas temporo incididunt</p>
                    <div className="testimonial-caption">
                      <h5>Lana Roadse</h5>
                      <label>CEO of Loptus</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-lg-8 col-md-12">
        <div className="section-title">
          <h6>Blog</h6>
          <h2 className="title">Read our latest news</h2>
          <p className="mb-0">Deos et accusamus et iusto odio dignissimos qui blanditiis praesentium voluptatum dele corrupti quos dolores et quas molestias.</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-12">
        <div className="post style-2">
          <div className="post-image">
            <img className="img-fluid h-100 w-100" src="images/blog/01.jpg" alt=""/>
          </div>
          <div className="post-desc">
            <div className="post-date">23 <span>November 2018</span>
            </div>
            <div className="post-title">
              <h5><a href="blog-details.html">The Powerfull look for best in 2018</a></h5>
            </div>
            <p>Phasellus eget purus id felis dignissim convallis Suspendisse et augue dui gravida</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
        <div className="post style-2">
          <div className="post-image">
            <img className="img-fluid h-100 w-100" src="images/blog/02.jpg" alt=""/>
          </div>
          <div className="post-desc">
            <div className="post-date">23 <span>November 2018</span>
            </div>
            <div className="post-title">
              <h5><a href="blog-details.html">Loptus It's Awesome, We need your help</a></h5>
            </div>
            <p>Phasellus eget purus id felis dignissim convallis Suspendisse et augue dui gravida</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
        <div className="post style-2">
          <div className="post-image">
            <img className="img-fluid h-100 w-100" src="images/blog/03.jpg" alt=""/>
          </div>
          <div className="post-desc">
            <div className="post-date">23 <span>November 2018</span>
            </div>
            <div className="post-title">
              <h5><a href="blog-details.html">We Become Best sale marketer in a year!</a></h5>
            </div>
            <p>Phasellus eget purus id felis dignissim convallis Suspendisse et augue dui gravida</p>
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
}
