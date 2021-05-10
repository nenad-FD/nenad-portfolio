import React from "react";
import "./Projects.css";
import ProjectBox from "./ProjectBox";

function Projects() {
  const data = [
    {
      name: "Amazon",
      img: "/img/Amazon.png",
      technologies: "HTML,CSS,JavaScript (ReactJS)",
      devices: "Desktop",
      description:
        "Amazon Clone App provides authentication for users. For authentication was used Firebase. Application provides users possibilities to choose some of products and put them to the shopping basket. Also, user can remove product from the basket and he always can check value of his own shopping basket.",
      live: "https://react--clone-ii.web.app",
      code: "https://github.com/nenad-FD/Amazon-Clone",
    },
    {
      name: "Covid Tracker",
      img: "/img/Covid-tracker.png",
      technologies: "HTML,Material UI,JavaScript (ReactJS)",
      devices: "Desktop, tablet, mobile",
      description: "In the drop-down menu, it is possible to select one of the offered countries, based on the selection in the boxes, the number of cases, recovered and deaths will be displayed. Also, when choosing a country it is zoomed on the map. By clicking one of the popup circles we also get certain data. By clicking on one of the boxes, it shows a certain data on the chart. Also, it is available table which provides data on total cases, recovered and deaths for all countries individually.",
      live: "https://nenad-fd.github.io/React-covid-tracker/",
      code: "https://github.com/nenad-FD/React-covid-tracker/tree/main",
    },
    {
      name: "Accounts CRUD",
      img: "/img/To-do.png",
      technologies: "HTML,Bootstrap, JavaScript (ReactJS)",
      devices: "Desktop",
      description: "CRUD app enables you to enter an account, change the entered account, inshight of the list of accounts and deletion the account. When you change the page, no request are send to server, but everything is done using the React router.",
      live: "https://to-do-crud.web.app",
      code: "https://github.com/nenad-FD/react-crud-acc",
    },
    {
      name: "EdgeLedger",
      img: "/img/EdgeLedger.png",
      technologies: "HTML,CSS,JavaScript",
      devices: "Desktop, tablet, mobile",
      description:
        "Business landing page which contains home, what, who, and contact section.Flexbox was used for layout.",
      live: "https://nenad-fd.github.io/EdgeLedger/",
      code: "https://github.com/nenad-FD/EdgeLedger",
    },
    {
      name: "NewsGrid",
      img: "/img/NewsGrid.png",
      technologies: "HTML,CSS",
      devices: "Desktop, tablet, mobile",
      description:
        "News landing page which contains home, about and article section. Grid was used for layout.",
      live: "https://nenad-fd.github.io/NewsGrid/",
      code: "https://github.com/nenad-FD/NewsGrid",
    },
  ];
  return (
    <div className="projects">
      <h2 className="project__heading">Projects</h2>
      <div className="gray-line"></div>
      <div className="project__container container">
        {data.map((project) => {
          return <ProjectBox project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
