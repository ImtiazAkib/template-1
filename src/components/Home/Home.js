import React, { useState } from "react";
import "./Home.css";
import mobile from "./mobile.png";
import shape from "./shape-bg.png";
import banner from "./banner.jpg";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import CheckIcon from "@mui/icons-material/Check";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div>
      {/*-------------------
       banner section start
       ---------------------- */}
      <div className="banner">
        <div className="home-banner">
          <div className="banner-left">
            <h1>ApeTech Provide -</h1>
            <span>Lorem ipsum dolor</span>
            <p>
              Our software platform and custom development allow healthcare
              institutions to create comprehensive cross-platform solutions that
              ensure positive patient experiences.
            </p>
            <div className="banner-icons">
              <button>
                <AppleIcon></AppleIcon>
              </button>
              <button>
                <AndroidIcon></AndroidIcon>
              </button>
              <button>
                <DesktopWindowsIcon></DesktopWindowsIcon>
              </button>
              {/*------------ animatimated Button --------------------*/}
              <button
                className="video-play-btn"
                onClick={() => setShowPopup(!showPopup)}
              >
                <PlayCircleOutlineIcon fontSize="large"></PlayCircleOutlineIcon>
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
          <div className="col-lg-4">
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
          <div className="col-lg-4">
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
          <div className="text-center single-promo">
            <div>
              <SentimentVerySatisfiedIcon
                style={{ color: "#9871d6" }}
                fontSize="large"
              ></SentimentVerySatisfiedIcon>
            </div>
            <h6>Easy To Use</h6>
            <p>
              Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel
              hinc solet tincidunt.
            </p>
          </div>
          <div className="text-center single-promo">
            <div>
              <SentimentVerySatisfiedIcon
                style={{ color: "#9871d6" }}
                fontSize="large"
              ></SentimentVerySatisfiedIcon>
            </div>
            <h6>Easy To Use</h6>
            <p>
              Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel
              hinc solet tincidunt.
            </p>
          </div>
          <div className="text-center single-promo">
            <div>
              <SentimentVerySatisfiedIcon
                style={{ color: "#9871d6" }}
                fontSize="large"
              ></SentimentVerySatisfiedIcon>
            </div>
            <h6>Easy To Use</h6>
            <p>
              Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel
              hinc solet tincidunt.
            </p>
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
          <h2 style={{ color: "#2c3e50" }}>Pricing Plan</h2>
          <p>
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
                        <li className="highlight">same here</li>
                        <li className="not-highlight">sameb herw asfn</li>
                        <li className="highlight">dgjgb kghb h</li>
                        <li className="not-highlight">gvasjv kagsjb hgju</li>
                        <li className="highlight">vjhjh fgtvfghv</li>
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
                        <li className="highlight">same here</li>
                        <li className="not-highlight">sameb herw asfn</li>
                        <li className="highlight">dgjgb kghb h</li>
                        <li className="not-highlight">gvasjv kagsjb hgju</li>
                        <li className="highlight">vjhjh fgtvfghv</li>
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
                        <li className="highlight">same here</li>
                        <li className="not-highlight">sameb herw asfn</li>
                        <li className="highlight">dgjgb kghb h</li>
                        <li className="not-highlight">gvasjv kagsjb hgju</li>
                        <li className="highlight">vjhjh fgtvfghv</li>
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
                        <li className="highlight">same here</li>
                        <li className="not-highlight">sameb herw asfn</li>
                        <li className="highlight">dgjgb kghb h</li>
                        <li className="not-highlight">gvasjv kagsjb hgju</li>
                        <li className="highlight">vjhjh fgtvfghv</li>
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
    </div>
  );
};

export default Home;
