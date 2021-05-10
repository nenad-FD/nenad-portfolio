import React from "react";
import "./SkillBox.css";

function SkillBox({ data }) {
  return (
    <li className="skillBox" key={data.name}>
      <div className="skillBox__icon">
        <p className="skillBox__name">{data.name}</p>
        {data.icon}
      </div>
      <div className="skillBox__content">
        <h4 className="skillBox__title">{data.fullName}</h4>
        <p className="skillBox__text">{data.text}</p>
      </div>
    </li>
  );
}

export default SkillBox;
