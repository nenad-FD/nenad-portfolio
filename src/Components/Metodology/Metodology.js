import React from "react";
import "./Metodology.css";

function Metodology() {
  return (
    <div className="metodology">
      <h1 className="metodology__header">My Metodology</h1>
      <div className="metodology__container container">
        <div className="metodology__card">
          <div className="metodology__img">
            <img src="/img/Analytics.svg" alt="analytics" />
          </div>
          <h4 className="metodology__title">
            <span>01</span> Analytics
          </h4>
          <p className="metodology__text">
            Analysis of the whole project. Project division on smaller parts and
            analysis of every individual parts.
          </p>
        </div>
        <div className="metodology__card">
          <div className="metodology__img">
            <img src="/img/Planing.svg" alt="planing" />
          </div>
          <h4 className="metodology__title">
            <span>02</span> Planing
          </h4>
          <p className="metodology__text">
            Layout choice for all necessary versions. Fonts, colors and other
            details choice.
          </p>
        </div>
        <div className="metodology__card">
          <div className="metodology__img">
            <img src="/img/Building.svg" alt="building" />
          </div>
          <h4 className="metodology__title">
            <span>03</span> Building
          </h4>
          <p className="metodology__text">
            Sistematic and thorough approach of project making.
          </p>
        </div>
        <div className="metodology__card">
          <div className="metodology__img">
            <img src="/img/Tester.svg" alt="tester" />
          </div>
          <h4 className="metodology__title">
            <span>04</span> Tester
          </h4>
          <p className="metodology__text">Testing and correction of details.</p>
        </div>
      </div>
    </div>
  );
}

export default Metodology;
