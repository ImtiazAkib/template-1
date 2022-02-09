import React, { useState } from "react";
import "./Home.css";
import mobile from "./mobile.png";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

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
              <button className="video-play-btn">
                <PlayCircleOutlineIcon fontSize="large"></PlayCircleOutlineIcon>
              </button>
            </div>
          </div>
          <div className="banner-right">
            <img src={mobile} alt="" />
          </div>
        </div>
        <div className="banner-overlay"></div>
      </div>
      {/*----------------
       video popup start
       ------------------ */}
      <div className="video-popup">
        <div className="video-popup-inner">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/uLvhAJfx3T0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      {/*----------------
       video popup end
       ------------------ */}
      {/*-------------------
       banner section end
       ---------------------- */}
    </div>
  );
};

export default Home;
