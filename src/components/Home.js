import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
<div className="page-wrapper-homepage">
<section className="fullscreen-banner p-0 banner overflow-hidden" data-bg-img="images/pattern/01.png">
  <div className="insideText">Webroid Solutions</div>
  <div className="align-center">
    <div className="container">
      <div className="row align-items-center">
      	<div className="col-lg-5 col-md-12 order-lg-1 position-relative">
          <div className="mouse-parallax">
            <div className="bnr-img1 animated fadeInLeft delay-4 duration-4">
              <img className="img-fluid rotateme" src="images/banner/05.png" alt=""/>
            </div>
            <img className="img-fluid bnr-img2 animated zoomIn delay-5 duration-4" src="images/banner/Daco_4765402.png" alt=""/>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 mt-5 mt-lg-0">
        <h3 className="mb-4 wow bounceInRight" data-wow-duration="1s" data-wow-delay="1s">
           Welcome To    <span className="font-w-5" style={{color: "red"}}> WEBROID SOLUTIONS </span></h3>
           <h1 className="mb-4 wow bounceInLeft" data-wow-duration="1s" data-wow-delay="1s">Solutions for building <span className="font-w-5">a smart world!</span> </h1>

           <h4 className="md-1 lead wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
                      We are a outcome-focused and result-conscious organization that offers a complete
                      portfolio of Web Application & Mobile Application development services.
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
      <div className="col-lg-5 bg-contain bg-pos-l" data-bg-img="images/testimonial/10.png">
        <div className="round-animation">
         <img className="img-fluid" src="images/testimonial/10.png" alt=""/>
        </div>
      </div>
      <div className="col-lg-5 col-md-12 me-auto mt-5 mt-lg-0 ps-lg-11">
        <div className="section-title mb-4">
          <h2 className="title">About Us</h2> 
          <p className="mb-5">WebRoid Solutions - We're focused to provide reliable, quality and the best IT services accross the globe. We always want to be customer centric and achieve the best place in the industry!</p>
        </div>
        <ul className="list-unstyled list-icon-3">
          <li className="mb-2"><i className="fas fa-check"></i> + Projects</li>
          <li className="mb-2"><i className="fas fa-check"></i> + Our Clients</li>
          <li><i className="fas fa-check"></i> % Success Rate</li>
        </ul>
        <div className="white-bg box-shadow radius px-4 py-4 mt-5">
          <div className="row">
            <div className="col-sm-6">
              <div className="counter"> <i className="flaticon-development"></i>
              <span className="count-number" data-to="100" data-speed="1000">100</span>
                <h5>Success</h5>
              </div>
            </div>
            <div className="col-sm-6 mt-5 mt-sm-0">
              <div className="counter"> <i className="flaticon-user"></i>
                <span className="count-number" data-to="50" data-speed="1000">50</span>
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
    <img className="img-fluid rotateme" src="images/pattern/03.png" alt=""/>
  </div>
  <div className="container section-three">
    <div className="row">
      <div className="col-lg-8 col-md-12 mx-auto">

      <div className="section-title">
          <h2 className="title">WHAT WE DO</h2> 
          {/* <p className="mb-5">WebRoid Solutions - We're focused to provide reliable, quality and the best IT services accross the globe. We always want to be customer centric and achieve the best place in the industry!</p> */}
          <p className="mb-5">We Offer All Kind Of Web Design & Development And Mobile Application Development Solutions And Maintenance.</p>

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
            <img className="img-fluid" src="images/feature/mobile.png" alt=""/>
          </div>
          <div className="featured-title">
            <h5>IPhone Application Development</h5>
          </div>
          <div className="featured-desc">
          <a className="btn btn-theme" href="#"><span>Learn More</span></a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 md-mt-3">
        <div className="featured-item text-center">
          <div className="featured-icon">
            <img className="img-fluid" src="images/feature/web.png" alt=""/>
          </div>
          <div className="featured-title">
            <h5>Website Design & Development</h5>
          </div>
          <div className="featured-desc">
          <a className="btn btn-theme" href="#"><span>Learn More</span></a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
        <div className="featured-item text-center">
          <div className="featured-icon">
            <img className="img-fluid" src="images/feature/mobile.png" alt=""/>
          </div>
          <div className="featured-title">
            <h5>Android Application Development</h5>
          </div>
          <div className="featured-desc">
          <a className="btn btn-theme" href="#"><span>Learn More</span></a>
          </div>
        </div>
      </div>


    </div>
  </div>
