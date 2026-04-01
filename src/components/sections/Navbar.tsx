'use client';

import { useState, useEffect } from 'react';
import { Skull, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#builds', label: 'Builds' },
    { href: '#necrobinder', label: 'Necrobinder' },
    { href: '#tips', label: 'Tips' },
    { href: '#subscribe', label: 'Free PDF' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#121212]/95 backdrop-blur-md border-b border-[#333]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
              <Skull className="w-4 h-4 text-green-400" />
            </div>
            <span className="text-lg font-bold text-white hidden sm:block">STS2 Guide</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#a3a3a3] hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#subscribe"
              className="px-4 py-2 bg-green-500 hover:bg-green-400 text-[#121212] font-semibold rounded-lg text-sm transition-colors"
            >
              Subscribe
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#a3a3a3] hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#333]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#a3a3a3] hover:text-white transition-colors text-sm font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#subscribe"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 bg-green-500 hover:bg-green-400 text-[#121212] font-semibold rounded-lg text-sm transition-colors text-center"
              >
                Subscribe
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
