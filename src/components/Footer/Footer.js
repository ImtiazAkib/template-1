import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./logo.png";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGooglePlusG,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-content">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="footer-icons">
            <button className="icon-btn">
              <FontAwesomeIcon icon={faFacebookF} />
            </button>
            <button className="icon-btn">
              <FontAwesomeIcon icon={faTwitter} />
            </button>
            <button className="icon-btn">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </button>
            <button className="icon-btn">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </button>
            <button className="icon-btn">
              <FontAwesomeIcon icon={faYoutube} />
            </button>
            <svg width="0" height="0">
              <linearGradient id="lgrad" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#9c47fc", stopOpacity: "1" }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#356ad2", stopOpacity: "1" }}
                />
              </linearGradient>
            </svg>
            <svg width="0" height="0">
              <linearGradient id="white" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#fff", stopOpacity: "1" }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#fff", stopOpacity: "1" }}
                />
              </linearGradient>
            </svg>
          </div>
          <div>
            <p>© copyright Software Template By React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
