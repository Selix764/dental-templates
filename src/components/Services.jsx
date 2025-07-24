import React from 'react';
import { 
  Cog6ToothIcon, 
  HeartIcon, 
  ShieldCheckIcon, 
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer, fadeInUp, scaleIn } from '../hooks/useScrollAnimation';

const Services = () => {
  const { ref, isInView } = useScrollAnimation();

  const services = [
    {
      icon: Cog6ToothIcon,
      title: 'General Dentistry',
      description: 'Comprehensive dental care including cleanings, fillings, and preventive treatments to maintain your oral health.',
      features: ['Dental Cleanings', 'Cavity Fillings', 'Root Canals', 'Tooth Extractions']
    },
    {
      icon: HeartIcon,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with advanced cosmetic procedures designed to enhance your appearance and confidence.',
      features: ['Teeth Whitening', 'Dental Veneers', 'Invisible Braces', 'Smile Makeovers']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Emergency Care',
      description: '24/7 emergency dental services to address urgent dental problems and provide immediate relief.',
      features: ['Emergency Extractions', 'Pain Relief', 'Broken Tooth Repair', 'Dental Trauma']
    },
    {
      icon: UserGroupIcon,
      title: 'Family Dentistry',
      description: 'Gentle and caring dental care for the entire family, from children to seniors.',
      features: ['Pediatric Dentistry', 'Senior Care', 'Family Consultations', 'Preventive Care']
    }
  ];

  return (
    <section id="services" className="section-padding bg-light-gray">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4"
          >
            <span>+ OUR SERVICES</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl lg:text-5xl font-bold text-text-dark mb-6"
          >
            Comprehensive Dental
            <span className="block text-primary">Care Services</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-text-light max-w-2xl mx-auto"
          >
            We offer a wide range of dental services to meet all your oral health needs. 
            From routine checkups to advanced cosmetic procedures, our experienced team is here to help.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={scaleIn}
              className="bg-white rounded-2xl p-8 shadow-soft card-hover relative overflow-hidden"
            >
              {/* Vector Illustration Background */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                {index === 0 && (
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M30 50 L45 65 L70 35" stroke="currentColor" strokeWidth="3" fill="none"/>
                  </svg>
                )}
                {index === 1 && (
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M50 20 Q70 20 70 40 Q70 60 50 60 Q30 60 30 40 Q30 20 50 20" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="40" cy="35" r="2" fill="currentColor"/>
                    <circle cx="60" cy="35" r="2" fill="currentColor"/>
                    <path d="M35 50 Q50 60 65 50" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
                {index === 2 && (
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect x="25" y="30" width="50" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="35" cy="40" r="3" fill="currentColor"/>
                    <circle cx="45" cy="40" r="3" fill="currentColor"/>
                    <circle cx="55" cy="40" r="3" fill="currentColor"/>
                    <circle cx="65" cy="40" r="3" fill="currentColor"/>
                  </svg>
                )}
                {index === 3 && (
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="35" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="35" cy="60" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="65" cy="60" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M35 60 Q50 70 65 60" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 relative z-10"
              >
                <service.icon className="w-8 h-8 text-primary" />
              </motion.div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-text-dark mb-4">
                {service.title}
              </h3>
              <p className="text-text-light mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-text-light">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Read More Button */}
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center text-primary font-semibold text-sm hover:text-primary/80 transition-colors"
              >
                Read More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <p className="text-lg text-text-light mb-6">
            Don't see the service you need? Contact us to learn about our full range of dental services.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 