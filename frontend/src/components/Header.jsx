import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { heroData } from '../data/mock';

const Header = ({ onJoinWaitlist }) => {
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
    { label: 'Features', href: '#features' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Program', href: '#program' },
    { label: 'Mentor', href: '#mentor' },
    { label: 'Affiliates', href: '#affiliates' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1a1a1a]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 group">
            <img
              src={heroData.logo}
              alt="QTM"
              className="w-12 h-12 object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(112,219,62,0.5)]"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-[#70DB3E] transition-all duration-300 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#70DB3E] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={onJoinWaitlist}
              className="bg-[#70DB3E] text-black hover:bg-[#5BC236] font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(112,219,62,0.4)] hover:-translate-y-0.5"
            >
              Join Waiting List
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:text-[#70DB3E] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#1a1a1a] bg-[#0a0a0a]/95 backdrop-blur-md">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-[#70DB3E] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  onJoinWaitlist();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-[#70DB3E] text-black hover:bg-[#5BC236] font-semibold mt-2 rounded-xl"
              >
                Join Waiting List
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
