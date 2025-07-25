import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useScrollAnimation, slideInLeft, slideInRight, fadeInUp } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, isInView } = useScrollAnimation();

  const features = [
    'Tehnologie și echipamente dentare avansate',
    'Profesioniști dentari cu experiență și certificați',
    'Mediu confortabil și relaxant',
    'Planuri de tratament complete',
    'Îngrijire dentară de urgență disponibilă',
    'Servicii dentare prietenoase cu familia'
  ];

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden">
                <img 
                  src="/images/clinic.jpg" 
                  alt="Modern Dental Clinic"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-medium"
              >
                <span className="text-white font-bold text-xl">✓</span>
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-medium"
              >
                <span className="text-white font-bold">❤</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium"
            >
              <span>+ DESPRE NOI</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-4xl lg:text-5xl font-bold text-text-dark"
            >
              Suntem Dedicați
              <span className="block text-primary">Sănătății Tale Dentare</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-text-light leading-relaxed"
            >
              La Dentaire, credem că toată lumea merită acces la îngrijire dentară de înaltă calitate. 
              Echipa noastră de profesioniști cu experiență este dedicată oferirii de servicii dentare 
              complete într-un mediu confortabil și primitor.
            </motion.p>

            {/* Features List */}
            <motion.div
              variants={fadeInUp}
              className="grid sm:grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-text-dark font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 