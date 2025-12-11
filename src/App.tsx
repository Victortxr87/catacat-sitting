import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-quart',
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Pricing />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
