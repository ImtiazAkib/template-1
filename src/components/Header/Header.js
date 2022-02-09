import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ReorderIcon from "@mui/icons-material/Reorder";

const Header = () => {
  const [showLink, setShowLink] = useState(false);
  return (
    <div>
      <div>
        <div className="navbar fixed-top">
          <div className="nav-left">
            <h1>Logo</h1>
          </div>

          <div className="nav-right">
            <div className="links" id={showLink ? "hidden" : ""}>
              <Link to="/home">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/faq">Faq</Link>
              <Link to="/sale">Sale</Link>
              <Link to="/product">Product</Link>
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
