import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ProofMetrics } from './components/sections/ProofMetrics';
import { ServicePillars } from './components/sections/ServicePillars';
import { Portfolio } from './components/sections/Portfolio';
import { Process } from './components/sections/Process';
import { About } from './components/sections/About';
import { FAQ } from './components/sections/FAQ';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { useRevealObserver } from './components/ui/animation';

function App() {
  useRevealObserver();

  return (
    <>
      {/* Skip to content for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="pt-16 sm:pt-20">
        <Hero />
        <ProofMetrics />
        <ServicePillars />
        <Portfolio />
        <Process />
        <About />
        <FAQ />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