</section>

<section className="overflow-hidden p-0" data-bg-img="images/pattern/01.png">
  <div className="container text-center">
    <div className="row">
      <div className="col-lg-8 col-md-12 mx-auto">
        <div className="section-title">
          <h2 className="title">TECHNOLOGIES WE USE</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 col-md-12">
        <div className="portfolio-filter">
          <button data-filter="" className="is-checked">All</button>
          <button data-filter=".cat1">Web Development</button>
          <button data-filter=".cat2">Mobile Development</button>
          <button data-filter=".cat3">DataBase</button>
          <button data-filter=".cat4">Software</button>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid p-0">
    <div className="row">
      <div className="col-lg-12 col-md-12">
        
        <div className="grid row g-0 popup-gallery text-center">
          <div className="grid-sizer"></div>


        <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat4">
         <div className="featured-item text-center">
          <div className="technology featured-icon ">
            <img className="img-fluid12" src="images/img/jira.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
              <h4 className="animate-charcter">Jira</h4>
          </div>
          </div>
         </div>

         <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat4">
         <div className="featured-item text-center">
          <div className="technology featured-icon ">
            <img className="img-fluid12" src="images/img/git.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
              <h4 className="animate-charcter">Git</h4>
          </div>
          </div>
         </div>

         <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat4">
         <div className="featured-item text-center">
          <div className="technology featured-icon ">
            <img className="img-fluid12" src="images/img/google-cloud.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
              <h4 className="animate-charcter">Google Cloud</h4>
          </div>
          </div>
         </div>


         <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat4">
         <div className="featured-item text-center">
          <div className="technology featured-icon ">
            <img className="img-fluid12" src="images/img/aws.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
              <h4 className="animate-charcter">AWS</h4>
          </div>
          </div>
         </div>

         <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat4">
         <div className="featured-item text-center">
          <div className="technology featured-icon ">
            <img className="img-fluid12" src="images/img/xcode.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
              <h4 className="animate-charcter">XCode</h4>
          </div>
          </div>
         </div>
         <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat4">
         <div className="featured-item text-center">
          <div className="technology featured-icon ">
            <img className="img-fluid12" src="images/img/vcode.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
              <h4 className="animate-charcter">VS Code</h4>
          </div>
          </div>
         </div>

         <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat4">
         <div className="featured-item text-center">
          <div className="technology featured-icon ">
            <img className="img-fluid12" src="images/img/slack.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
              <h4 className="animate-charcter">Slack</h4>
          </div>
          </div>
         </div>

          <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat2">
         <div className="featured-item text-center">
          <div className="technology featured-icon ">
            <img className="img-fluid12" src="images/img/android.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
          <h4 className="animate-charcter">Android</h4>
          </div>
        </div>
      </div>

      <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat2">
         <div className="featured-item text-center">
          <div className="technology featured-icon ">
            <img className="img-fluid12" src="images/img/apple.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
          <h4 className="animate-charcter">Apple</h4>
          </div>
        </div>
      </div>


      <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat2">
         <div className="featured-item text-center">
          <div className="technology featured-icon ">
            <img className="img-fluid12" src="images/img/flutter.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
          <h4 className="animate-charcter">Flutter</h4>
          </div>
        </div>
      </div>

      <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat2">
         <div className="featured-item text-center">
          <div className="technology featured-icon ">
            <img className="img-fluid12" src="images/img/react.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
          <h4 className="animate-charcter">React Native</h4>
          </div>
        </div>
      </div>


      <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat1">
         <div className="featured-item text-center">
          <div className="technology featured-icon ">
            <img className="img-fluid12" src="images/img/laravel.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
          <h4 className="animate-charcter">Laravel</h4>
          </div>
        </div>
      </div>

      <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat1">
         <div className="featured-item text-center">
          <div className="technology featured-icon ">
            <img className="img-fluid12" src="images/img/php.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
          <h4 className="animate-charcter">PHP</h4>
          </div>
        </div>
      </div>


      <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat1">
         <div className="featured-item text-center">
          <div className="technology featured-icon ">
            <img className="img-fluid12" src="images/img/vuejs.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
          <h4 className="animate-charcter">Vue.js</h4>
          </div>
        </div>
      </div>

      <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat1">
         <div className="featured-item text-center">
          <div className="technology featured-icon ">
            <img className="img-fluid12" src="images/img/react.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
          <h4 className="animate-charcter">React.js</h4>
          </div>
        </div>
      </div>

      <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat1">
         <div className="featured-item text-center">
          <div className="technology featured-icon ">
            <img className="img-fluid12" src="images/img/nodejs.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
          <h4 className="animate-charcter">Node.js</h4>
          </div>
        </div>
      </div>


      <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat1">
         <div className="featured-item text-center">
          <div className="technology featured-icon ">
            <img className="img-fluid12" src="images/img/javascript.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
          <h4 className="animate-charcter">JavaScript</h4>
          </div>
        </div>
      </div>


      <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat1">
         <div className="featured-item text-center">
          <div className="technology featured-icon ">
            <img className="img-fluid12" src="images/img/jquery.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
          <h4 className="animate-charcter">JQuery</h4>
          </div>
        </div>
      </div>


          <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat3">
         <div className="featured-item text-center">
          <div className="technology featured-icon ">
            <img className="img-fluid12" src="images/img/mysql.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
          <h4 className="animate-charcter">MySql</h4>
          </div>
        </div>
      </div>


      <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat3">
         <div className="featured-item text-center">
          <div className="technology featured-icon">
            <img className="img-fluid12" src="images/img/firebase.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
         <h4 className="animate-charcter">FireBase</h4>
          </div>
        </div>
      </div>

      <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat3">
         <div className="featured-item text-center">
          <div className="technology featured-icon">
            <img className="img-fluid12" src="images/img/mongodb.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
         <h4 className="animate-charcter">MongoDB</h4>
          </div>
        </div>
      </div>

      <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat3">
         <div className="featured-item text-center">
          <div className="technology featured-icon">
            <img className="img-fluid12" src="images/img/sqlite.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
         <h4 className="animate-charcter">SQLite</h4>
          </div>
        </div>
      </div>


      <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat3">
         <div className="featured-item text-center">
          <div className="technology featured-icon">
            <img className="img-fluid12" src="images/img/realm.svg" alt=""/>
          </div>
          <div className="technology-featured-desc">
         <h4 className="animate-charcter">Realm</h4>
          </div>
        </div>
      </div>
          {/* <div className="grid-item cat3">
            <div className="portfolio-item">
              <img className="img-fluid w-100" src="images/project/01.jpg" alt=""/>
              <div className="portfolio-title"> <span>Branding</span>
                <h4>SEO Tracking Analiysis</h4>
              </div>
              <a className="popup-img" href="images/project/large/01.jpg"> <i className="flaticon-plus"></i>
              </a> <a className="popup-link" href="project-details.html">learn More</a> 
            </div>
          </div> */}
          {/* <div className="grid-item cat3">
            <div className="portfolio-item">
              <img className="img-fluid w-100" src="images/project/02.jpg" alt=""/>
              <div className="portfolio-title"> <span>Branding</span>
                <h4>SEO Tracking Analiysis</h4>
              </div>
              <a className="popup-img" href="images/project/large/02.jpg"> <i className="flaticon-plus"></i>
              </a> <a className="popup-link" href="project-details.html">learn More</a> 
            </div>
          </div>
          <div className="grid-item cat4 cat2">
            <div className="portfolio-item">
              <img className="img-fluid w-100" src="images/project/03.jpg" alt=""/>
              <div className="portfolio-title"> <span>Branding</span>
                <h4>SEO Tracking Analiysis</h4>
              </div>
              <a className="popup-img" href="images/project/large/03.jpg"> <i className="flaticon-plus"></i>
              </a> <a className="popup-link" href="project-details.html">learn More</a> 
            </div>
          </div>
          <div className="grid-item cat2 cat3">
            <div className="portfolio-item">
              <img className="img-fluid w-100" src="images/project/04.jpg" alt=""/>
              <div className="portfolio-title"> <span>Branding</span>
                <h4>SEO Tracking Analiysis</h4>
              </div>
              <a className="popup-img" href="images/project/large/04.jpg"> <i className="flaticon-plus"></i>
              </a> <a className="popup-link" href="project-details.html">learn More</a> 
            </div>
          </div>


          <div className="grid-item cat1 cat4">
            <div className="portfolio-item">
              <img className="img-fluid w-100" src="images/project/05.jpg" alt=""/>
              <div className="portfolio-title"> <span>Branding</span>
                <h4>SEO Tracking Analiysis</h4>
              </div>
              <a className="popup-img" href="images/project/large/05.jpg"> <i className="flaticon-plus"></i>
              </a> <a className="popup-link" href="project-details.html">learn More</a> 
            </div>
          </div>



          <div className="grid-item cat1 cat3">           
            <div className="portfolio-item">
              <img className="img-fluid w-100" src="images/project/06.jpg" alt=""/>
              <div className="portfolio-title"> <span>Branding</span>
                <h4>SEO Tracking Analiysis</h4>
              </div>
              <a className="popup-img" href="images/project/large/06.jpg"> <i className="flaticon-plus"></i>
              </a> <a className="popup-link" href="project-details.html">learn More</a> 
            </div>
          </div> */}


        </div>
      </div>
    </div>
  </div>
