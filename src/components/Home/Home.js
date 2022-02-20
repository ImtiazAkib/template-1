import React, { useState } from "react";
import "./Home.css";
import mobile from "./mobile.png";
import shape from "./shape-bg.png";
import banner from "./banner.jpg";
import faqImg from "./1.png";
import dlImg from "./hand-mobile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faGooglePlay,
  faWindows,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import CloseIcon from "@mui/icons-material/Close";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import Testimonial from "../Testimonial/Tesmonial";
import Accordion from "../Accordion/Accordion";
import NewsTestimonial from "../News/News";
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div>
      {/*-------------------
       banner section start
       ---------------------- */}
      <div>
        <div className="banner">
          <div className="home-banner">
            <div className="banner-left">
              <h1>ApeTech Provide -</h1>
              <span>Lorem ipsum dolor</span>
              <p>
                Our software platform and custom development allow healthcare
                institutions to create comprehensive cross-platform solutions
                that ensure positive patient experiences.
              </p>
              <div className="banner-icons">
                <button>
                  <FontAwesomeIcon icon={faApple} size={"2x"} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faAndroid} size={"2x"} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faWindows} size={"2x"} />
                </button>
                {/*------------ animatimated Button --------------------*/}
                <button
                  className="video-play-btn"
                  onClick={() => setShowPopup(!showPopup)}
                >
                  <FontAwesomeIcon icon={faPlay} size={"1x"} />
                </button>
              </div>
            </div>
            <div className="banner-right">
              <img src={mobile} alt="" />
            </div>
          </div>
          {/*------------ image shape -----------------*/}
          <div className="shape">
            <div className="shape-img">
              <img src={shape} alt="" />
            </div>
          </div>
          <div className="banner-overlay"></div>
        </div>
      </div>
      {/*-------------------
       banner section end
       ---------------------- */}
      {/*----------------
       video popup start
       ------------------ */}
      <div className="fixed-top">
        <div className="video-popup" id={showPopup ? "hidden-popup" : ""}>
          <div className="video-popup-inner">
            <div className="iframe-popup">
              <iframe
                src="https://www.youtube.com/embed/uLvhAJfx3T0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="video-close-btn">
            <button onClick={() => setShowPopup(!showPopup)}>
              <CloseIcon></CloseIcon>
            </button>
          </div>
        </div>
      </div>
      {/*----------------
       video popup end
       ------------------ */}
      {/*---------------------- user and download section -----------------------*/}
      <div>
        <div className="d-lg-flex justify-content-between container mt-5">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div>
              <EmojiEventsIcon
                style={{ color: "#281483" }}
                fontSize="large"
              ></EmojiEventsIcon>
            </div>
            <div className="ms-2 text-center">
              <h3 style={{ color: "#747474" }}>Trusted by 4000+</h3>
              <p style={{ color: "#787878" }}>High performing team worldwide</p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <div className="text-center">
              <h3 style={{ color: "#281483" }}>145052</h3>
              <p>Downloads</p>
            </div>
            <div className="text-center ms-5">
              <h3 style={{ color: "#8f6ed5" }}>4400+</h3>
              <p>Active Installs</p>
            </div>
            <div className="text-center ms-5">
              <h3 style={{ color: "#d782d9" }}>5000+</h3>
              <p>Paid Users</p>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------- user and download section -----------------------*/}
      {/*---------------------- feature section start -----------------------*/}
      <div className="features">
        {/*-------------------- feature top section ----------------------*/}
        <div className="text-center feature-head mt-5">
          <h1 style={{ color: "#2c3e50" }}>ApeTech Features</h1>
          <p style={{ color: "#787878" }}>
            Continually network virtual strategic theme areas vis-a-vis
            ubiquitous potentialities. Holisticly <br /> negotiate focused
            e-tailers without premium solutions.
          </p>
        </div>
        <div className="row feature-row">
          <div className="col-lg-4 col-md-6">
            <div className="d-flex mb-5 single-feature">
              <div className="me-2 feature-icon d-flex align-items-center justify-content-center">
                <SentimentVerySatisfiedIcon></SentimentVerySatisfiedIcon>
              </div>
              <div>
                <h4>Responsive web design</h4>
                <p>
                  Modular and interchangable <br /> componente between layouts
                  and <br /> even demos.
                </p>
              </div>
            </div>
            <div>
              <div className="d-flex mb-5 single-feature">
                <div className="me-2 feature-icon d-flex align-items-center justify-content-center">
                  <SentimentVerySatisfiedIcon></SentimentVerySatisfiedIcon>
                </div>
                <div>
                  <h4>Responsive web design</h4>
                  <p>
                    Modular and interchangable <br /> componente between layouts
                    and <br /> even demos.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex mb-5 single-feature">
                <div className="me-2 feature-icon d-flex align-items-center justify-content-center">
                  <SentimentVerySatisfiedIcon></SentimentVerySatisfiedIcon>
                </div>
                <div>
                  <h4>Responsive web design</h4>
                  <p>
                    Modular and interchangable <br /> componente between layouts
                    and <br /> even demos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 feature-row-img">
            <img src={mobile} alt="" />
          </div>
          <div className="col-lg-4 col-md-6 feature-bottom">
            <div>
              <div className="d-flex mb-5 single-feature">
                <div className="me-2 feature-icon d-flex align-items-center justify-content-center">
                  <SentimentVerySatisfiedIcon></SentimentVerySatisfiedIcon>
                </div>
                <div>
                  <h4>Responsive web design</h4>
                  <p>
                    Modular and interchangable <br /> componente between layouts
                    and <br /> even demos.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex mb-5 single-feature">
                <div className="me-2 feature-icon d-flex align-items-center justify-content-center">
                  <SentimentVerySatisfiedIcon></SentimentVerySatisfiedIcon>
                </div>
                <div>
                  <h4>Responsive web design</h4>
                  <p>
                    Modular and interchangable <br /> componente between layouts
                    and <br /> even demos.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex mb-5 single-feature">
                <div className="me-2 feature-icon d-flex align-items-center justify-content-center">
                  <SentimentVerySatisfiedIcon></SentimentVerySatisfiedIcon>
                </div>
                <div>
                  <h4>Responsive web design</h4>
                  <p>
                    Modular and interchangable <br /> componente between layouts
                    and <br /> even demos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*-------------------- feature bottom section -------------------------*/}
        <div className="d-lg-flex promo-container mb-5">
          <div className="single-promo">
            <div className="text-center single-promo-content">
              <div>
                <SentimentVerySatisfiedIcon
                  style={{ color: "#9871d6" }}
                  fontSize="large"
                ></SentimentVerySatisfiedIcon>
              </div>
              <h6>Easy To Use</h6>
              <p>
                Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut
                vel hinc solet tincidunt.
              </p>
            </div>
          </div>
          <div className="single-promo">
            <div className="text-center single-promo-content">
              <div>
                <SentimentVerySatisfiedIcon
                  style={{ color: "#9871d6" }}
                  fontSize="large"
                ></SentimentVerySatisfiedIcon>
              </div>
              <h6>Easy To Use</h6>
              <p>
                Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut
                vel hinc solet tincidunt.
              </p>
            </div>
          </div>
          <div className="single-promo">
            <div className="text-center single-promo-content">
              <div>
                <SentimentVerySatisfiedIcon
                  style={{ color: "#9871d6" }}
                  fontSize="large"
                ></SentimentVerySatisfiedIcon>
              </div>
              <h6>Easy To Use</h6>
              <p>
                Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut
                vel hinc solet tincidunt.
              </p>
            </div>
          </div>
          <div className="single-promo">
            <div className="text-center single-promo-content">
              <div>
                <SentimentVerySatisfiedIcon
                  style={{ color: "#9871d6" }}
                  fontSize="large"
                ></SentimentVerySatisfiedIcon>
              </div>
              <h6>Easy To Use</h6>
              <p>
                Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut
                vel hinc solet tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------- feature section end -----------------------*/}
      {/*---------------------- video section start -----------------------*/}
      <div className="video-container">
        <div className="video-section">
          <img src={banner} alt="" />
        </div>
        <div className="video-content">
          <div>
            <h2>Video Title</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam,
              ullam!
            </p>
            <iframe
              src="https://www.youtube.com/embed/9CEW3Tmx2tg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="banner-overlay"></div>
      </div>
      {/*---------------------- video section end -----------------------*/}

      {/*------------------- price plan card section ---------------*/}
      <div className="card-container">
        <div className="text-center card-container-header mb-5">
          <h2 style={{ color: "#2c3e50", fontWeight: "600" }}>Pricing Plan</h2>
          <p style={{ color: "#787878" }}>
            we believe in making simple and fair pricing plans. Choose your next
            successful plan and get started today!.
          </p>
        </div>
        <div className="d-lg-flex cards">
          <div className="single-card text-center">
            <div className="card-title">Basic</div>
            <div className="card-body text-center">
              <div className="mb-3">
                <h1 style={{ fontWeight: "200" }}>$278</h1>
                <small>per month</small>
              </div>
              <div>
                <div className="card-body-detail">
                  <div className="row">
                    <div className="col-12">
                      <ul className="content">
                        <li className="highlight">Same here</li>
                        <li className="not-highlight">Discount 50%</li>
                        <li className="highlight">New Offer</li>
                        <li className="not-highlight">Vip member</li>
                        <li className="highlight">On time delivery</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-2 card-btn">
                  <button>Buy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="single-card text-center">
            <div className="card-title">Standard</div>
            <div className="card-body text-center">
              <div className="mb-3">
                <h1 style={{ fontWeight: "200" }}>$278</h1>
                <small>per month</small>
              </div>
              <div>
                <div className="card-body-detail">
                  <div className="row">
                    <div className="col-12">
                      <ul className="content">
                        <li className="highlight">Same here</li>
                        <li className="not-highlight">Discount 50%</li>
                        <li className="highlight">New Offer</li>
                        <li className="not-highlight">Vip member</li>
                        <li className="highlight">On time delivery</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-2 card-btn">
                  <button>Buy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="single-card text-center">
            <div className="card-title">Premium</div>
            <div className="card-body text-center">
              <div className="mb-3">
                <h1 style={{ fontWeight: "200" }}>$278</h1>
                <small>per month</small>
              </div>
              <div>
                <div className="card-body-detail">
                  <div className="row">
                    <div className="col-12">
                      <ul className="content">
                        <li className="highlight">Same here</li>
                        <li className="not-highlight">Discount 50%</li>
                        <li className="highlight">New Offer</li>
                        <li className="not-highlight">Vip member</li>
                        <li className="highlight">On time delivery</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-2 card-btn">
                  <button>Buy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="single-card text-center">
            <div className="card-title">Ultimate</div>
            <div className="card-body text-center">
              <div className="mb-3">
                <h1 style={{ fontWeight: "200" }}>$278</h1>
                <small>per month</small>
              </div>
              <div>
                <div className="card-body-detail">
                  <div className="row">
                    <div className="col-12">
                      <ul className="content">
                        <li className="highlight">Same here</li>
                        <li className="not-highlight">Discount 50%</li>
                        <li className="highlight">New Offer</li>
                        <li className="not-highlight">Vip member</li>
                        <li className="highlight">On time delivery</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-2 card-btn">
                  <button>Buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*------------------- price plan card section end ---------------*/}
      {/* ----------------- Testimonial Section Start ----------------------------- */}
      <div className="testimonial">
        <div className="testimonial-head">
          <div className="testimonial-content">
            <div>
              <h2
                style={{ color: "#2c3e50", fontWeight: "600" }}
                className="mb-3"
              >
                10k+ Experts Trust Us
              </h2>
              <p style={{ color: "#787878" }}>
                Streamlining different processes and workflows by using user
                access control Onebook prompts efficiency and productivity
                levels of an organization, and reduces operating costs.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <Testimonial></Testimonial>
        </div>
      </div>
      {/* ----------------- Testimonial Section End ----------------------------- */}
      {/* ----------------- Faq Section Start ----------------------------- */}
      <div className="faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div>
                <div>
                  <h4 style={{ color: "#2c3e50", fontWeight: "600" }}>Faq's</h4>
                  <p style={{ color: "#787878" }}>
                    we believe in making simple and fair pricing plans. Choose
                    your next successful plan and get started today!.
                  </p>
                </div>
                <Accordion></Accordion>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-img">
                <div>
                  <img src={faqImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------- Faq Section End ----------------------------- */}

      {/* ----------------- Download Section Start ----------------------------- */}

      <div>
        <div className="download-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="download-img">
                  <img src={dlImg} alt="mobile" />
                </div>
              </div>
              <div className="col-md-12 col-lg-7 text-light">
                <div className="download-content">
                  <div className="download-content-head">
                    <h2>Get The App Now !</h2>
                    <p>
                      Seamlessly transform timely e-commerce for diverse
                      leadership skills. Conveniently reconceptualize go forward
                      expertise without extensible applications.
                      Phosfluorescently.
                    </p>
                  </div>
                  <div className="download-button">
                    <button>
                      <div className="d-flex justify-content-around align-items-center text-center">
                        <span className="download-icon">
                          <FontAwesomeIcon
                            icon={faApple}
                            size={"2x"}
                            className="apple-icon"
                          />
                        </span>
                        <div>
                          <p>
                            Download On <br /> App store
                          </p>
                        </div>
                      </div>
                    </button>
                    <button>
                      <div className="d-flex justify-content-around align-items-center text-center">
                        <span className="download-icon">
                          <FontAwesomeIcon
                            icon={faGooglePlay}
                            size={"2x"}
                            className="apple-icon"
                          />
                        </span>
                        <div>
                          <p>
                            Get it on <br /> Google Play
                          </p>
                        </div>
                      </div>
                    </button>
                    <button>
                      <div className="d-flex justify-content-around align-items-center text-center">
                        <span className="download-icon">
                          <FontAwesomeIcon
                            icon={faWindows}
                            size={"2x"}
                            className="apple-icon"
                          />
                        </span>
                        <div>
                          <p>
                            Download On <br /> Windows
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="download-overlay"></div>
        </div>
      </div>

      {/* ----------------- Download Section End ----------------------------- */}

      {/* ----------------- News Section Start ----------------------------- */}

      <div className="news-section">
        <div className="news-head">
          <div className="news-detail">
            <div>
              <h2
                style={{ color: "#2c3e50", fontWeight: "600" }}
                className="mb-3"
              >
                Latest News
              </h2>
              <p style={{ color: "#787878" }}>
                Streamlining different processes and workflows by using user
                access control Onebook prompts efficiency and productivity
                levels of an organization, and reduces operating costs.
              </p>
            </div>
          </div>
        </div>
        <NewsTestimonial></NewsTestimonial>
      </div>

      {/* ----------------- News Section End ----------------------------- */}

      {/* ----------------- Contact Us Section Start ----------------------------- */}

      <div className="overflow-hidden">
        <div className="row">
          <div className="col-md-5 contact-head">
            <div>
              <h2
                style={{
                  marginBottom: "20px",
                  color: "#2c3e50",
                  fontWeight: "600",
                }}
              >
                Contact with us
              </h2>
              <p style={{ color: "#787878" }}>
                It's very easy to get in touch with us. Just use the contact
                form or pay us a visit for a coffee at the office. Dynamically
                innovate competitive technology after an expanded array of
                leadership.
              </p>
            </div>
            <div>
              <h5
                style={{
                  marginBottom: "10px",
                  marginTop: "40px",
                  color: "#2c3e50",
                  fontWeight: "600",
                }}
              >
                Head Office
              </h5>
              <p style={{ color: "#787878" }}>
                121 King St, Melbourne VIC 3000, Australia
              </p>
              <p style={{ color: "#787878" }}>Phone: +61 2 8376 6284</p>
              <p style={{ color: "#787878" }}>Email : hello@yourdomain.com</p>
            </div>
          </div>
          <div className="col-md-7">
            <div>
              <ContactUs></ContactUs>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------- Contact Us Section End ----------------------------- */}
    </div>
  );
};

export default Home;
