import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageCircle, Phone, ArrowRight, Star, ShieldCheck, Truck, Clock } from 'lucide-react';
import { STORE_NAME, CATEGORIES, WHATSAPP_NUMBER, PHONE_NUMBERS } from '../constants';
import CategoryCard from '../components/CategoryCard';

export default function Home() {
  const whatsappMessage = encodeURIComponent(`Hello, I am interested in your products from ${STORE_NAME}. Please provide more details.`);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const features = [
    { icon: ShieldCheck, title: 'Quality Products', desc: 'We only sell certified and durable hardware items.' },
    { icon: Truck, title: 'Fast Delivery', desc: 'Quick and reliable delivery to your doorstep.' },
    { icon: Clock, title: '24/7 Support', desc: 'Our team is always ready to assist you with inquiries.' },
  ];

  const reviews = [
    { name: 'Ahmed Khan', text: 'Best shop for electrical items. Very reasonable prices and high quality.', stars: 5 },
    { name: 'Sara Malik', text: 'Found all the paint materials I needed for my new house. Highly recommended!', stars: 5 },
    { name: 'Zubair Ali', text: 'Excellent sanitary products and very professional service.', stars: 4 },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
  src="/images/Hardware Store Background.png"
  alt="Hardware Store Background"
  className="w-full h-full object-cover"
  referrerPolicy="no-referrer"
/>
          <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              {STORE_NAME}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
              Your trusted shop for premium electrical, paint, and sanitary products. Quality you can count on, prices you'll love.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/category/electrical" className="btn-accent text-lg px-8 py-4">
                View Products <ArrowRight className="w-5 h-5" />
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all">
                <MessageCircle className="w-6 h-6" /> WhatsApp Order
              </a>
              <a href={`tel:${PHONE_NUMBERS[0].replace(/\s/g, '')}`} className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-bg-light"
              >
                <div className="bg-primary p-3 rounded-xl">
                  <f.icon className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary">{f.title}</h3>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-primary mb-4"
            >
              Browse Our Categories
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of professional hardware products across three main departments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-bg-light relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(r.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{r.text}"</p>
                <h4 className="font-bold text-primary">— {r.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl mb-10 opacity-90">Contact us today for the best prices and expert advice.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="bg-white text-accent px-8 py-4 rounded-xl font-bold hover:bg-primary hover:text-white transition-all">
              Contact Us Now
            </Link>
            <a href={whatsappUrl} className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all">
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
