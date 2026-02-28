import React from 'react';
import InteractiveGrid from './InteractiveGrid';
import './Hero.scss'

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <InteractiveGrid />

            <div className="hero__radial-overlay" />
            <div className="hero__bottom-fade" />

            <div className="hero__content">
                <h1 className="hero__title">
                    React
                </h1>
                <p className="hero__subtitle">Building Fluid React Experiences</p>
            </div>
        </section>
    );
};

export default Hero;