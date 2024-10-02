import React from "react";
import "./crew.css";
import Image from "../assets/crew/image-douglas-hurley.png";

const Commander = () => {
  return (
    <>
      <h2 className="crew">
        <span>02</span> MEET YOUR CREW
      </h2>
      <div className="crew-container">
        <div className="profile">
          <div className="inner-container">
            <span>COMMANDER</span>
            <h1>DOUGLAS HURLEY</h1>
            <p className="about">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot, and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
          <div className="navigation">
            <div
              className="circles"
              onClick={() => {
                /* Navigate to page 1 */
              }}
            ></div>
            <div
              className="circles"
              onClick={() => {
                /* Navigate to page 2 */
              }}
            ></div>
            <div
              className="circles"
              onClick={() => {
                /* Navigate to page 3 */
              }}
            ></div>
            <div
              className="circles"
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

export default Commander;
