import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable Reveal component for smooth scroll-triggered animations
 * Usage: <Reveal><YourContent /></Reveal>
 */
export const Reveal = ({
  children,
  delay = 0,
  duration = 0.6,
  amount = 0.2,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        ease: 'easeOut',
        delay,
      }}
      viewport={{ once: true, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Stagger container for animating multiple children with delays
 * Usage: <StaggerContainer><Item/><Item/></StaggerContainer>
 */
export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  amount = 0.2,
  className = ''
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Reveal;
