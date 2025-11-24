import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Tracking', href: '/tracking' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact-us' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-primary text-white p-2 rounded-lg group-hover:bg-primary-dark transition-colors">
              <Globe size={24} />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-secondary' : 'text-secondary'}`}>
              Annship
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-secondary-light hover:text-primary font-medium transition-colors py-2">
                Services
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-0 w-56 rounded-xl shadow-xl bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50">
                <div className="py-2">
                  <Link href="/warehousing" className="block px-4 py-3 text-sm text-secondary hover:bg-surface hover:text-primary transition-colors">
                    <div className="font-semibold">Warehousing</div>
                    <div className="text-xs text-slate-500 mt-0.5">Storage & Distribution</div>
                  </Link>
                  <Link href="/api-integration" className="block px-4 py-3 text-sm text-secondary hover:bg-surface hover:text-primary transition-colors">
                    <div className="font-semibold">API Integration</div>
                    <div className="text-xs text-slate-500 mt-0.5">Developer Tools</div>
                  </Link>
                  <Link href="/software-integration" className="block px-4 py-3 text-sm text-secondary hover:bg-surface hover:text-primary transition-colors">
                    <div className="font-semibold">Technology Solutions</div>
                    <div className="text-xs text-slate-500 mt-0.5">Custom Software</div>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/tracking" className="text-secondary-light hover:text-primary font-medium transition-colors">
              Tracking
            </Link>
            <Link href="/resources" className="text-secondary-light hover:text-primary font-medium transition-colors">
              Resources
            </Link>
            <Link href="/contact-us" className="text-secondary-light hover:text-primary font-medium transition-colors">
              Contact
            </Link>

            <Link
              href="/get-started"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-6 space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Services</div>
              <Link href="/warehousing" className="block pl-4 py-2 text-lg font-medium text-secondary hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                Warehousing
              </Link>
              <Link href="/api-integration" className="block pl-4 py-2 text-lg font-medium text-secondary hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                API Integration
              </Link>
              <Link href="/software-integration" className="block pl-4 py-2 text-lg font-medium text-secondary hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                Technology Solutions
              </Link>
            </div>
            <div className="border-t border-slate-100 my-4"></div>
            <Link href="/tracking" className="block text-lg font-medium text-secondary hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
              Tracking
            </Link>
            <Link href="/resources" className="block text-lg font-medium text-secondary hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
              Resources
            </Link>
            <Link href="/contact-us" className="block text-lg font-medium text-secondary hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link
              href="/get-started"
              className="block w-full text-center bg-primary text-white px-5 py-3 rounded-lg font-semibold mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
