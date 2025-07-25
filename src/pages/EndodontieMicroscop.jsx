import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useScrollAnimation, fadeInUp } from '../hooks/useScrollAnimation';
import { useAppointment } from '../context/AppointmentContext';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { useNavigate } from 'react-router-dom';

const EndodontieMicroscop = () => {
  const { ref, isInView } = useScrollAnimation();
  const { openModal } = useAppointment();
  const navigate = useNavigate();
  
  // Ensure page scrolls to top
  useScrollToTop();

  const treatments = [
    {
      title: 'Tratamente de Înaltă Precizie',
      description: 'Microscopul dentar revoluționează tratamentele endodontice, oferind o vizualizare detaliată a anatomiei canalelor radiculare. Această tehnologie permite identificarea și tratarea precisă a tuturor canalelor, inclusiv a celor foarte fine sau calcificate.',
      details: 'Mărirea de până la 25x și iluminarea LED de înaltă intensitate asigură o precizie fără precedent în realizarea tratamentelor endodontice, crescând semnificativ rata de succes.',
      features: ['Precizie de Înaltă Rezoluție', 'Tratamente și Retratamente', 'Rezultate Predictibile', 'Durabilitate pe Termen Lung']
    },
    {
      title: 'Tratamente și Retratamente Endodontice',
      description: 'Oferim atât tratamente endodontice primare, cât și retratamente pentru cazurile complexe. Microscopul permite abordarea cazurilor considerate anterior imposibil de tratat, salvând dinți care altfel ar fi fost extrași.',
      details: 'Retratamentele endodontice sunt realizate cu aceeași precizie ca tratamentele primare, oferind o a doua șansă pentru dinții cu probleme endodontice.',
      features: ['Tratamente primare', 'Retratamente complexe', 'Salvarea dinților', 'Precizie maximă']
    },
    {
      title: 'Rezultate Predictibile și Durabile',
      description: 'Utilizarea microscopului în endodonție crește rata de succes la peste 95%, oferind rezultate predictibile și durabile pe termen lung. Tratamentele realizate la microscop au o prognoză excelentă, permițând păstrarea dinților naturali pentru mulți ani.',
      details: 'Tehnologia microscopului combinată cu protocoalele noastre avansate asigură rezultate de excepție și o durabilitate pe termen lung a tratamentelor endodontice.',
      features: ['Rata de succes 95%+', 'Rezultate predictibile', 'Durabilitate înaltă', 'Păstrarea dinților naturali']
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
              Endodonție cu Microscop
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Tratamente endodontice de precizie cu microscop pentru salvarea dinților cu probleme complexe.
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
                      <span className="text-6xl">🦷🔍</span>
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
              Gata să-ți Salvezi Dinții?
            </h2>
            <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
              Programează o consultație gratuită pentru a descoperi cum endodonția la microscop 
              îți poate oferi tratamentul precis și salvarea dinților pe care o dorești.
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

export default EndodontieMicroscop; 