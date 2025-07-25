import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CheckIcon } from '@heroicons/react/24/outline';
import { useScrollAnimation, fadeInUp } from '../hooks/useScrollAnimation';
import { useAppointment } from '../context/AppointmentContext';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Protetica = () => {
  const { ref, isInView } = useScrollAnimation();
  const { openModal } = useAppointment();
  
  // Ensure page scrolls to top
  useScrollToTop();

  const treatments = [
    {
      title: 'Coroane și Punți din Zirconiu',
      description: 'Oferim restaurări protetice de înaltă calitate folosind cele mai avansate materiale disponibile pe piață. Zirconiul reprezintă standardul de aur în protetica modernă, oferind rezistență excepțională și estetică naturală.',
      details: 'Coroanele și punțile noastre din zirconiu sunt realizate cu precizie maximă în laboratoare specializate, asigurând o potrivire perfectă și un confort optim pentru pacienți.',
      features: ['Materiale Premium', 'Precizie Maximă', 'Durabilitate pe Termen Lung', 'Estetică Naturală']
    },
    {
      title: 'Ceramică EMAX',
      description: 'Pentru zonele vizibile, utilizăm ceramica EMAX, un material care oferă transluciditate și culoare identice cu dinții naturali. Această tehnologie avansată permite realizarea de restaurări estetice de excepție.',
      details: 'Ceramica EMAX este ideală pentru fațete și coroane din zonele anterioare, oferind o estetică naturală și o durabilitate excepțională.',
      features: ['Transluciditate naturală', 'Culoare identică cu dinții', 'Estetică de excepție', 'Durabilitate înaltă']
    },
    {
      title: 'Lucrări Complexe pe Implanturi',
      description: 'Realizăm lucrări protetice complexe pe implanturi dentare, de la coroane individuale la punți extensive și proteze totale fixe. Utilizăm sisteme de implantologie premium pentru rezultate predictibile și durabile pe termen lung.',
      details: 'Lucrările pe implanturi sunt planificate cu atenție și executate cu precizie, garantând funcționalitatea completă și estetica naturală.',
      features: ['Coroane individuale', 'Punți extensive', 'Proteze totale fixe', 'Sisteme premium']
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
              Protetică Dentară
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Restaurări protetice de înaltă calitate pentru funcționalitate și estetică optimă.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Treatments */}
          <motion.div
            ref={ref}
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-16 mb-16"
          >
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6">
                  <h2 className="font-heading text-3xl font-bold text-text-dark">
                    {treatment.title}
                  </h2>
                  <p className="text-lg text-text-light leading-relaxed">
                    {treatment.description}
                  </p>
                  <p className="text-text-light leading-relaxed">
                    {treatment.details}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {treatment.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-text-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-6xl">🦷✨</span>
                    </div>
                  </div>
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
              Gata să-ți Restaurezi Zâmbetul?
            </h2>
            <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
              Programează o consultație gratuită pentru a descoperi cum protetica modernă 
              îți poate oferi funcționalitatea și estetica perfectă.
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

export default Protetica; 