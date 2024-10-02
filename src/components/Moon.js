import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Image from "../assets/destination/image-moon.png";
import "./planet.css";

const Moon = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeDestination, setActiveDestination] = useState("moon"); // Default active destination

  // Update active destination based on current path
  useEffect(() => {
    setActiveDestination(location.pathname.slice(1)); // Get the current destination from the path
  }, [location.pathname]);

  const handleNavigation = (destination) => {
    setActiveDestination(destination); // Set the active destination
    navigate(`/${destination}`); // Navigate to the selected destination
  };

  return (
    <>
      <h2 className="destination">
        <span>01</span> PICK YOUR DESTINATION
      </h2>
      <div className="planet-container">
        <div className="planet">
          <img src={Image} alt="Moon" />
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
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className="info">
            <div className="distance">
              <h6>AVG. DISTANCE</h6>
              <p>384,400 KM</p>
            </div>
            <div className="time-travel">
              <h6>EST. TRAVEL TIME</h6>
              <p>3 DAYS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Moon;
