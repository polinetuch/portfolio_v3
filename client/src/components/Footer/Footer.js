import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer__container'>
            <div className='footer__navigation'>
                <ul className='footer__navigation-list'>
                    <li><a href='/#home'>Home</a></li>
                    <li><a href='/#about-me'>About</a></li>
                    <li><a href='/#my-skills'>Skills</a></li>
                    <li><a href='/#projects'>Projects</a></li>
                    <li><a href='/#contact'>Contact</a></li>
                </ul>
            </div>
            <div className='footer__social-media'>
                <a href='https://www.linkedin.com/in/polinetuch/'>
                    <img 
                        className='footer__icon'
                        src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/linkedin-512.png'
                        alt='linked-in'
                    />
                </a>

                <a href='https://github.com/polinetuch'>
                    <img 
                        className='footer__icon'
                        src='https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png'
                        alt='github'
                    />
                </a>
            </div>
        </div>

    )
};

export default Footer;