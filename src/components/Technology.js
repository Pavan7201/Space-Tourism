import React from "react";
import Image from "../assets/technology/image-launch-vehicle-portrait.jpg";
import "./technology.css";

const Launch = () => {
  return (
    <>
      <h2 className="technology">
        <span>03</span> SPACE LAUNCH 101
      </h2>
      <div className="technology-container">
        <div className="navigation-circles">
          <div
            className="circle"
            onClick={() => {
              /* Navigate to page 1 */
            }}
          >
            <h1>1</h1>
          </div>
          <div
            className="circle"
            onClick={() => {
              /* Navigate to page 2 */
            }}
          >
            <h1>2</h1>
          </div>
          <div
            className="circle"
            onClick={() => {
              /* Navigate to page 3 */
            }}
          >
            <h1>3</h1>
          </div>
        </div>
        <div className="data-process">
          <span>THE TERMINOLOGY...</span>
          <h1>LAUNCH VEHICLE</h1>
          <p className="process">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
        <div className="crew-image">
          <img src={Image} alt="Douglas Hurley, NASA astronaut" />
        </div>
      </div>
    </>
  );
};

export default Launch;
