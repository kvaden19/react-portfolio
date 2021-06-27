import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import gmail from '../../utils/images/gmail-logo.png';
import linkedin from '../../utils/images/linkedin-logo.png';
import github from '../../utils/images/GitHub-Mark-Light-64px.png';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavBar() {
  return (
    <div id='sidebar'>
      <img src='https://via.placeholder.com/200x200'/>
      <h3>KELLY VADEN</h3>
      <h5>Full Stack Software Engineer</h5>
      <div id='nav'>
      <ul>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Portfolio</a></li>
        <li><a href='#'>Resume</a></li>
      </ul>
      </div>
      <div id='contact'>
      <h5>Contact</h5>
      <ul>
        <li><a href="mailto:klvaden@gmail.com">
          <img src={gmail} alt="Gmail icon"/> 
        </a></li>
        <li><a href="https://github.com/kvaden19" target="_blank">
          <img src={github} alt="GitHub icon" /> 
        </a></li>
        <li><a href="https://www.linkedin.com/in/klvaden/" target="_blank">
          <img src={linkedin} alt="LinkedIn icon"/> 
        </a></li>
      </ul>
      </div>
    </div>
  );
}

export default NavBar;