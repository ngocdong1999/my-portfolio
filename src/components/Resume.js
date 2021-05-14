import React from 'react';
import Bar from './Bar';
import { motion } from 'framer-motion'
import { tools , languages } from './data/resume_data'



const Resume = () => {
    const resume_variant = {
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
        <motion.div className="container resume"
            variants = { resume_variant }
            initial = 'hidden'
            animate = 'visible'
            exit = 'exit'
        >
            <div className="row">
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Computer Science Engineering
                        </h5>
                        <p className="resume-card__name">
                            Industrial University of Ho Chi Minh City (2018 - 2020)
                        </p>
                        <p className="resume-card__details">
                            I am currently studying the last year of Information Technology major at Industrial University (till 5th sem) : 7.6 (3.1) 
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card">
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Intern
                        </h5>
                        <p className="resume-card__name">
                            ...
                        </p>
                        <p className="resume-card__details">
                            Lorem ipsum dolor
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-languages__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-languages__body mt-3">
                        {
                            languages.map(language => 
                                <Bar key={ language.name } bar={language} />
                                )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-languages__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-languages__body mt-3">
                        {
                            tools.map(tool => 
                                <Bar key= { tool.name } bar={tool} />
                                )
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;