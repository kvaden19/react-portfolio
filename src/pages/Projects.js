import React, { Component } from 'react';
import Wrapper from "../components/Wrapper";
import ProjectCard from '../components/ProjectCard';
import projects from '../utils/projects.json';
import './styles/pages.css';

class Projects extends Component {
    state = { projects };

    render() {
        return (
        <div className='projectPage'>
            <Wrapper>
                {this.state.projects.map(project => (
                <ProjectCard
                    key={project.id}
                    name={project.name}
                    image={project.image}
                    description={project.description}
                    tags={project.tags}
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