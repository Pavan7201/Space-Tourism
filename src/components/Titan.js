import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Image from "../assets/destination/image-titan.png";
import "./planet.css";

const Titan = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeDestination, setActiveDestination] = useState("titan"); // Default active destination

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
          <img src={Image} alt="Titan" />
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
            Titan is the second-largest moon in the solar system and is unique
            for its dense atmosphere. It's an extraordinary place for
            exploration.
          </p>
          <div className="info">
            <div className="distance">
              <h6>AVG. DISTANCE</h6>
              <p>1.6 BIL. KM</p>
            </div>
            <div className="time-travel">
              <h6>EST. TRAVEL TIME</h6>
              <p>7 YEARS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Titan;
