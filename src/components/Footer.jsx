import React from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer, fadeInUp } from '../hooks/useScrollAnimation';

const Footer = () => {
  const { ref, isInView } = useScrollAnimation();

  const footerLinks = {
    services: [
      'General Dentistry',
      'Cosmetic Dentistry',
      'Emergency Care',
      'Family Dentistry',
      'Teeth Whitening',
      'Dental Implants'
    ],
    company: [
      'About Us',
      'Our Team',
      'Testimonials',
      'Careers',
      'Blog',
      'Contact'
    ],
    support: [
      'Help Center',
      'Appointment Booking',
      'Insurance Information',
      'Payment Plans',
      'Emergency Care',
      'Patient Forms'
    ]
  };

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: '📘' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '📷' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' }
  ];

  return (
    <footer className="bg-text-dark text-white">
      <div className="container-custom">
        {/* Main Footer */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16"
        >
          {/* Company Info */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="font-heading font-bold text-2xl">
                Dentaire
              </span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Providing exceptional dental care with a focus on patient comfort, 
              advanced technology, and personalized treatment plans.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-primary" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-primary" />
                <span className="text-white/80">info@dentaire.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="w-5 h-5 text-primary" />
                <span className="text-white/80">123 Dental Street, City, State 12345</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="font-heading text-xl font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="font-heading text-xl font-semibold">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="font-heading text-xl font-semibold">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="border-t border-white/20 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/60 text-sm">
              © 2024 Dentaire. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>

            {/* Policy Links */}
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-white/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-white/60 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 