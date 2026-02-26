import React from 'react';
import SkillsRadar from '../../components/skillsRadar/SkillsRadar';
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

            // paddingLeft: 150,
            // paddingRight: 150
        }}>
            <p style={{ color: 'var(--color-white)', fontSize: '2rem', fontWeight: 700, letterSpacing: '1px' }}>Skills</p>
            <div style={cardStyle}>
                <div style={cornerGlowStyle} />
                <div style={grainOverlayStyle} />

                <div style={contentStyle}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: '50%' }}>
                            <p style={{ color: '#ccc', fontSize: 18, textAlign: 'left', width: '50%' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis velit tellus, et facilisis justo mattis sagittis. Sed sem diam, vulputate quis ornare eget, fringilla in est. Maecenas vulputate accumsan gravida. Integer posuere quam dictum nulla rhoncus, vitae tempus sem tristique. In pulvinar ipsum semper leo sagittis ullamcorper. Aenean ac lorem nibh. Integer pharetra mauris id arcu mattis, id sodales est pellentesque. Sed dapibus urna justo, nec laoreet mauris rutrum non. sodales est pellentesque. Sed dapibus urna justo, nec laoreet mauris rutrum non. sodales est pellentesque. Sed dapibus urna justo, nec laoreet mauris rutrum non.
                            </p>
                        </div>

                        <SkillsRadar />

                    </div>
                </div>

                <div style={accentGlowStyle} />
            </div>
        </section >
    );
};

const cardStyle: React.CSSProperties = {
    // position: 'relative',
    width: '1090px',
    // width: '50%',
    padding: 20,
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
    // padding: 'var(--space-20)',
    // position: 'relative',
    // zIndex: 2,
    // textAlign: 'center',
};

const accentGlowStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    zIndex: 1,
};


export default Skills;