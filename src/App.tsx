import React from 'react';
import Hero from './features/hero/Hero';

const App: React.FC = () => {
  return (
    <div>
      <Hero />
      <section style={{ height: '100vh', backgroundColor: '#091023', padding: '50px' }}>
        <h2 style={{ color: '#333' }}></h2>
        <p></p>
      </section>
    </div>
  );
};

export default App;