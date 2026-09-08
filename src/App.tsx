import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Global WhatsApp Configuration for CodeLabs Web Solutions
// Change these values to instantly customize all WhatsApp links across the entire website!
const WHATSAPP_PHONE_NUMBER = '94752903017'; // Sleek international format (e.g. Sri Lanka prefix 94)
const DEFAULT_PREFILLED_MESSAGE = 'Hi CodeLabs 👋\n\nI need help with a project task. Can you assist me?';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Build the correct WhatsApp URL
  const encodedMessage = encodeURIComponent(DEFAULT_PREFILLED_MESSAGE);
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedMessage}`;

  // Smooth scroll handler to target section
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      // Offset navigation scroll to compensate for the sticky navbar height
      const headerOffset = 76;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Setup scroll tracking to highlight active navbar section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'technologies', 'portfolio', 'why-us', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset value for early triggering

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="nextgen-app-root" className="min-h-screen bg-white font-sans text-zinc-800 antialiased selection:bg-[#007AFF]/20 selection:text-zinc-950">
      {/* Sticky Top Header Navigation */}
      <Navbar
        onNavigate={handleNavigate}
        activeSection={activeSection}
        whatsappUrl={whatsappUrl}
      />

      {/* Main Sections Stack */}
      <main id="main-content">
        <Hero
          whatsappUrl={whatsappUrl}
          onExploreServices={() => handleNavigate('services')}
        />
        <Services whatsappUrl={whatsappUrl} />
        <TechStack />
        <Portfolio whatsappUrl={whatsappUrl} />
        <WhyChooseUs />
        <FAQ />
        <Contact whatsappUrl={whatsappUrl} />
      </main>

      {/* Structural Minimal Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* High-conversion Floating WhatsApp Trigger */}
      <WhatsAppButton whatsappUrl={whatsappUrl} />
    </div>
  );
}
