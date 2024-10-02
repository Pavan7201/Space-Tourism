import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [activeLink, setActiveLink] = useState("");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="container">
      <div className="body">
        <h2>SO, YOU WANT TO TRAVEL TO</h2>
        <span>SPACE</span>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="explore-container">
        <div className="outer-circle"></div>
        <div className="explore">
          <Link
            to="/Destination"
            onClick={() => handleLinkClick("destination")}
            className={activeLink === "destination" ? "active" : ""}
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
