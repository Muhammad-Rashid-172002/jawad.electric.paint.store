import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle, Zap, Palette, Droplets } from 'lucide-react';
import { STORE_NAME, PHONE_NUMBERS, EMAIL, CATEGORIES, WHATSAPP_NUMBER } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-lg">
                <Zap className="text-primary w-6 h-6" />
              </div>
              <span className="font-bold text-xl">{STORE_NAME}</span>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for high-quality electrical, paint, and sanitary products. Providing excellence since years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-300">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Store Location</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-6">Product Categories</h3>
            <ul className="space-y-4 text-gray-300">
              {CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <Link to={`/category/${cat.slug}`} className="hover:text-accent transition-colors flex items-center gap-2">
                    {cat.slug === 'electrical' && <Zap className="w-4 h-4" />}
                    {cat.slug === 'paint' && <Palette className="w-4 h-4" />}
                    {cat.slug === 'sanitary' && <Droplets className="w-4 h-4" />}
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>Falak Plaza, Main GT Road, Bazar, Pabbi, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <div className="flex flex-col">
                  {PHONE_NUMBERS.map(num => (
                    <a key={num} href={`tel:${num.replace(/\s/g, '')}`} className="hover:text-accent transition-colors">{num}</a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-accent transition-colors break-all">{EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© {currentYear} {STORE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
