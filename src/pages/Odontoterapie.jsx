import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useScrollAnimation, fadeInUp } from '../hooks/useScrollAnimation';
import { useAppointment } from '../context/AppointmentContext';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { useNavigate } from 'react-router-dom';

const Odontoterapie = () => {
  const { ref, isInView } = useScrollAnimation();
  const { openModal } = useAppointment();
  const navigate = useNavigate();
  
  // Ensure page scrolls to top
  useScrollToTop();

  const treatments = [
    {
      title: 'Tratamente Moderne cu Laser',
      description: 'Utilizăm tehnologia laser de ultimă generație pentru tratarea cariilor dentare, oferind precizie maximă și disconfort minim. Laserul permite îndepărtarea selectivă a țesutului cariat, păstrând cât mai mult țesut dentar sănătos.',
      details: 'Această tehnologie avansată reduce semnificativ durata tratamentului și accelerează procesul de vindecare, oferind pacienților o experiență mult mai confortabilă.',
      features: ['Tratamente Laser Avansate', 'Obturații de Înaltă Calitate', 'Tehnici Neinvazive ICON', 'Precizie Maximă']
    },
    {
      title: 'Obturații Realizate la Microscop',
      description: 'Pentru precizie maximă, realizăm obturații sub microscop dentar, permițând o vizualizare detaliată a structurilor dentare și o adaptare perfectă a materialelor de restaurare.',
      details: 'Microscopul dentar permite identificarea și tratarea precisă a cariilor în stadiu incipient, prevenind progresia și păstrând structura naturală a dintelui.',
      features: ['Microscop dentar', 'Vizualizare detaliată', 'Adaptare perfectă', 'Prevenire progresie']
    },
    {
      title: 'Tehnici Neinvazive ICON',
      description: 'Pentru cariile în stadiu incipient, utilizăm tehnica revoluționară ICON (Infiltration Concept), care permite tratarea cariilor fără găurire. Această metodă infiltrează caria cu o rășină specială, oprindu-i progresia și păstrând structura naturală a dintelui.',
      details: 'Tehnica ICON este perfectă pentru cariile în stadiu incipient, oferind o alternativă neinvazivă la tratamentele tradiționale și păstrând dintele natural.',
      features: ['Tehnică neinvazivă', 'Fără găurire', 'Păstrarea dinte natural', 'Tratare incipientă']
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
              Odontoterapie
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Tratamente conservatoare pentru păstrarea dinților naturali cu tehnici moderne și materiale de calitate.
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
                      <span className="text-6xl">🦷🔬</span>
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
              Gata să-ți Tratezi Cariile?
            </h2>
            <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
              Programează o consultație gratuită pentru a descoperi cum odontoterapia modernă 
              îți poate oferi tratamentul precis și confortabil pe care îl dorești.
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

export default Odontoterapie; 