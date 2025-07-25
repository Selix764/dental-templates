import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CheckIcon } from '@heroicons/react/24/outline';
import { useScrollAnimation, fadeInUp } from '../hooks/useScrollAnimation';
import { useAppointment } from '../context/AppointmentContext';
import { useScrollToTop } from '../hooks/useScrollToTop';

const ImplantologieChirurgie = () => {
  const { ref, isInView } = useScrollAnimation();
  const { openModal } = useAppointment();
  
  // Ensure page scrolls to top
  useScrollToTop();

  const treatments = [
    {
      title: 'Sisteme Premium de Implantologie',
      description: 'Utilizăm exclusiv sisteme de implantologie de top precum Bredent din Germania, Straumann din Elveția și Nobel Biocare din Suedia. Aceste sisteme oferă cea mai înaltă calitate și predictibilitate în tratamentele implantologice.',
      details: 'Fiecare implant este realizat din titan pur de grad medical, biocompatibil și cu suprafețe speciale tratate pentru osteointegrare optimă și durabilitate pe termen lung.',
      features: ['Sisteme Premium de Implantologie', 'Proceduri Asistate Computer', 'Recuperare Rapidă', 'Confort Maxim']
    },
    {
      title: 'Proceduri Chirurgicale Asistate',
      description: 'Folosim tehnologia de planificare 3D și ghiduri chirurgicale pentru precizie maximă în plasarea implanturilor. Această abordare minimally invasive reduce timpul de intervenție și accelerează procesul de vindecare.',
      details: 'Planificarea computerizată permite o precizie de până la 0.1mm în plasarea implanturilor, garantând rezultate predictibile și estetice.',
      features: ['Planificare 3D avansată', 'Ghiduri chirurgicale', 'Precizie maximă', 'Intervenții minimale']
    },
    {
      title: 'Recuperare Rapidă și Confort Sporit',
      description: 'Prin tehnicile moderne de chirurgie minimally invasive și protocoalele noastre post-operatorii optimizate, pacienții beneficiază de o recuperare rapidă și confortabilă. Oferim suport complet pe toată durata tratamentului.',
      details: 'Protocoalele noastre post-operatorii includ monitorizare constantă, instrucțiuni detaliate și suport 24/7 pentru orice întrebări sau urgențe.',
      features: ['Tehnici minimale invasive', 'Protocoale optimizate', 'Suport 24/7', 'Monitorizare constantă']
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
              Implantologie și Chirurgie
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Soluții avansate de implantologie cu tehnologii de ultimă generație pentru rezultate predictibile.
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
                      <span className="text-6xl">🦷⚡</span>
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
              Gata să-ți Recuperezi Zâmbetul?
            </h2>
            <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
              Programează o consultație gratuită pentru a descoperi cum implantologia modernă 
              îți poate oferi zâmbetul natural și funcțional pe care îl dorești.
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

export default ImplantologieChirurgie; 