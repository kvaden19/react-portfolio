import React from "react";
// import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        {/* <img alt={props.name} src={props.image} /> */}
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>Source Code:</strong> {props.sourceLink}
          </li>
          <li>
            <strong>Deployed App:</strong> {props.deployedLink}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;