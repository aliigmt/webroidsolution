import React, { Component } from "react";

export default class Services extends Component {
  render() {
    return (
      <div>
        <section
          className="page-title overflow-hidden text-center bg-contain animatedBackground"
          data-bg-img="images/pattern/08.png"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <h1 className="title">Our Services</h1>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    {/* <li className="breadcrumb-item">
                      <a href="#">Services</a>
                    </li> */}
                    <li className="breadcrumb-item active" aria-current="page">
                      Service
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
                      <p>
                        We are a leading iPhone application Development Company
                        that develops iOS applications for the next generation.
                        Our developers and designers will create appealing
                        designs and build creative iOS applications.
                      </p>
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
                      <h5>Web Applications Development</h5>
                    </div>
                    <div className="featured-desc">
                      <p>
                        Webroid Solutios is a highly specialized team for
                        website development and services. You will get the high
                        performing web experiences that are digitally
                        transformative. Our team creates the best website, which
                        will be fully functional and secure.
                      </p>
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
                      <p>
                        Our great application development services allow you to
                        build the best B2B apps for a wide range of platforms.
                        We are making the apps for mobile. Webroid Solutios
                        simplifies your business complexities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="overflow-hidden p-0"
            data-bg-img="images/pattern/01.png"
          >
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
                    <button data-filter="" className="is-checked">
                      All
                    </button>
                    <button data-filter=".cat1">Web Development</button>
                    <button data-filter=".cat2">Mobile Development</button>
                    <button data-filter=".cat3">DataBase</button>
                    <button data-filter=".cat4">Software</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid p-0">
              <div className="row justify-content-md-center">
                <div className="col-lg-8 col-md-8">
                  <div className="grid row g-0 popup-gallery text-center">
                    <div className="grid-sizer"></div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat4">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon ">
                          <img
                            className="img-fluid12"
                            src="images/img/jira.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>Jira</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat4">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon ">
                          <img
                            className="img-fluid12"
                            src="images/img/git.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>Git</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat4">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon ">
                          <img
                            className="img-fluid12"
                            src="images/img/google-cloud.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>Google Cloud</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat4">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon ">
                          <img
                            className="img-fluid12"
                            src="images/img/aws.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>AWS</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat4">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon ">
                          <img
                            className="img-fluid12"
                            src="images/img/xcode.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>XCode</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat4">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon ">
                          <img
                            className="img-fluid12"
                            src="images/img/vcode.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>VS Code</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat4">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon ">
                          <img
                            className="img-fluid12"
                            src="images/img/slack.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>Slack</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat2">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon ">
                          <img
                            className="img-fluid12"
                            src="images/img/android.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>Android</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat2">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon ">
                          <img
                            className="img-fluid12"
                            src="images/img/apple.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>Apple</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat2">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon ">
                          <img
                            className="img-fluid12"
                            src="images/img/flutter.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>Flutter</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat2">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon ">
                          <img
                            className="img-fluid12"
                            src="images/img/react.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>React Native</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat1">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon ">
                          <img
                            className="img-fluid12"
                            src="images/img/laravel.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>Laravel</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat1">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon ">
                          <img
                            className="img-fluid12"
                            src="images/img/php.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>PHP</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat1">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon ">
                          <img
                            className="img-fluid12"
                            src="images/img/bootstrap.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>Bootstrap</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat1">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon ">
                          <img
                            className="img-fluid12"
                            src="images/img/vuejs.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>Vue.js</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat1">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon ">
                          <img
                            className="img-fluid12"
                            src="images/img/react.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>React.js</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat1">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon ">
                          <img
                            className="img-fluid12"
                            src="images/img/nodejs.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>Node.js</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat1">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon ">
                          <img
                            className="img-fluid12"
                            src="images/img/javascript.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>JavaScript</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat1">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon ">
                          <img
                            className="img-fluid12"
                            src="images/img/jquery.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>JQuery</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat3">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon ">
                          <img
                            className="img-fluid12"
                            src="images/img/mysql.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>MySql</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat3">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon">
                          <img
                            className="img-fluid12"
                            src="images/img/firebase.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>FireBase</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat3">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon">
                          <img
                            className="img-fluid12"
                            src="images/img/mongodb.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>MongoDB</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat3">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon">
                          <img
                            className="img-fluid12"
                            src="images/img/sqlite.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>SQLite</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-md-2 col-lg-2  grid-item cat3">
                      <div className="featured-item text-center">
                        <div className="technology featured-icon">
                          <img
                            className="img-fluid12"
                            src="images/img/realm.svg"
                            alt=""
                          />
                        </div>
                        <div className="technology-featured-desc">
                          <span>Realm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      

        </div>
      </div>
    );
  }
}
