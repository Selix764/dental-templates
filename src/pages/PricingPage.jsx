import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useScrollAnimation, fadeInUp } from '../hooks/useScrollAnimation';
import { useAppointment } from '../context/AppointmentContext';
import { useNavigate } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

const PricingPage = () => {
  const { ref, isInView } = useScrollAnimation();
  const { openModal } = useAppointment();
  const navigate = useNavigate();
  
  // Ensure page scrolls to top
  useScrollToTop();

  const pricingCategories = [
    {
      title: 'Tratamente Estetice',
      servicePage: '/estetica-dentara',
      services: [
        { name: 'Albire Profesională', price: '300 RON' },
        { name: 'Fațete Dentare (per dinte)', price: '800 RON' },
        { name: 'Bijuterii Dentare Swarovski', price: '150 RON' },
        { name: 'Smile Makeover (complet)', price: '2500 RON' }
      ]
    },
    {
      title: 'Protetică Dentară',
      servicePage: '/protetica',
      services: [
        { name: 'Coroană din Zirconiu', price: '1200 RON' },
        { name: 'Punte din Zirconiu (3 dinți)', price: '2800 RON' },
        { name: 'Coroană din Ceramică EMAX', price: '1000 RON' },
        { name: 'Lucrare pe Implant', price: '1500 RON' }
      ]
    },
    {
      title: 'Implantologie și Chirurgie',
      servicePage: '/implantologie-chirurgie',
      services: [
        { name: 'Implant Dentar (Bredent)', price: '2500 RON' },
        { name: 'Implant Dentar (Straumann)', price: '3000 RON' },
        { name: 'Extracție Complexă', price: '400 RON' },
        { name: 'Chirurgie Asistată Computer', price: '3500 RON' }
      ]
    },
    {
      title: 'Ortodonție',
      servicePage: '/ortodontie',
      services: [
        { name: 'Aparat Metalic (arcada)', price: '2000 RON' },
        { name: 'Aparat Ceramic (arcada)', price: '2500 RON' },
        { name: 'Aparat Safir (arcada)', price: '3000 RON' },
        { name: 'Sistem SPARK (complet)', price: '4500 RON' }
      ]
    },
    {
      title: 'Profilaxie și Igienă',
      servicePage: '/profilaxie',
      services: [
        { name: 'Igienizare Profesională', price: '200 RON' },
        { name: 'Detartraj cu Ultrasunete', price: '150 RON' },
        { name: 'Air-Flow', price: '180 RON' },
        { name: 'Fluorizare Profesională', price: '100 RON' }
      ]
    },
    {
      title: 'Odontoterapie',
      servicePage: '/odontoterapie',
      services: [
        { name: 'Obturație Standard', price: '250 RON' },
        { name: 'Obturație la Microscop', price: '350 RON' },
        { name: 'Tratament Laser', price: '400 RON' },
        { name: 'Tehnică ICON', price: '300 RON' }
      ]
    },
    {
      title: 'Endodonție',
      servicePage: '/endodontie-microscop',
      services: [
        { name: 'Tratament de Canal (dinte frontal)', price: '500 RON' },
        { name: 'Tratament de Canal (dinte molar)', price: '700 RON' },
        { name: 'Retratament Endodontic', price: '800 RON' },
        { name: 'Endodonție la Microscop', price: '900 RON' }
      ]
    },
    {
      title: 'Urgențe Dentare',
      servicePage: '/',
      services: [
        { name: 'Consult Urgență', price: '150 RON' },
        { name: 'Extracție Urgență', price: '300 RON' },
        { name: 'Tratament Durere', price: '200 RON' },
        { name: 'Reparație Proteză', price: '250 RON' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container-custom px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.button
              onClick={() => window.history.back()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span>Înapoi la servicii</span>
            </motion.button>
            
            <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">
              Prețuri
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Prețuri transparente și competitive pentru toate serviciile noastre dentare.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom px-6 py-16">
        {/* Pricing Grid */}
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16"
        >
          {pricingCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100"
            >
              <h3 className="font-heading text-xl font-semibold text-text-dark mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4 mb-6">
                {category.services.map((service, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-text-light text-sm">{service.name}</span>
                    <span className="font-semibold text-primary">{service.price}</span>
                  </div>
                ))}
              </div>
              
              {/* Service Page Button */}
              {category.servicePage !== '/' && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(category.servicePage)}
                  className="w-full bg-primary text-white py-3 px-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                >
                  Vezi Detalii Serviciu
                </motion.button>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center bg-primary/10 rounded-2xl p-12 mb-16"
        >
          <h2 className="font-heading text-3xl font-bold text-text-dark mb-6">
            Aveți Întrebări despre Prețuri?
          </h2>
          <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
            Contactați-ne pentru o consultație gratuită și pentru a afla mai multe despre 
            planurile de plată și opțiunile de finanțare disponibile.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
            className="btn-primary"
          >
            Programează Consultație Gratuită
          </motion.button>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💳</span>
            </div>
            <h3 className="font-heading text-lg font-semibold text-text-dark mb-2">
              Planuri de Plată Flexibile
            </h3>
            <p className="text-text-light">
              Oferim opțiuni de plată în rate fără dobândă pentru tratamentele complexe.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏥</span>
            </div>
            <h3 className="font-heading text-lg font-semibold text-text-dark mb-2">
              Asigurări Acceptate
            </h3>
            <p className="text-text-light">
              Lucrăm cu majoritatea asigurătorilor pentru a vă facilita accesul la îngrijire.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-heading text-lg font-semibold text-text-dark mb-2">
              Prețuri Transparente
            </h3>
            <p className="text-text-light">
              Nu există costuri ascunse. Toate prețurile sunt clare și transparente.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage; 