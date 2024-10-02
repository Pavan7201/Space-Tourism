import React from "react";
import Image from "../assets/crew/image-victor-glover.png";

const Pilot = () => {
  return (
    <>
      <h2 className="crew">
        <span>02</span> MEET YOUR CREW
      </h2>
      <div className="crew-container">
        <div className="data">
          <span>PILOT</span>
          <h1>VICTOR GLOVER</h1>
          <p className="description">
            Pilot on the first operational flight of the SpaceX Crew Dragon to
            the International Space Station. Glover is a commanderin the
            U.S.Navy wherehe pilots an F/A-18. He was a crew member of
            Expendition 64, and served as a station systems flight engineer.
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

export default Pilot;
