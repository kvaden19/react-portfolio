import React, { Component } from 'react';
import Wrapper from "../components/Wrapper";
import ProjectCard from '../components/ProjectCard';
import projects from '../utils/projects.json';
import './styles/pages.css';

class Projects extends Component {
    state = { projects };

    render() {
        return (
        <div className='mainPage'>
            <Wrapper>
                {this.state.projects.map(project => (
                <ProjectCard
                    name={project.name}
                    description={project.description}
                    sourceLink={project.sourceLink}
                    deployedLink={project.deployedLink}
                />
                ))}
            </Wrapper>
        </div>
        );
    }
}

export default Projects;