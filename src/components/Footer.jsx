import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer, fadeInUp } from '../hooks/useScrollAnimation';

const Footer = () => {
  const { ref, isInView } = useScrollAnimation();
  const navigate = useNavigate();

  const footerLinks = {
    services: [
      'Stomatologie Generală',
      'Stomatologie Cosmetica',
      'Îngrijire de Urgență',
      'Stomatologie de Familie',
      'Albire Dentară',
      'Implanturi Dentare'
    ],
    company: [
      'Despre Noi',
      'Echipa Noastră',
      'Testimoniale',
      'Prețuri',
      'Cariere',
      'Contact'
    ],
    support: [
      'Centru de Ajutor',
      'Programarea Consultațiilor',
      'Informații Asigurări',
      'Planuri de Plată',
      'Îngrijire de Urgență',
      'Formulare Pacienți'
    ]
  };

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: '📘' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '📷' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' }
  ];

  const handleNavigation = (item) => {
    if (item === 'Prețuri') {
      navigate('/preturi');
    } else if (item === 'Despre Noi') {
      navigate('/#about');
    } else if (item === 'Echipa Noastră') {
      navigate('/#team');
    } else if (item === 'Testimoniale') {
      navigate('/#testimonials');
    } else if (item === 'Contact') {
      navigate('/#contact');
    }
  };

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
              Oferim îngrijire dentară excepțională cu focus pe confortul pacientului, 
              tehnologie avansată și planuri de tratament personalizate.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-primary" />
                <span className="text-white/80">+40 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-primary" />
                <span className="text-white/80">info@dentaire.ro</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="w-5 h-5 text-primary" />
                <span className="text-white/80">Strada Dentală 123, București, România</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="font-heading text-xl font-semibold">Serviciile Noastre</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <button 
                    className="text-white/80 hover:text-primary transition-colors duration-300 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="font-heading text-xl font-semibold">Compania</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleNavigation(item)}
                    className="text-white/80 hover:text-primary transition-colors duration-300 text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="font-heading text-xl font-semibold">Suport</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((item, index) => (
                <li key={index}>
                  <button 
                    className="text-white/80 hover:text-primary transition-colors duration-300 text-left"
                  >
                    {item}
                  </button>
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
              © 2024 Dentaire. Toate drepturile rezervate.
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
              <button 
                onClick={() => navigate('/politica-confidentialitate')}
                className="text-white/60 hover:text-primary transition-colors"
              >
                Politica de Confidențialitate
              </button>
              <button 
                onClick={() => navigate('/termeni-conditii')}
                className="text-white/60 hover:text-primary transition-colors"
              >
                Termeni și Condiții
              </button>
              <button 
                onClick={() => navigate('/politica-cookies')}
                className="text-white/60 hover:text-primary transition-colors"
              >
                Politica de Cookie-uri
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 