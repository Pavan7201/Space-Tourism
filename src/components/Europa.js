import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Image from "../assets/destination/image-europa.png";
import "./planet.css";

const Europa = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeDestination, setActiveDestination] = useState("europa"); // Default active destination

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
          <img src={Image} alt="Europa" />
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
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover’s dream. With an icy surface, it’s perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>
          <div className="info">
            <div className="distance">
              <h6>AVG. DISTANCE</h6>
              <p>628 MIL. KM</p>
            </div>
            <div className="time-travel">
              <h6>EST. TRAVEL TIME</h6>
              <p>3 YEARS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Europa;
