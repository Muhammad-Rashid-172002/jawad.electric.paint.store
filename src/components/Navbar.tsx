import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Phone, ShoppingCart, Zap, Palette, Droplets } from 'lucide-react';
import { STORE_NAME, CATEGORIES } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Electrical', path: '/category/electrical' },
    { name: 'Paint', path: '/category/paint' },
    { name: 'Sanitary', path: '/category/sanitary' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`glass-nav transition-all duration-300 ${isScrolled ? 'py-2 shadow-lg' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg group-hover:bg-accent transition-colors">
              <Zap className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl text-primary hidden sm:block">
              Jawad <span className="text-accent">Store</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path ? 'text-accent' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-accent w-48 transition-all group-hover:w-64"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            <Link to="/contact" className="bg-primary text-white p-2 rounded-full hover:bg-accent transition-colors">
              <Phone className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button className="p-2 text-gray-600">
              <Search className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-medium border-b border-gray-50 ${
                  location.pathname === link.path ? 'text-accent' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex justify-around">
              <Link to="/contact" className="flex items-center gap-2 text-primary font-semibold">
                <Phone className="w-5 h-5" /> Call Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
