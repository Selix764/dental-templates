import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useAppointment } from '../context/AppointmentContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const { openModal } = useAppointment();
  const navigate = useNavigate();
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Force scrolled state on non-home pages
      if (window.location.pathname !== '/') {
        setIsScrolled(true);
      } else {
        setIsScrolled(window.scrollY > 50);
      }
    };

    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [window.location.pathname]);

  // Handle click outside mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsServicesDropdownOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const servicePages = [
    { name: 'Estetică Dentară', href: '/estetica-dentara' },
    { name: 'Protetică', href: '/protetica' },
    { name: 'Implantologie și Chirurgie', href: '/implantologie-chirurgie' },
    { name: 'Ortodonție', href: '/ortodontie' },
    { name: 'Profilaxie', href: '/profilaxie' },
    { name: 'Odontoterapie', href: '/odontoterapie' },
    { name: 'Endodonție la Microscop', href: '/endodontie-microscop' }
  ];

  const navItems = [
    { name: 'Acasă', href: '/' },
    { name: 'Despre', href: '/#about' },
    { name: 'Servicii', href: '/#services', hasDropdown: true },
    { name: 'Prețuri', href: '/preturi' },
    { name: 'Doctori', href: '/#team' },
    { name: 'Testimoniale', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (href) => {
    if (href.startsWith('/#')) {
      // Handle anchor links
      const anchor = href.substring(2);
      if (href === '/#about') {
        // Navigate to home page first, then scroll to about section
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(anchor);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // For other anchor links, check if we're on home page
        if (window.location.pathname === '/') {
          const element = document.getElementById(anchor);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // Navigate to home page first, then scroll
          navigate('/');
          setTimeout(() => {
            const element = document.getElementById(anchor);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }
    } else if (href === '/') {
      // If clicking home button and already on home page, scroll to top
      if (window.location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate(href);
      }
    } else {
      // Handle regular routes
      navigate(href);
    }
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const handleServiceClick = (href) => {
    navigate(href);
    setIsServicesDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        window.location.pathname === '/'
          ? (isScrolled ? 'bg-white shadow-medium' : 'bg-white lg:bg-transparent')
          : 'bg-white shadow-medium'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => {
              if (window.location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                navigate('/');
              }
            }}
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className={`font-heading font-bold text-2xl ${
              window.location.pathname === '/' 
                ? (isScrolled ? 'text-primary' : 'text-primary lg:text-white')
                : 'text-primary'
            }`}>
              Dentaire
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <motion.button
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -2 }}
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      className={`font-medium transition-colors duration-300 flex items-center space-x-1 ${
                        window.location.pathname === '/'
                          ? (isScrolled 
                              ? 'text-text-dark hover:text-primary' 
                              : 'text-white hover:text-secondary')
                          : 'text-text-dark hover:text-primary'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${
                        isServicesDropdownOpen ? 'rotate-180' : ''
                      }`} />
                    </motion.button>
                    
                    {/* Services Dropdown */}
                    {isServicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-soft border border-gray-100 py-2"
                      >
                        {servicePages.map((service, idx) => (
                          <motion.button
                            key={service.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            onClick={() => handleServiceClick(service.href)}
                            className="w-full text-left px-4 py-3 text-text-dark hover:text-primary hover:bg-primary/5 transition-colors"
                          >
                            {service.name}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    onClick={() => handleNavClick(item.href)}
                    className={`font-medium transition-colors duration-300 ${
                      window.location.pathname === '/'
                        ? (isScrolled 
                            ? 'text-text-dark hover:text-primary' 
                            : 'text-white hover:text-secondary')
                        : 'text-text-dark hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block btn-primary"
            onClick={openModal}
          >
            Programează-te
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              window.location.pathname === '/'
                ? (isScrolled ? 'text-text-dark' : 'text-text-dark lg:text-white')
                : 'text-text-dark'
            }`}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-medium rounded-lg mt-2 overflow-hidden"
            ref={mobileMenuRef}
          >
            <div className="py-4 px-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className="flex items-center justify-between w-full text-text-dark hover:text-primary font-medium transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesDropdownOpen ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {isServicesDropdownOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {servicePages.map((service) => (
                            <button
                              key={service.name}
                              onClick={() => handleServiceClick(service.href)}
                              className="block text-text-light hover:text-primary font-medium transition-colors text-left w-full"
                            >
                              {service.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="block text-text-dark hover:text-primary font-medium transition-colors text-left w-full"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              <button 
                className="w-full btn-primary mt-4"
                onClick={openModal}
              >
                Programează-te
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header; 