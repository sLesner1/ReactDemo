import React from 'react';
import Hero from './features/hero/Hero';

const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--color-background)'}}>
      <Hero />
      <section style={{ height: '100vh', padding: '50px' }}>
        <h2 style={{ color: '#333' }}></h2>
        <p></p>
      </section>
    </div>
  );
};

export default App;