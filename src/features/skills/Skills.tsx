import React from 'react';
import SkillsRadar from '../../components/skillsRadar/SkillsRadar';
import { MdCode, MdLanguage, MdPhoneIphone, MdSpeed, MdWidgets } from 'react-icons/md';
import './Skills.scss';

const IconGradient = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }}>
    <linearGradient id="blue-purple-gradient" x1="0%" y1="0%" x2="80%" y2="80%">
      <stop offset="0%" stopColor="var(--color-primary-light)" />
      <stop offset="100%" stopColor="var(--color-primary-dark)" />
    </linearGradient>
  </svg>
);

const Skills: React.FC = () => {
    return (
        <section className='skills__section'>
            <IconGradient />
            <p className='skills__section-title'>Skills</p>
            <div className='skills__card'>
                <div className='skills__card-corner-glow' />
                <div className='skills__card-grain-overlay' />

                <div className='skills__card-content'>
                    <div className='skills__card-content-row'>
                        <div className='skills__card-content-row-left'>
                            <p className='skills__card-content-row-capabilities-title'>Key Capabilities</p>
                            <div className='skills__card-content-row-capabilities-item'>
                                <MdLanguage size={52} style={{fill: "url(#blue-purple-gradient)" }} />
                                <p className='skills__card-content-row-capabilities-item-text'>
                                    Web Development
                                </p>
                            </div>
                            <div className='skills__card-content-row-capabilities-item'>
                                <MdPhoneIphone size={52} style={{fill: "url(#blue-purple-gradient)" }} />
                                <p className='skills__card-content-row-capabilities-item-text'>
                                    Mobile Development
                                </p>
                            </div>
                            <div className='skills__card-content-row-capabilities-item'>
                                <MdWidgets size={52} style={{fill: "url(#blue-purple-gradient)" }} />
                                <p className='skills__card-content-row-capabilities-item-text'>
                                    Component Systems
                                </p>
                            </div>
                            <div className='skills__card-content-row-capabilities-item'>
                                <MdSpeed size={52} style={{fill: "url(#blue-purple-gradient)" }} />
                                <p className='skills__card-content-row-capabilities-item-text'>
                                    Performance Optimization
                                </p>
                            </div>
                            <div className='skills__card-content-row-capabilities-item'>
                                <MdCode size={52} style={{fill: "url(#blue-purple-gradient)" }} />
                                <p className='skills__card-content-row-capabilities-item-text'>
                                    TypeScript Mastery
                                </p>
                            </div>
                        </div>
                        <div className='skills__card-content-row-vertical-wrapper'>
                            <div className='skills__card-content-row-vertical-wrapper-line' />
                        </div>
                        <div className='skills__card-content-row-horizontal-wrapper' />
                        <div className='skills__card-content-row-right'>
                            <SkillsRadar />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Skills;