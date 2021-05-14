import React from 'react';
import facebook from '../assets/icons/facebook.svg';
import github from '../assets/icons/github.svg';
import zalo from '../assets/icons/zalo.svg';
import pin from '../assets/icons/pin.svg';
import tie from '../assets/icons/tie.svg';
import dong from '../assets/icons/dong.jpg';
import resume from '../assets/resume.pdf';
import { motion } from 'framer-motion'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:ngocdongfc1999@gmail.com")
    }

    const sidebar_variant = {
        hidden: {
            x: '-20vw',
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.2, duration:0.7, type: 'spring'
            }
        }
    }

    return (
        <motion.div className="sidebar"
            variants= { sidebar_variant }
            initial='hidden'
            animate='visible'
        >
            <img src={ dong } alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Tran Ngoc <span>Dong</span></div>
            <div className="sidebar__item sidebar__title">Web Developer</div>
            <a href={ resume } download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon mr-2"/>Download Resume
                </div>
            </a>
            <figure className='sidebar__social-icons my-2'>
                <a href="https://www.facebook.com/dongtran.27799/" target='_blank' rel='noopener noreferrer'>
                    <img src={facebook} alt="facebook" className="sidebar__icon mr-3"/>
                </a>
                <a href="https://www.zalo.me/0356962897/" target='_blank' rel='noopener noreferrer'>
                    <img src={zalo} alt="zalo" className="sidebar__icon sidebar__icon-zalo"/>
                </a>
            </figure>
            <div className='sidebar__contact'>
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/ngocdong1999" target='_blank' rel='noopener noreferrer'>
                        <img src={github} alt="github" className="sidebar__icon mr-2"/>Github
                    </a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt='location' className="sidebar__icon mr-2" />
                    Ho Chi Minh, Viet Nam
                </div>
                <div className="sidebar__item"><p className='sidebar__email-text'>ngocdongfc1999@gmail.com</p></div>
                <div className="sidebar__item">035-696-2897</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={ handleEmailMe }>Email me</div>
        </motion.div>
    );
};

export default Sidebar;

