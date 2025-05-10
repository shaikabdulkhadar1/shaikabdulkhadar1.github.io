import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-2xl p-6 flex items-start hover:shadow-lg transition-shadow duration-300 transform-gpu perspective-1000"
      whileHover={{ 
        rotateX: 5,
        rotateY: 5,
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="mr-4 mt-1">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
      </div>
      <div>
        <motion.h3 
          className="text-xl font-medium mb-2"
          whileHover={{ scale: 1.05, color: '#FFC107' }}
        >
          {title}
        </motion.h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;