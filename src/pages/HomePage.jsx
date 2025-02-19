import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Features from '../components/Features';

function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Features />
    </div>
  );
}

export default HomePage;