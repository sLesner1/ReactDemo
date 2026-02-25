import React from 'react';
import Hero from './features/hero/Hero';
import Skills from './features/skills/Skills';
import Stats from './features/stats/Stats';

const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'var(--color-background)', display: 'flex', flexDirection: 'column', gap: 'var(--space-100)'}}>
      <Hero />
      <Skills />
      <Stats />
    </div>
  );
};

export default App;