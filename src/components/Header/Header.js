import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Header.css";
import logo from "./logo.png";
import ReorderIcon from "@mui/icons-material/Reorder";

const Header = () => {
  const [showLink, setShowLink] = useState(false);
  return (
    <div>
      <div>
        <div className="navbar fixed-top">
          <div className="nav-left">
            <div className="nav-logo">
              <img src={logo} alt="" />
            </div>
          </div>

          <div className="nav-right">
            <div className="links" id={showLink ? "hidden" : ""}>
              <HashLink to="/home#home">Home</HashLink>
              <HashLink to="/home#features">Features</HashLink>
              <HashLink to="/home#pricing">Pricing</HashLink>
              <HashLink to="/home#faq">Faq</HashLink>
              <HashLink to="/home#news">News</HashLink>
              <HashLink to="/home#contact-us">Contact</HashLink>
            </div>
            <button
              className="collapse-btn"
              onClick={() => setShowLink(!showLink)}
            >
              <ReorderIcon></ReorderIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
