import React from "react";
import "./News.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "./1.jpg";

const NewsTestimonial = () => {
  const options = {
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div className="news">
      <div className="row">
        <div className="col-12">
          <div className="news-container">
            <OwlCarousel
              className="owl-theme news-cards"
              loop
              margin={0}
              nav
              dots={false}
              items={3}
              autoplay={false}
              autoplayHoverPause={true}
              {...options}
            >
              <div className="item">
                <div className="news-card">
                  <div className="news-img">
                    <img src={img1} alt="" />
                  </div>
                  <div className="news-body">
                    <h3 className="news-title">Lorem ipsum dolor sit amet.</h3>
                    <p className="news-content">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rerum mollitia consectetur sapiente in neque est! Iusto
                      corrupti animi fuga! Excepturi?
                    </p>
                    <a href="#">Read More {">"}</a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="news-card">
                  <div className="news-img">
                    <img src={img1} alt="" />
                  </div>
                  <div className="news-body">
                    <h3 className="news-title">Lorem ipsum dolor sit amet.</h3>
                    <p className="news-content">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rerum mollitia consectetur sapiente in neque est! Iusto
                      corrupti animi fuga! Excepturi?
                    </p>
                    <a href="#">Read More {">"}</a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="news-card">
                  <div className="news-img">
                    <img src={img1} alt="" />
                  </div>
                  <div className="news-body">
                    <h3 className="news-title">Lorem ipsum dolor sit amet.</h3>
                    <p className="news-content">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rerum mollitia consectetur sapiente in neque est! Iusto
                      corrupti animi fuga! Excepturi?
                    </p>
                    <a href="#">Read More {">"}</a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="news-card">
                  <div className="news-img">
                    <img src={img1} alt="" />
                  </div>
                  <div className="news-body">
                    <h3 className="news-title">Lorem ipsum dolor sit amet.</h3>
                    <p className="news-content">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rerum mollitia consectetur sapiente in neque est! Iusto
                      corrupti animi fuga! Excepturi?
                    </p>
                    <a href="#">Read More {">"}</a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="news-card">
                  <div className="news-img">
                    <img src={img1} alt="" />
                  </div>
                  <div className="news-body">
                    <h3 className="news-title">Lorem ipsum dolor sit amet.</h3>
                    <p className="news-content">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rerum mollitia consectetur sapiente in neque est! Iusto
                      corrupti animi fuga! Excepturi?
                    </p>
                    <a href="#">Read More {">"}</a>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="news-card">
                  <div className="news-img">
                    <img src={img1} alt="" />
                  </div>
                  <div className="news-body">
                    <h3 className="news-title">Lorem ipsum dolor sit amet.</h3>
                    <p className="news-content">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rerum mollitia consectetur sapiente in neque est! Iusto
                      corrupti animi fuga! Excepturi?
                    </p>
                    <a href="#">Read More {">"}</a>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTestimonial;
