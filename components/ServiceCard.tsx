import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
  delay: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, items, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full"
    >
      <div className="bg-black text-white p-4 rounded-full mb-6">
        {icon}
      </div>
      <h3 className="font-sans font-bold text-lg uppercase tracking-wider mb-6 border-b-2 border-transparent pb-2">
        {title}
      </h3>
      <ul className="text-sm text-gray-700 space-y-3 leading-relaxed w-full text-left">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 mt-1.5 w-1 h-1 bg-black rounded-full shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};