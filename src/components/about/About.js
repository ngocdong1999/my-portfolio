import React from 'react';
import { skills } from '../data/about_data'
import Skillcard from '../Skillcard';
import { motion } from 'framer-motion'
import  './about.css';





const About = () => {
    const about_variant = {
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
        <motion.div className='about'
            variants = { about_variant }
            initial = 'hidden'
            animate = 'visible'
            exit = 'exit'
        >
            <h6 className='about__intro'>
                I describe my self as someone who's persistent, a quick learner and loves problem solving by using simple and scalable solutions.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">
                    What I offer
                </h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard key= {skill.title} skill = {skill} />
                            )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default About;