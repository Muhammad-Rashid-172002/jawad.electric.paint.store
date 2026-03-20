import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { STORE_NAME, PHONE_NUMBERS, EMAIL, MAP_URL, WHATSAPP_NUMBER } from '../constants';

export default function Contact() {
  const whatsappMessage = encodeURIComponent(`Hello, I am interested in your products from ${STORE_NAME}. Please provide more details.`);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
  
  const emailSubject = "Product Inquiry - Jawad Electric Store";
  const emailBody = "Hello,\nI would like to get information about your electrical, paint, or sanitary products.";
  const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center text-center"
          >
            <div className="bg-accent/10 p-4 rounded-2xl mb-6">
              <Phone className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Call Us</h3>
            <div className="space-y-2">
              {PHONE_NUMBERS.map(num => (
                <a key={num} href={`tel:${num.replace(/\s/g, '')}`} className="block text-gray-600 hover:text-accent transition-colors text-lg font-medium">
                  {num}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center text-center"
          >
            <div className="bg-[#25D366]/10 p-4 rounded-2xl mb-6">
              <MessageCircle className="w-8 h-8 text-[#25D366]" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">WhatsApp</h3>
            <p className="text-gray-600 mb-6">Chat with us directly for quick responses and orders.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#128C7E] transition-colors flex items-center gap-2">
              <MessageCircle className="w-5 h-5" /> Chat Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center text-center"
          >
            <div className="bg-primary/10 p-4 rounded-2xl mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Email Us</h3>
            <a href={mailtoUrl} className="text-gray-600 hover:text-accent transition-colors text-lg font-medium break-all mb-6">
              {EMAIL}
            </a>
            <a href={mailtoUrl} className="btn-primary w-full justify-center">
              <Send className="w-5 h-5" /> Send Email
            </a>
          </motion.div>
        </div>

        {/* Map and Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          {/* Info & Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Visit Our Store</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-xl shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">Location</h4>
                    <p className="text-gray-600">Falak Plaza, Main GT Road, Bazar, Pabbi, Pakistan</p>
                    <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline mt-2 inline-block">
                      Open in Google Maps
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-xl shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">Business Hours</h4>
                    <p className="text-gray-600">Saturday - Thursday: 9:00 AM - 9:00 PM</p>
                    <p className="text-gray-600">Friday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed Placeholder */}
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] bg-gray-200 relative">
              <iframe
                title="Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.551512345678!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEzLjQiTiA3NMKwMjEnMzEuMyJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-primary mb-8">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-bg-light rounded-xl focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Phone Number</label>
                  <input type="tel" placeholder="+92 3XX XXXXXXX" className="w-full px-4 py-3 bg-bg-light rounded-xl focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-bg-light rounded-xl focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <textarea rows={5} placeholder="How can we help you?" className="w-full px-4 py-3 bg-bg-light rounded-xl focus:outline-none focus:ring-2 focus:ring-accent resize-none"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full justify-center py-4 text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
