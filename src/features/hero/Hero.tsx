import React from 'react';
import InteractiveGrid from './InteractiveGrid';

const Hero: React.FC = () => {
  return (
    <section style={{ 
      position: 'relative', 
      height: '100vh', 
      width: '100%', 
      backgroundColor: '#091023', 
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <InteractiveGrid />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '60%',
        background: 'linear-gradient(to bottom, transparent 0%, transparent 20%, rgba(9, 16, 35, 0.8) 70%,#091023 100%)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <h1 style={{ color: 'white', fontSize: '5rem', margin: 0 }}>React</h1>
        <p style={{ color: '#06B6D4', letterSpacing: '4px' }}>LIVE DEMO</p>
      </div>
    </section>
  );
};

export default Hero;