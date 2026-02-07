import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#EBE5DE]/90 backdrop-blur-md py-2 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="cursor-pointer flex items-center gap-2" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="font-bold text-lg tracking-widest uppercase border-b-2 border-black">L. Marketing Group</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide uppercase">
          <button onClick={() => scrollToSection('about')} className="hover:opacity-60 transition-opacity">À propos</button>
          <button onClick={() => scrollToSection('services')} className="hover:opacity-60 transition-opacity">Services</button>
          <button onClick={() => scrollToSection('contact')} className="hover:opacity-60 transition-opacity">Contact</button>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#EBE5DE] border-b border-gray-200 py-4 flex flex-col items-center gap-4 md:hidden shadow-lg">
           <button onClick={() => scrollToSection('about')} className="text-sm font-semibold uppercase">À propos</button>
           <button onClick={() => scrollToSection('services')} className="text-sm font-semibold uppercase">Services</button>
           <button onClick={() => scrollToSection('contact')} className="text-sm font-semibold uppercase">Contact</button>
        </div>
      )}
    </nav>
  );
};