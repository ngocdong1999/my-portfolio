import React, { useState } from 'react';
import data_projects from './data/projects_data'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

const Projects = () => {
    const [projects, setProjects] = useState(data_projects);
    const [active, setActive] = useState('All')

    const handleFilterCatagory = (name) => {
        const newProjects = data_projects.filter(project => project.category.includes(name));
        setProjects(newProjects);
        setActive(name)
    }

    const project_variant = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration:0.7, type: 'spring'
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }

    return (
        <motion.div className="container projects"
            variants = { project_variant }
            initial = 'hidden'
            animate = 'visible'
            exit = 'exit'
        >
            <div className="projects__navbar">
                <div onClick={() => {setProjects(data_projects); setActive('All')}}
                    className={active === 'All' ? 'projects__navbar-active' : ''}
                >All</div>
                <div onClick={() => handleFilterCatagory('react.js')}
                    className={active === 'react.js' ? 'projects__navbar-active' : ''}
                >React</div>
                <div onClick={() => handleFilterCatagory('laravel')}
                    className={active === 'laravel' ? 'projects__navbar-active' : ""}
                >Laravel</div>
                <div onClick={() => handleFilterCatagory('firebase')}
                    className={active === 'firebase' ? 'projects__navbar-active' : ''}
                >Firebase</div>
                <div onClick={() => handleFilterCatagory('html-css')}
                    className={active === 'html-css' ? 'projects__navbar-active' : ''}
                >Template</div>
            </div>
            <div className="row">
                {
                    projects.map(project => 
                        <ProjectCard key={project.name} project={project} />
                    )
                }
            </div>
        </motion.div>
    );
};

export default Projects;