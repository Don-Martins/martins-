import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingCalendar from './components/FloatingCalendar';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Portfolio />
        <Services />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      
      <Footer />
      <FloatingCalendar />
    </div>
  );
}
