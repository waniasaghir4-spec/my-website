import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setLoading(false);
    setTimeout(() => setShowContent(true), 50);
  };

  useEffect(() => {
    if (showContent) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [showContent]);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <div
        style={{
          opacity: showContent ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      >
        <Navigation />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Process />
          <Testimonials />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
