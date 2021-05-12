import React, { useEffect, useRef } from "react";
import "./About.css";
//React-icons
import { IoIosArrowForward } from "react-icons/io";
//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  let aboutContainer = useRef(null);
  let imgContainer = useRef(null);
  let aboutContent = useRef(null);
  useEffect(() => {
    gsap.from([imgContainer, aboutContent], {
      duration: 2.5,
      x: "-550",
      opacity: 0.2,
      ease: "ease-in",
      scrollTrigger: {
        trigger: aboutContainer,
      },
    });
  }, []);
  return (
    <div className="about" id="about">
      <div className="container" ref={(el) => (aboutContainer = el)}>
        <h2 className="about__heading">About</h2>
        <div className="gray-line"></div>
        <div className="about__container">
          <div className="about__img" ref={(el) => (imgContainer = el)}>
            <img src="/img/My-img.JPG" alt="my-img" className="my-img" />
          </div>
          <div className="about__content " ref={(el) => (aboutContent = el)}>
            <div className="about__title">
              <h3 className="about__title--heading">
                <span>Front-end</span> React Developer
              </h3>
              <p className="about__title--text lead">
                Hi, my name is Nenad Lalošević. I am Junior Front-end React
                Developer. I have been dealing with Front-end for almost two
                years. I able to work with HTML, CSS, a framework for CSS, i.e.,
                Bootstrap, a preprocessor for CSS, i.e., SASS, JavaScript,
                React. Also, I had experience with using a state manager called
                Redux. Also, my skillsets include fundamentals of technologies
                like Material UI, GSAP, Chart.js...
                <br /> <br />I have experience with displaying data using Graphs
                and Maps. I have experience in making projects such as landing
                pages, simple FE applications using the listed technologies.
              </p>
            </div>
            <div className="about__content--box">
              <ul>
                <li>
                  <IoIosArrowForward className="arrow__icon" />
                  Birthday: <span>2 February 1996</span>
                </li>
                <li>
                  <IoIosArrowForward className="arrow__icon" />
                  Age: <span>25</span>
                </li>
                <li>
                  <IoIosArrowForward className="arrow__icon" />
                  City: <span>Novi Sad</span>
                </li>
              </ul>
              <ul>
                <li>
                  <IoIosArrowForward className="arrow__icon" />
                  Country: <span>Serbia</span>
                </li>
                <li>
                  <IoIosArrowForward className="arrow__icon" />
                  Phone: <span>+381 61 642-76-48</span>
                </li>
                <li>
                  <IoIosArrowForward className="arrow__icon" />
                  Email: <span>nenadlale96@gmail.com</span>
                </li>
              </ul>
            </div>

            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/nenad-FD"
              className="main__btn btn__hover btn"
            >
              Visit my GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
