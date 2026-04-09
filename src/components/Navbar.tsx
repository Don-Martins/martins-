import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-white">
          Don<span className="text-gray-500">Martins</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            data-cal-link="donmartinz/website-discussion"
            data-cal-namespace="website-discussion"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors cursor-pointer"
          >
            Book a Call
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 glass-panel border-t-0 py-4 px-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            data-cal-link="donmartinz/website-discussion"
            data-cal-namespace="website-discussion"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="px-5 py-3 rounded-xl bg-white text-black font-semibold text-center mt-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a Call
          </button>
        </motion.div>
      )}
    </header>
  );
}
