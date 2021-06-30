import React from "react";
import "./style.css";
import github from '../images/GitHub-Mark-Light-64px.png';
import window from '../images/icons8-new-window-50.png';

function ProjectCard(props) {
  return (
    <div className="projectCard">
      <div className="content">
        <div className="cardHeader">
          <h5>{props.name}</h5>
        </div>
        <div className="dcx">
          <p>{props.description}</p>
        </div>
        <div className="cardFooter">
          <p className='tags'>{props.tags}</p>
          <ul>
            <li><a href={props.sourceLink} target="_blank" rel='noreferrer'>
              <img src={github} alt="Link to GitHub"/> 
            </a></li>
            <li><a href={props.deployedLink} target="_blank" rel='noreferrer'>
              <img src={window} alt="Link to App"/> 
            </a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;