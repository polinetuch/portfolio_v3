import React from 'react';
import './LandingPage.scss';

const LandingPage = () => {
    return (
        <div className='landing-page__container' id='home'>
            <div  className='landing-page__image'>
                <figure>
                    <img 
                        className='landing-page__photo'
                        alt='Cartoon Of Poli'
                        src='https://github.com/polinetuch/portfolio_v2.0/blob/master/assets/img/polinetuch.jpg?raw=true'
                    />
                </figure>
            </div>
            <div className='landing-page__about-me'>
                <h1><strong>Hi, I'm Polinet Uch</strong></h1>
                <p>
                    I am aspiring full stack developer.
                </p>        
                <p>
                When I am not coding, you'll probably find me in my art and craft corner heavily 
                focused in my own trial and error process while I am trying out either different 
                colors of paint or magically turned a recycle cardboard into something unexpected.
                </p>
            </div>
        </div>
    )
};

export default LandingPage;