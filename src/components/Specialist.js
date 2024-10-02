import React from "react";
import Image from "../assets/crew/image-mark-shuttleworth.png";

const Specialist = () => {
  return (
    <>
      <h2 className="crew">
        <span>02</span> MEET YOUR CREW
      </h2>
      <div className="crew-container">
        <div className="data">
          <span>MISSION SPECIALIST</span>
          <h1>MARK SHUTTLEWORTH</h1>
          <p className="description">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot, and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
          <div className="navigation-circles">
            <div
              className="circle"
              onClick={() => {
                /* Navigate to page 1 */
              }}
            ></div>
            <div
              className="circle"
              onClick={() => {
                /* Navigate to page 2 */
              }}
            ></div>
            <div
              className="circle"
              onClick={() => {
                /* Navigate to page 3 */
              }}
            ></div>
            <div
              className="circle"
              onClick={() => {
                /* Navigate to page 4 */
              }}
            ></div>
          </div>
        </div>
        <div className="crew-image">
          <img src={Image} alt="Douglas Hurley, NASA astronaut" />
        </div>
      </div>
    </>
  );
};

export default Specialist;
