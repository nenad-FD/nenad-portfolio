import React from "react";
import "./Skills.css";
import SkillBox from "./SkillBox";
//React-icon
import { SiHtml5, SiCss3, SiRedux } from "react-icons/si";
import { FaSass, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";

function Skills() {
  const data = [
    {
      name: "HTML",
      fullName: "Hyper Text Markup Language",
      text:
        "- Semantic HTML elements, Attributes, Forms and validations, Conventions and best practices, SEO basics.",
      icon: <SiHtml5 className="html__icon icon" />,
    },
    {
      name: "CSS",
      fullName: "Cascading Style Sheets",
      text:
        "- Box model, Positioning, Display, Animations, Flexbox, Grid, Responsive layouts and Media Queries.",
      icon: <SiCss3 className="css__icon icon" />,
    },
    {
      name: "Bootstrap",
      fullName: "Bootstrap",
      text: "- I have experience with using Bootstrap classes",
      icon: <BsFillBootstrapFill className="bootstrap__icon icon" />,
    },
    {
      name: "SASS",
      fullName: "Syntactically awesome style sheets",
      text: "I am able to use SASS and write code on readeable and easier way.",
      icon: <FaSass className="sass__icon icon" />,
    },
    {
      name: "JS",
      fullName: "JavaScript",
      text:
        "- Vanilla JS: Data types, Functions, Conditionals, Loops. Dom manipulations and events. Fetch API and JSON. ES6+ features: Arrow functions, Async/Await, Promises, Destructuring.",
      icon: <IoLogoJavascript className="js__icon icon" />,
    },
    {
      name: "React",
      fullName: "React",
      text:
        "- JSX syntax, Class-based components, Functional Components, State & props, Hooks, Router, Material UI.",
      icon: <FaReact className="react__icon icon" />,
    },
    {
      name: "Redux",
      fullName: "Redux",
      text: "- Store, actions, reducers.",
      icon: <SiRedux className="redux__icon icon" />,
    },
  ];
  return (
    <div className="skills" id="skills">
      <h3 className="skills__heading">Skills</h3>
      <div className="gray-line"></div>
      <div className="skills__container container">
        <ul className="skills__list">
          {data.map((el) => {
            return <SkillBox data={el} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
