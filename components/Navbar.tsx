import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
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
    { name: 'Why Us', href: '#' },
    { name: 'Performance', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Learn', href: '#' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-veridian-800/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-lime-glow p-2 rounded-xl text-veridian-900 transition-transform group-hover:rotate-12">
            <TrendingUp size={24} strokeWidth={3} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Verdant<span className="text-lime-glow">.io</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-200 hover:text-lime-glow transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-glow transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:flex text-sm font-semibold text-white hover:text-lime-glow transition-colors">
            Login
          </a>
          <button className="hidden md:block px-6 py-2.5 bg-lime-glow text-veridian-900 font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(159,232,112,0.3)]">
            Get Started Free
          </button>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-veridian-800/95 backdrop-blur-xl border-t border-veridian-600 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-medium text-gray-100 hover:text-lime-glow">
              {link.name}
            </a>
          ))}
          <div className="h-px bg-veridian-600 my-2" />
          <a href="#" className="text-lg font-medium text-white">Login</a>
          <button className="w-full py-3 bg-lime-glow text-veridian-900 font-bold rounded-lg">
            Get Started Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;