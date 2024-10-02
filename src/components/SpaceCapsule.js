import React from "react";
import Image from "../assets/technology/image-space-capsule-portrait.jpg";

const SpaceCapsule = () => {
  return (
    <>
      <h2 className="crew">
        <span>03</span> SPACE LAUNCH 101
      </h2>
      <div className="crew-container">
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
        <div className="data">
          <span>THE TERMINOLOGY...</span>
          <h1>SPACE CAPSULE</h1>
          <p className="description">
            A space capsule is an often-crewed spacecraft that uses a blunt-body
            reentry capsule to reenter the Earth's atmosphere without wings. Our
            capsule is where you'll spend your time during the flight. It
            includes a space gym, cinema, and plenty of other activities to keep
            you entertained.
          </p>
        </div>
        <div className="crew-image">
          <img src={Image} alt="Douglas Hurley, NASA astronaut" />
        </div>
      </div>
    </>
  );
};

export default SpaceCapsule;