</section>


{/* <section className="animatedBackground" data-bg-img="images/pattern/05.png">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-5 col-md-12">
        <div className="section-title mb-0">
          <h6>Testimonial</h6>
          <h2 className="title">You Can See our clients feedback What You Say?</h2> 
          <p className="mb-0">Deos et accusamus et iusto odio dignissimos qui blanditiis praesentium voluptatum dele corrupti quos dolores et quas molestias.</p>
        </div>
      </div>
      <div className="col-lg-7 col-md-12 mt-5 mt-lg-0">
        <div className="owl-carousel" data-items="1" data-autoplay="true">
          <div className="item">
            <div className="testimonial">
              <div className="testimonial-img">
                <img className="img-fluid" src="images/thumbnail/01.png" alt=""/>
              </div>
              <div className="testimonial-content">
                <p>Professional recommended and great experience, Nam pulvinar vitae neque et porttitor, Praesent sed nisi eleifend, Consectetur adipisicing elit, sed do eiusmodas temporo incididunt</p>
                <div className="testimonial-caption">
                  <h5>Lana Roadse</h5>
                  <label>CEO of Loptus</label>
                </div>
              </div>
              <div className="testimonial-quote"><i className="flaticon-quotation"></i>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial">
              <div className="testimonial-img">
                <img className="img-fluid" src="images/thumbnail/01.png" alt=""/>
              </div>
              <div className="testimonial-content">
                <p>Professional recommended and great experience, Nam pulvinar vitae neque et porttitor, Praesent sed nisi eleifend, Consectetur adipisicing elit, sed do eiusmodas temporo incididunt</p>
                <div className="testimonial-caption">
                  <h5>Lana Roadse</h5>
                  <label>CEO of Loptus</label>
                </div>
              </div>
              <div className="testimonial-quote"><i className="flaticon-quotation"></i>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial">
              <div className="testimonial-img">
                <img className="img-fluid" src="images/thumbnail/01.png" alt=""/>
              </div>
              <div className="testimonial-content">
                <p>Professional recommended and great experience, Nam pulvinar vitae neque et porttitor, Praesent sed nisi eleifend, Consectetur adipisicing elit, sed do eiusmodas temporo incididunt</p>
                <div className="testimonial-caption">
                  <h5>Lana Roadse</h5>
                  <label>CEO of Loptus</label>
                </div>
              </div>
              <div className="testimonial-quote"><i className="flaticon-quotation"></i>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial">
              <div className="testimonial-img">
                <img className="img-fluid" src="images/thumbnail/01.png" alt=""/>
              </div>
              <div className="testimonial-content">
                <p>Professional recommended and great experience, Nam pulvinar vitae neque et porttitor, Praesent sed nisi eleifend, Consectetur adipisicing elit, sed do eiusmodas temporo incididunt</p>
                <div className="testimonial-caption">
                  <h5>Lana Roadse</h5>
                  <label>CEO of Loptus</label>
                </div>
              </div>
              <div className="testimonial-quote"><i className="flaticon-quotation"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
{/* <section className="grey-bg" data-bg-img="images/bg/02.png">
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-lg-8 col-md-12">
        <div className="section-title">
          <h6>Price Table</h6>
          <h2 className="title">Choose Your Pricing plan</h2>
          <p className="mb-0">Deos et accusamus et iusto odio dignissimos qui blanditiis praesentium voluptatum dele corrupti quos dolores et quas molestias.</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="tab text-center">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist"> <a className="nav-item nav-link active" id="nav-tab1" data-toggle="tab" href="#tab1-1" role="tab" aria-selected="true">Monthly</a>
              <a className="nav-item nav-link" id="nav-tab2" data-toggle="tab" href="#tab1-2" role="tab" aria-selected="false">Yearly</a>
            </div>
          </nav>
          <div className="tab-content px-0 pb-0" id="nav-tabContent">
            <div role="tabpanel" className="tab-pane fade show active" id="tab1-1">
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="price-table">
                    <div className="round-p-animation"></div>
                    <div className="price-header">
                      <h3 className="price-title">Starter</h3>
                    </div>
                    <img className="img-fluid my-4" src="images/price/01.png" alt=""/>
                    <div className="price-value">
                      <h2>$29<span>/Month</span></h2>
                    </div>
                    <div className="price-list">
                      <ul className="list-unstyled">
                        <li><i className="flaticon-tick"></i> 15 Analytics Compaign</li>
                        <li><i className="flaticon-tick"></i> Unlimited Site licenses</li>
                        <li><i className="flaticon-tick"></i> 1 Database</li>
                        <li><i className="flaticon-tick"></i> 10 Free Optimization</li>
                        <li><i className="flaticon-tick"></i> Html5 + Css3</li>
                        <li><i className="flaticon-tick"></i> 24/7 Customer Support</li>
                      </ul>
                    </div>
                    <a className="btn btn-theme mt-5" href="#"> <span>Get Started</span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                  <div className="price-table">
                    <div className="round-p-animation"></div>
                    <div className="price-header">
                      <h3 className="price-title">Premium</h3>
                    </div>
                    <img className="img-fluid my-4" src="images/price/01.png" alt=""/>
                    <div className="price-value">
                      <h2>$99<span>/Month</span></h2>
                    </div>
                    <div className="price-list">
                      <ul className="list-unstyled">
                        <li><i className="flaticon-tick"></i> 15 Analytics Compaign</li>
                        <li><i className="flaticon-tick"></i> Unlimited Site licenses</li>
                        <li><i className="flaticon-tick"></i> 1 Database</li>
                        <li><i className="flaticon-tick"></i> 10 Free Optimization</li>
                        <li><i className="flaticon-tick"></i> Html5 + Css3</li>
                        <li><i className="flaticon-tick"></i> 24/7 Customer Support</li>
                      </ul>
                    </div>
                    <a className="btn btn-theme mt-5" href="#"> <span>Get Started</span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                  <div className="price-table">
                    <div className="round-p-animation"></div>
                    <div className="price-header">
                      <h3 className="price-title">Professional</h3>
                    </div>
                    <img className="img-fluid my-4" src="images/price/01.png" alt=""/>
                    <div className="price-value">
                      <h2>$199<span>/Month</span></h2>
                    </div>
                    <div className="price-list">
                      <ul className="list-unstyled">
                        <li><i className="flaticon-tick"></i> 15 Analytics Compaign</li>
                        <li><i className="flaticon-tick"></i> Unlimited Site licenses</li>
                        <li><i className="flaticon-tick"></i> 1 Database</li>
                        <li><i className="flaticon-tick"></i> 10 Free Optimization</li>
                        <li><i className="flaticon-tick"></i> Html5 + Css3</li>
                        <li><i className="flaticon-tick"></i> 24/7 Customer Support</li>
                      </ul>
                    </div>
                    <a className="btn btn-theme mt-5" href="#"> <span>Get Started</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="tab1-2">
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="price-table">
                    <div className="round-p-animation"></div>
                    <div className="price-header">
                      <h3 className="price-title">Starter</h3>
                    </div>
                    <img className="img-fluid my-4" src="images/price/01.png" alt=""/>
                    <div className="price-value">
                      <h2>$29<span>/Month</span></h2>
                    </div>
                    <div className="price-list">
                      <ul className="list-unstyled">
                        <li><i className="flaticon-tick"></i> 15 Analytics Compaign</li>
                        <li><i className="flaticon-tick"></i> Unlimited Site licenses</li>
                        <li><i className="flaticon-tick"></i> 1 Database</li>
                        <li><i className="flaticon-tick"></i> 10 Free Optimization</li>
                        <li><i className="flaticon-tick"></i> Html5 + Css3</li>
                        <li><i className="flaticon-tick"></i> 24/7 Customer Support</li>
                      </ul>
                    </div>
                    <a className="btn btn-theme mt-5" href="#"> <span>Get Started</span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                  <div className="price-table">
                    <div className="round-p-animation"></div>
                    <div className="price-header">
                      <h3 className="price-title">Premium</h3>
                    </div>
                    <img className="img-fluid my-4" src="images/price/01.png" alt=""/>
                    <div className="price-value">
                      <h2>$99<span>/Month</span></h2>
                    </div>
                    <div className="price-list">
                      <ul className="list-unstyled">
                        <li><i className="flaticon-tick"></i> 15 Analytics Compaign</li>
                        <li><i className="flaticon-tick"></i> Unlimited Site licenses</li>
                        <li><i className="flaticon-tick"></i> 1 Database</li>
                        <li><i className="flaticon-tick"></i> 10 Free Optimization</li>
                        <li><i className="flaticon-tick"></i> Html5 + Css3</li>
                        <li><i className="flaticon-tick"></i> 24/7 Customer Support</li>
                      </ul>
                    </div>
                    <a className="btn btn-theme mt-5" href="#"> <span>Get Started</span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                  <div className="price-table">
                    <div className="round-p-animation"></div>
                    <div className="price-header">
                      <h3 className="price-title">Professional</h3>
                    </div>
                    <img className="img-fluid my-4" src="images/price/01.png" alt=""/>
                    <div className="price-value">
                      <h2>$199<span>/Month</span></h2>
                    </div>
                    <div className="price-list">
                      <ul className="list-unstyled">
                        <li><i className="flaticon-tick"></i> 15 Analytics Compaign</li>
                        <li><i className="flaticon-tick"></i> Unlimited Site licenses</li>
                        <li><i className="flaticon-tick"></i> 1 Database</li>
                        <li><i className="flaticon-tick"></i> 10 Free Optimization</li>
                        <li><i className="flaticon-tick"></i> Html5 + Css3</li>
                        <li><i className="flaticon-tick"></i> 24/7 Customer Support</li>
                      </ul>
                    </div>
                    <a className="btn btn-theme mt-5" href="#"> <span>Get Started</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
{/* <section>
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-lg-8 col-md-12">
        <div className="section-title">
          <h6>Blog</h6>
          <h2 className="title">Read our latest news</h2>
          <p className="mb-0 text-black">Deos et accusamus et iusto odio dignissimos qui blanditiis praesentium voluptatum dele corrupti quos dolores et quas molestias.</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-12">
        <div className="post">
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
            <div className="post-author">
              <div className="post-author-img">
                <img className="img-fluid" src="images/thumbnail/01.png" alt=""/>
              </div> <span>Romi kelly</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
        <div className="post">
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
            <div className="post-author">
              <div className="post-author-img">
                <img className="img-fluid" src="images/thumbnail/02.png" alt=""/>
              </div> <span>James Haldoe</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
        <div className="post">
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
            <div className="post-author">
              <div className="post-author-img">
                <img className="img-fluid" src="images/thumbnail/03.png" alt=""/>
              </div> <span>Amber Lony</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
{/* <section className="pt-0">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="ht-clients d-flex flex-wrap align-items-center text-center">
          <div className="clients-logo">
            <img className="img-fluid" src="images/client/07.png" alt=""/>
          </div>
          <div className="clients-logo">
            <img className="img-fluid" src="images/client/08.png" alt=""/>
          </div>
          <div className="clients-logo">
            <img className="img-fluid" src="images/client/09.png" alt=""/>
          </div>
          <div className="clients-logo">
            <img className="img-fluid" src="images/client/10.png" alt=""/>
          </div>
          <div className="clients-logo">
            <img className="img-fluid" src="images/client/11.png" alt=""/>
          </div>
          <div className="clients-logo">
            <img className="img-fluid" src="images/client/12.png" alt=""/>
          </div>
          <div className="clients-logo">
            <img className="img-fluid" src="images/client/12.png" alt=""/>
          </div>
          <div className="clients-logo">
            <img className="img-fluid" src="images/client/12.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
</div>
</div>
      </div>
    )
  }
}
