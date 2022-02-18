import React from "react";
import "./Testimonial.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "./1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  const options = {
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={0}
            nav
            dots={false}
            items={2}
            autoplay={true}
            autoplayHoverPause={true}
            {...options}
          >
            <div className="item">
              <div>
                <div className="item-top">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facilis aspernatur nemo architecto quis nostrum magni
                    voluptas reiciendis velit odit consequuntur.
                  </p>
                </div>
                <div className="qoutte">
                  <span>
                    <FontAwesomeIcon icon={faQuoteLeft} size={"3x"} />
                  </span>
                </div>
                <div className="d-flex flex-start">
                  <div className="item-img">
                    <img src={img1} alt="" />
                  </div>
                  <div>
                    <h4>Beatrice Evan</h4>
                    <p>Associate MAnager</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div>
                <div className="item-top">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facilis aspernatur nemo architecto quis nostrum magni
                    voluptas reiciendis velit odit consequuntur.
                  </p>
                </div>
                <div className="qoutte">
                  <span>
                    <FontAwesomeIcon icon={faQuoteLeft} size={"3x"} />
                  </span>
                </div>
                <div className="d-flex flex-start">
                  <div className="item-img">
                    <img src={img1} alt="" />
                  </div>
                  <div>
                    <h4>Beatrice Evan</h4>
                    <p>Associate MAnager</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div>
                <div className="item-top">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facilis aspernatur nemo architecto quis nostrum magni
                    voluptas reiciendis velit odit consequuntur.
                  </p>
                </div>
                <div className="qoutte">
                  <span>
                    <FontAwesomeIcon icon={faQuoteLeft} size={"3x"} />
                  </span>
                </div>
                <div className="d-flex flex-start">
                  <div className="item-img">
                    <img src={img1} alt="" />
                  </div>
                  <div>
                    <h4>Beatrice Evan</h4>
                    <p>Associate MAnager</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div>
                <div className="item-top">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facilis aspernatur nemo architecto quis nostrum magni
                    voluptas reiciendis velit odit consequuntur.
                  </p>
                </div>
                <div className="qoutte">
                  <span>
                    <FontAwesomeIcon icon={faQuoteLeft} size={"3x"} />
                  </span>
                </div>
                <div className="d-flex flex-start">
                  <div className="item-img">
                    <img src={img1} alt="" />
                  </div>
                  <div>
                    <h4>Beatrice Evan</h4>
                    <p>Associate MAnager</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div>
                <div className="item-top">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facilis aspernatur nemo architecto quis nostrum magni
                    voluptas reiciendis velit odit consequuntur.
                  </p>
                </div>
                <div className="qoutte">
                  <span>
                    <FontAwesomeIcon icon={faQuoteLeft} size={"3x"} />
                  </span>
                </div>
                <div className="d-flex flex-start">
                  <div className="item-img">
                    <img src={img1} alt="" />
                  </div>
                  <div>
                    <h4>Beatrice Evan</h4>
                    <p>Associate MAnager</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div>
                <div className="item-top">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facilis aspernatur nemo architecto quis nostrum magni
                    voluptas reiciendis velit odit consequuntur.
                  </p>
                </div>
                <div className="qoutte">
                  <span>
                    <FontAwesomeIcon icon={faQuoteLeft} size={"3x"} />
                  </span>
                </div>
                <div className="d-flex flex-start">
                  <div className="item-img">
                    <img src={img1} alt="" />
                  </div>
                  <div>
                    <h4>Beatrice Evan</h4>
                    <p>Associate MAnager</p>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
