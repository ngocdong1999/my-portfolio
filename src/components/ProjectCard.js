import React from 'react';
import github from './../assets/icons/github.svg'

const ProjectCard = ({project: {name, image, deployed_url, github_url, category}}) => {
    return (
        <div className="project-card col-lg-4 col-md-6 my-2">
            <figure className="project-card__wrapper">
                <a href={ deployed_url } target="_blank"  rel="noopener noreferrer" className="project-card__link">
                    <img src={image} alt={name} className="project-card__image" />
                </a>
                <div className="project-card__title">
                    <a href={github_url} target="_blank" rel="noopener noreferrer" >
                        <img src={ github } alt="github link" className='project-card__icon mr-2' />
                        {name}
                    </a>
                </div>
            </figure>
        </div>
    );
};

export default ProjectCard;