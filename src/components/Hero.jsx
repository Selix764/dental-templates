import React from 'react';
import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { slideInLeft, slideInRight, fadeInUp } from '../hooks/useScrollAnimation';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium"
            >
              <StarIcon className="w-4 h-4 text-yellow-300" />
              <span>+ WELCOME TO DENTAIRE</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-5xl lg:text-6xl font-bold leading-tight"
            >
              Professional
              <span className="block text-secondary">Dental Care</span>
              For Your Family
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/90 max-w-lg"
            >
              Experience world-class dental care in a comfortable and relaxing environment. 
              Our team of experts is dedicated to your oral health and beautiful smile.
            </motion.p>

            {/* Rating */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center space-x-4"
            >
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                ))}
              </div>
              <span className="text-white/80">4.9 (2,500+ Reviews)</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Book Appointment
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline text-white border-white hover:bg-white hover:text-primary"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                  <div className="text-center text-white/80">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🦷</span>
                    </div>
                    <p className="text-lg font-medium">Dental Care Image</p>
                    <p className="text-sm opacity-75">Professional dental services</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
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
                className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-large"
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
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-large"
              >
                <span className="text-white font-bold">❤</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 