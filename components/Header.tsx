
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Classes', href: '#classes' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Membership', href: '#membership' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 py-3 shadow-lg shadow-red-900/10' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-red-600 flex items-center justify-center skew-x-[-12deg] group-hover:bg-red-500 transition-colors">
            <span className="font-heading font-bold text-white text-xl skew-x-[12deg]">SB</span>
          </div>
          <span className="font-heading text-2xl font-bold tracking-tighter uppercase">
            Strong <span className="text-red-600">Box</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-semibold text-sm uppercase tracking-widest hover:text-red-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#join" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2.5 rounded-sm uppercase tracking-tighter transition-all"
          >
            Join Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 absolute w-full top-full left-0 py-6 border-b border-red-900/30">
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-bold text-lg uppercase tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#join" 
              className="bg-red-600 text-white font-bold px-10 py-3 rounded-sm uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
