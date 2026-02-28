import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ 
  children, 
  delay = 0,
  direction = 'up',
  distance = 50,
  duration = 0.8,
  className = ''
}) => {
  const getInitialY = () => {
    if (direction === 'up') return distance;
    if (direction === 'down') return -distance;
    return 0;
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: getInitialY()
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0
      }}
      transition={{ 
        duration: duration, 
        ease: 'easeOut',
        delay: delay
      }}
      viewport={{ 
        once: true, 
        amount: 0.2 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
