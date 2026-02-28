import React from 'react';
import Hero from './features/hero/Hero';
import Skills from './features/skills/Skills';
import Stats from './features/stats/Stats';
import Footer from './features/footer/Footer';

const App: React.FC = () => {
  return (
    <div className='app'>
      <Hero />
      <Skills />
      <Stats />
      <Footer />
    </div>
  );
};

export default App;