import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <footer className="border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-zinc-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} LexPro Chambers. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-zinc-900">Services</a>
            <a href="#teaching" className="hover:text-zinc-900">Teaching</a>
            <a href="#contact" className="hover:text-zinc-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
