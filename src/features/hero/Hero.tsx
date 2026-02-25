import React from 'react';
import InteractiveGrid from './InteractiveGrid';

const Hero: React.FC = () => {
    return (
        <section style={{
            position: 'relative',
            height: '100vh',
            width: '100%',
            backgroundColor: 'var(--color-background)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <InteractiveGrid />

            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `
                      radial-gradient(
                        circle at center,
                        rgba(9, 16, 35, 0.8) 0%,
                        rgba(9, 16, 35, 0.5) 30%,
                        rgba(9, 16, 35, 0.3) 55%,
                        rgba(9, 16, 35, 0.1) 70%,
                        rgba(9, 16, 35, 0.0) 85%
                      )
                    `,
                    zIndex: 1,
                    pointerEvents: 'none',
                }}
            />
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '60%',
                background: 'linear-gradient(to bottom, transparent 0%, transparent 20%, rgba(9, 16, 35, 0.8) 70%, var(--color-background) 100%)',
                zIndex: 1,
                pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                <h1 style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: '12rem',
                    letterSpacing: '-0.06em',
                    lineHeight: '0.8',
                    margin: 0,
                    background: 'linear-gradient(to right, var(--color-primary-light), var(--color-primary-dark))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',

                    filter: `
        drop-shadow(0px 0px 10px #6f9dfacc)

        drop-shadow(-30px 0px 45px #6DF9FB99) 
        drop-shadow(30px 0px 45px rgba(160, 30, 239, 0.6))

        drop-shadow(-60px 0px 120px #6DF9FB4d)
        drop-shadow(60px 0px 120px rgba(160, 30, 239, 0.3))
    `
                }}>
                    React
                </h1>
                <p style={{ color: 'var(--color-white)', fontSize: '2rem', fontWeight: 700, letterSpacing: '1px' }}>Building Fluid React Experiences</p>
            </div>
        </section>
    );
};

export default Hero;