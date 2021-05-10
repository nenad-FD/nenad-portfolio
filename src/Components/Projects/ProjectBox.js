import React, { useState } from "react";
import "./ProjectBox.css";
//React Icons
import { AiFillGithub } from "react-icons/ai";

function ProjectBox({ project }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="projectBox" key={project.name}>
      <div className="projectBox__img">
        <img src={project.img} alt={project.name} />
      </div>
      <div className="projectBox__content">
        <h4 className="projectBox__title">{project.name}</h4>
        <p className="projectBox__technologies lead">
          Technologies: <span>{project.technologies}</span>
        </p>
        <p className="projectBox__devices lead">
          Devices: <span>{project.devices}</span>
        </p>
        <p className="projectBox__text lead">
          {showMore === true
            ? project.description
            : project.description.substring(0, 70)}
          {showMore === true ? (
            <span
              className="projectBox__text--show"
              onClick={() => {
                setShowMore(false);
              }}
            >
              {" "}
              Show less
            </span>
          ) : (
            <span
              className="projectBox__text--show"
              onClick={() => {
                setShowMore(true);
              }}
            >
              {" "}
              ... Show more
            </span>
          )}
        </p>
        <div className="projectBox__links">
          <a
            rel="noreferrer"
            target="_blank"
            href={project.live}
            className="link__live"
          >
            Live Demo
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href={project.code}
            className="link__code"
          >
            <AiFillGithub className="github__icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectBox;
