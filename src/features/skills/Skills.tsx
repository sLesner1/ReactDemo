import React from 'react';
import SkillsRadar from '../../components/skillsRadar/SkillsRadar';
import { MdCode, MdLanguage, MdPhoneIphone, MdSpeed, MdWidgets } from 'react-icons/md';
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
        <section style={{
            position: 'relative',
            width: '100%',
            backgroundColor: 'var(--color-background)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <IconGradient />
            <p style={{ color: 'var(--color-white)', fontSize: '2rem', fontWeight: 700, letterSpacing: '1px' }}>Skills</p>
            <div style={cardStyle}>
                <div style={cornerGlowStyle} />
                <div style={grainOverlayStyle} />

                <div style={contentStyle}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ width: '35%' }}>
                            <p style={{ color: 'var(--color-white)', fontSize: '2rem', fontWeight: 700, letterSpacing: '1px', marginTop: 0 }}>Key Capabilities</p>
                            <div style={{ width: '100%', display: 'flex', gap: 10, filter: 'drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.2))' }}>
                                <MdLanguage size={52} style={{fill: "url(#blue-purple-gradient)" }} />
                                <p style={{ color: '#ccc', fontSize: 18, textAlign: 'left' }}>
                                    Web Development
                                </p>
                            </div>
                            <div style={{ width: '100%', display: 'flex', gap: 10, filter: 'drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.2))' }}>
                                <MdPhoneIphone size={52} style={{fill: "url(#blue-purple-gradient)" }} />
                                <p style={{ color: '#ccc', fontSize: 18, textAlign: 'left' }}>
                                    Mobile Development
                                </p>
                            </div>
                            <div style={{ width: '100%', display: 'flex', gap: 10, filter: 'drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.2))' }}>
                                <MdWidgets size={52} style={{fill: "url(#blue-purple-gradient)" }} />
                                <p style={{ color: '#ccc', fontSize: 18, textAlign: 'left' }}>
                                    Component Systems
                                </p>
                            </div>
                            <div style={{ width: '100%', display: 'flex', gap: 10, filter: 'drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.2))' }}>
                                <MdSpeed size={52} style={{fill: "url(#blue-purple-gradient)" }} />
                                <p style={{ color: '#ccc', fontSize: 18, textAlign: 'left' }}>
                                    Performance Optimization
                                </p>
                            </div>
                            <div style={{ width: '100%', display: 'flex', gap: 10, filter: 'drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.2))' }}>
                                <MdCode size={52} style={{fill: "url(#blue-purple-gradient)" }} />
                                <p style={{ color: '#ccc', fontSize: 18, textAlign: 'left' }}>
                                    TypeScript Mastery
                                </p>
                            </div>
                        </div>
                        <div style={dividerWrapper}>
                            <div style={dividerLine} />
                        </div>
                        <div style={{ width: '65%' }}>
                            <SkillsRadar />
                        </div>
                    </div>
                </div>

                <div style={accentGlowStyle} />
            </div>
        </section >
    );
};

const dividerWrapper: React.CSSProperties = {
    position: 'relative',
    width: '41px',
    alignSelf: 'stretch',
    display: 'flex',
    justifyContent: 'center',
};

const dividerLine: React.CSSProperties = {
    width: '1px',
    height: '100%',
    background: `
    linear-gradient(
      to bottom,
      transparent 0%,
      rgba(255,255,255,0.08) 30%,
      rgba(255,255,255,0.08) 70%,
      transparent 100%
    )
  `,
    filter: 'blur(0.2px)',
};

const cardStyle: React.CSSProperties = {
    width: '1090px',
    padding: 32,
    borderRadius: '60px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.02)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    cursor: 'default',
    cornerShape: 'squircle'
};

const cornerGlowStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    background: `
        radial-gradient(ellipse at -40% -50%, rgba(255, 255, 255, 0.15) 0%, transparent 60%),
        radial-gradient(ellipse at 140% 150%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)
    `,
    filter: 'blur(3px)',
};

const grainOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    opacity: 0.04,
    pointerEvents: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3 Vag%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
};

const contentStyle: React.CSSProperties = {
    width: '100%'
};

const accentGlowStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    zIndex: 1,
};


export default Skills;