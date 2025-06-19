import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Surf from './components/Surf';
import Dining from './components/Dining';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Rooms />
      <Surf />
      <Dining />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;