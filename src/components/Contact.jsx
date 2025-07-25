import React, { useState } from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon,
  StarIcon,
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref, isInView } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Numărul de Telefon',
      value: '+40 (555) 123-4567',
      description: 'Sune-ne oricând'
    },
    {
      icon: EnvelopeIcon,
      title: 'Adresa de Email',
      value: 'info@dentaire.ro',
      description: 'Trimite-ne un email'
    },
    {
      icon: MapPinIcon,
      title: 'Adresa Biroului',
      value: 'Strada Dentală 123, București, România',
      description: 'Vizitează-ne clinica'
    },
    {
      icon: ClockIcon,
      title: 'Program de Lucru',
      value: 'Lun-Vin: 08:00-18:00, Sâm: 09:00-15:00',
      description: 'Îngrijire de urgență 24/7'
    }
  ];

  const stats = [
    { number: '15+', label: 'Ani de Experiență', icon: StarIcon },
    { number: '5000+', label: 'Pacienți Mulțumiți', icon: HeartIcon },
    { number: '100%', label: 'Rată de Satisfacție', icon: ShieldCheckIcon },
    { number: '24/7', label: 'Îngrijire de Urgență', icon: UserGroupIcon }
  ];

  const services = [
    { value: 'general', label: 'Stomatologie Generală' },
    { value: 'cosmetic', label: 'Stomatologie Cosmetica' },
    { value: 'emergency', label: 'Îngrijire de Urgență' },
    { value: 'family', label: 'Stomatologie de Familie' },
    { value: 'orthodontics', label: 'Ortodonție' },
    { value: 'prosthetics', label: 'Protetică' },
    { value: 'implantology', label: 'Implantologie' },
    { value: 'endodontics', label: 'Endodonție' }
  ];

  return (
    <section id="contact" className="section-padding bg-light-gray">
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
            <span>+ CONTACTEAZĂ-NE</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl lg:text-5xl font-bold text-text-dark mb-6"
          >
            Ia Legătura
            <span className="block text-primary">Cu Echipa Noastră</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-text-light max-w-2xl mx-auto"
          >
            Gata să începi călătoria spre un zâmbet mai sănătos? Contactează-ne astăzi 
            pentru a-ți programa programarea sau pentru a pune orice întrebări.
          </motion.p>
        </motion.div>

        {/* Part 1: Contact Information */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-bold text-text-dark mb-4">
              Informații de Contact
            </h3>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Suntem aici să răspundem la întrebările tale și să te ajutăm să-ți programezi vizita.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-soft text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading text-lg font-semibold text-text-dark mb-2">
                  {info.title}
                </h4>
                <p className="text-primary font-medium mb-2">
                  {info.value}
                </p>
                <p className="text-text-light text-sm">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part 2: Contact Form and Location */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white rounded-2xl p-8 shadow-soft"
          >
            <h3 className="font-heading text-2xl font-semibold text-text-dark mb-6">
              Trimite-ne un Mesaj
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">
                    Numele Complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border-gray rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Introduceți numele complet"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
                    Adresa de Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border-gray rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Introduceți adresa de email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-2">
                    Numărul de Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border-gray rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Introduceți numărul de telefon"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-text-dark mb-2">
                    Serviciul de Interes
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border-gray rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  >
                    <option value="">Selectați un serviciu</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
                  Mesajul *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-border-gray rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  placeholder="Spuneți-ne despre nevoile dumneavoastră de îngrijire dentară"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-primary"
              >
                Trimite Mesajul
              </motion.button>
            </form>
          </motion.div>

          {/* Location Information */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Location Details */}
            <div className="bg-white rounded-xl p-6 shadow-soft">
              <h4 className="font-heading text-xl font-semibold text-text-dark mb-4">
                Locația Noastră
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-text-dark">Adresa Clinicii</p>
                    <p className="text-text-light">Strada Dentală 123, București, România</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ClockIcon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-text-dark">Program de Lucru</p>
                    <p className="text-text-light">Luni-Vineri: 08:00-18:00</p>
                    <p className="text-text-light">Sâmbătă: 09:00-15:00</p>
                    <p className="text-text-light">Duminică: Închis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <PhoneIcon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-text-dark">Urgențe</p>
                    <p className="text-text-light">24/7 - +40 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Integration */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 shadow-soft"
            >
              <h4 className="font-heading text-xl font-semibold text-text-dark mb-4">
                Găsește-ne pe Hartă
              </h4>
              <div className="w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow-soft">
                <iframe
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=ro&amp;q=Strada%20Dentala%20123%20Bucuresti%20Romania&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locația Clinicii Dentaire"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-text-light text-sm">
                  <MapPinIcon className="w-4 h-4 inline mr-1 text-primary" />
                  Strada Dentală 123, București, România
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4"
              >
                <stat.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <div className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-text-light font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 