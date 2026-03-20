import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Palette, Droplets } from 'lucide-react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const Icon = category.slug === 'electrical' ? Zap : category.slug === 'paint' ? Palette : Droplets;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative group rounded-3xl overflow-hidden h-[400px] shadow-2xl"
    >
      <img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="bg-accent w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
          <Icon className="text-white w-6 h-6" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-2">{category.name}</h3>
        <p className="text-gray-200 mb-6 line-clamp-2">{category.description}</p>
        <Link
          to={`/category/${category.slug}`}
          className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-accent hover:text-white transition-all duration-300 w-fit"
        >
          View Products <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
