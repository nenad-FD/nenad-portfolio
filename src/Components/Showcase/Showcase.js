import React from "react";
import "./Showcase.css";
import { Link } from "react-scroll";
//React-icon
import { SiHtml5, SiCss3, SiRedux } from "react-icons/si";
import { FaSass, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";

function Showcase() {
  return (
    <div className="showcase" id="home">
      <div className="showcase__container container">
        <div className="showcase__title">
          <h1 className="showcase__name">Nenad Lalošević</h1>
          <h3 className="showcase__job">
            <span>Front-end</span> React Developer
          </h3>
          <p className="showcase__description lead">
            Ready for work on projects and motivated for learning new things and
            technologies.
          </p>
          <Link
            className="showcase__btn main__btn btn__hover btn"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={10}
            duration={700}
          >
            My Work
          </Link>
        </div>
        <div className="showcase__ilustration">
          <img src="/img/Ilustration.svg" alt="showcase-ilustration" />
        </div>
        <div className="showcase__skills">
          <SiHtml5 className="html__icon icon" />
          <SiCss3 className="css__icon icon " />
          <BsFillBootstrapFill className="bootstrap__icon icon" />
          <FaSass className="sass__icon icon" />
          <IoLogoJavascript className="js__icon icon" />
          <FaReact className="react__icon icon" />
          <SiRedux className="redux__icon icon" />
        </div>
      </div>
    </div>
  );
}

export default Showcase;
