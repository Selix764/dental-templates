import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useScrollAnimation, fadeInUp } from '../hooks/useScrollAnimation';
import { useAppointment } from '../context/AppointmentContext';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { useNavigate } from 'react-router-dom';

const EsteticaDentara = () => {
  const { ref, isInView } = useScrollAnimation();
  const { openModal } = useAppointment();
  const navigate = useNavigate();
  
  // Ensure page scrolls to top
  useScrollToTop();

  const treatments = [
    {
      title: 'Albire Profesională',
      description: 'Transformăm zâmbetul dumneavoastră cu cea mai avansată tehnologie de albire dentară. Utilizăm sisteme profesionale care oferă rezultate vizibile imediat, îmbunătățind culoarea dinților cu până la 8 nuanțe într-o singură ședință.',
      features: [
        'Rezultate vizibile imediat',
        'Îmbunătățire cu până la 8 nuanțe',
        'Procedură complet sigură',
        'Supraveghere medicală'
      ]
    },
    {
      title: 'Fațete din Zirconiu și EMAX',
      description: 'Fațetele dentare reprezintă soluția perfectă pentru obținerea unui zâmbet de Hollywood. Utilizăm materiale premium precum zirconiul și ceramica EMAX pentru rezultate estetice excepționale și durabilitate pe termen lung.',
      features: [
        'Materiale premium (Zirconiu, EMAX)',
        'Estetică excepțională',
        'Durabilitate pe termen lung',
        'Zâmbet de Hollywood'
      ]
    },
    {
      title: 'Bijuterii Dentare Swarovski',
      description: 'Pentru un look cu adevărat unic, oferim aplicarea de bijuterii dentare Swarovski. Aceste cristale de înaltă calitate se aplică în mod temporar pe suprafața dintelui, creând un efect strălucitor și elegant care completează perfect zâmbetul dumneavoastră.',
      features: [
        'Cristale Swarovski de înaltă calitate',
        'Aplicare temporară',
        'Efect strălucitor și elegant',
        'Look unic și personalizat'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary text-white py-16 pt-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">
              Estetică Dentară
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Transformăm zâmbetul dumneavoastră cu proceduri estetice avansate pentru un aspect perfect și natural.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
              <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Treatments */}
          <motion.div
            ref={ref}
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12 mb-16"
          >
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-light-gray rounded-2xl p-8"
              >
                <h2 className="font-heading text-2xl font-semibold text-text-dark mb-4">
                  {treatment.title}
                </h2>
                <p className="text-text-light mb-6 leading-relaxed">
                  {treatment.description}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {treatment.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-text-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center bg-primary/10 rounded-2xl p-12"
          >
            <h2 className="font-heading text-3xl font-bold text-text-dark mb-6">
              Gata să-ți Transformi Zâmbetul?
            </h2>
            <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
              Programează o consultație gratuită pentru a descoperi cum tehnologiile noastre avansate 
              îți pot oferi zâmbetul perfect pe care îl dorești.
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
        </div>
      </div>
    </div>
  );
};

export default EsteticaDentara; 