import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Image from "../assets/destination/image-mars.png";

const Mars = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeDestination, setActiveDestination] = useState("mars"); // Default active destination

  useEffect(() => {
    // Update the active destination based on the current path
    setActiveDestination(location.pathname.slice(1)); // Remove leading '/'
  }, [location.pathname]);

  const handleNavigation = (destination) => {
    setActiveDestination(destination);
    navigate(`/${destination}`);
  };

  return (
    <>
      <h2 className="destination">
        <span>01</span> PICK YOUR DESTINATION
      </h2>
      <div className="planet-container">
        <div className="planet">
          <img src={Image} alt="Mars" />
        </div>
        <div className="data">
          <ul>
            <li
              onClick={() => handleNavigation("moon")}
              className={activeDestination === "moon" ? "active" : ""}
            >
              MOON
            </li>
            <li
              onClick={() => handleNavigation("mars")}
              className={activeDestination === "mars" ? "active" : ""}
            >
              MARS
            </li>
            <li
              onClick={() => handleNavigation("europa")}
              className={activeDestination === "europa" ? "active" : ""}
            >
              EUROPA
            </li>
            <li
              onClick={() => handleNavigation("titan")}
              className={activeDestination === "titan" ? "active" : ""}
            >
              TITAN
            </li>
          </ul>
          <h1>{activeDestination.toUpperCase()}</h1>
          <p className="description">
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </p>
          <div className="info">
            <div className="distance">
              <h6>AVG. DISTANCE</h6>
              <p>224 MIL. KM</p>
            </div>
            <div className="time-travel">
              <h6>EST. TRAVEL TIME</h6>
              <p>9 MONTHS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mars;
