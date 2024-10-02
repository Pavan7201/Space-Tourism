import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/Home";
import Commander from "./components/commander";
import Specialist from "./components/Specialist";
import Pilot from "./components/Pilot";
import Engineer from "./components/Flight Engineer";
import Moon from "./components/Moon";
import Mars from "./components/Mars";
import Europa from "./components/Europa";
import Titan from "./components/Titan";
import Launch from "./components/Technology";
import SpaceCapsule from "./components/SpaceCapsule";
import Spaceport from "./components/Spaceport";
import homeBackgroundImage from "../src/assets/home/background-home-desktop.jpg";
import destinationBackgroundImage from "../src/assets/destination/background-destination-desktop.jpg";
import crewBackgroundImage from "../src/assets/crew/background-crew-desktop.jpg";
import technologyBackgroundImage from "../src/assets/technology/background-technology-desktop.jpg";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState("");
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setBackgroundImage(`url(${homeBackgroundImage})`);
        setActiveLink("home");
        break;
      case "/Destination":
      case "/moon":
      case "/mars":
      case "/europa":
      case "/titan":
        setBackgroundImage(`url(${destinationBackgroundImage})`);
        setActiveLink("destination");
        break;
      case "/Crew":
        setBackgroundImage(`url(${crewBackgroundImage})`);
        setActiveLink("crew");
        break;
      case "/Technology":
        setBackgroundImage(`url(${technologyBackgroundImage})`);
        setActiveLink("technology");
        break;
      default:
        setBackgroundImage("");
    }
  }, [location.pathname]);

  // Redirect to Home page on refresh if not on defined route
  useEffect(() => {
    const definedRoutes = [
      "/",
      "/Destination",
      "/moon",
      "/mars",
      "/europa",
      "/titan",
      "/Crew",
      "/Technology",
      "/commander",
      "/specialist",
      "/pilot",
      "/engineer",
      "/launch",
      "/spacecapsule",
      "/spaceport",
    ];

    if (!definedRoutes.includes(location.pathname)) {
      navigate("/"); // Redirect to Home
    }
  }, [location.pathname, navigate]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div
      style={{
        backgroundImage: backgroundImage,
        height: "100%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <Header activeLink={activeLink} onLinkClick={handleLinkClick} />
      <Routes>
        <Route path="/" element={<Home onLinkClick={handleLinkClick} />} />
        <Route
          path="/Destination"
          element={<Moon onLinkClick={handleLinkClick} />}
        />
        <Route
          path="/Crew"
          element={<Commander onLinkClick={handleLinkClick} />}
        />
        <Route
          path="/Technology"
          element={<Launch onLinkClick={handleLinkClick} />}
        />
        <Route path="/moon" element={<Moon onLinkClick={handleLinkClick} />} />
        <Route path="/mars" element={<Mars onLinkClick={handleLinkClick} />} />
        <Route
          path="/europa"
          element={<Europa onLinkClick={handleLinkClick} />}
        />
        <Route
          path="/titan"
          element={<Titan onLinkClick={handleLinkClick} />}
        />
        <Route
          path="/commander"
          element={<Commander onLinkClick={handleLinkClick} />}
        />
        <Route
          path="/specialist"
          element={<Specialist onLinkClick={handleLinkClick} />}
        />
        <Route
          path="/pilot"
          element={<Pilot onLinkClick={handleLinkClick} />}
        />
        <Route
          path="/engineer"
          element={<Engineer onLinkClick={handleLinkClick} />}
        />
        <Route
          path="/launch"
          element={<Launch onLinkClick={handleLinkClick} />}
        />
        <Route
          path="/spacecapsule"
          element={<SpaceCapsule onLinkClick={handleLinkClick} />}
        />
        <Route
          path="/spaceport"
          element={<Spaceport onLinkClick={handleLinkClick} />}
        />
      </Routes>
    </div>
  );
};

export default App;
