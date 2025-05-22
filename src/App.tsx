import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Signup />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
