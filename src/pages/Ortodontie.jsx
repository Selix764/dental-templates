import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CheckIcon } from '@heroicons/react/24/outline';
import { useScrollAnimation, fadeInUp } from '../hooks/useScrollAnimation';
import { useAppointment } from '../context/AppointmentContext';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Ortodontie = () => {
  const { ref, isInView } = useScrollAnimation();
  const { openModal } = useAppointment();
  
  // Ensure page scrolls to top
  useScrollToTop();

  const treatments = [
    {
      title: 'Aparate Metalice, Ceramice și Safir',
      description: 'Oferim o gamă completă de aparate ortodontice fixe pentru corectarea alinierii dinților. Aparatele metalice sunt cele mai eficiente și durabile, în timp ce aparatele ceramice și din safir oferă o alternativă estetică discretă.',
      details: 'Toate aparatele noastre sunt realizate cu materiale de înaltă calitate și tehnologii avansate pentru confort maxim și rezultate predictibile.',
      features: ['Aparate Metalice și Ceramice', 'Sisteme Invizibile SPARK', 'Soluții pentru Toate Vârstele', 'Rezultate Estetice Remarcabile']
    },
    {
      title: 'Sisteme Invizibile SPARK',
      description: 'Tehnologia SPARK reprezintă viitorul ortodonției moderne. Aceste aparate transparente, removibile, corectează alinierea dinților într-un mod complet discret, fiind aproape invizibile când sunt purtate.',
      details: 'Sistemele SPARK oferă confort maxim și o estetică superioară, fiind perfecte pentru pacienții care doresc o soluție discretă pentru corectarea alinierii dinților.',
      features: ['Aparate transparente', 'Removibile și discrete', 'Confort maxim', 'Estetică superioară']
    },
    {
      title: 'Soluții Personalizate pentru Toate Vârstele',
      description: 'Fiecare pacient primește un plan de tratament personalizat, adaptat nevoilor specifice și stilului de viață. Oferim soluții ortodontice atât pentru copii, cât și pentru adulți, cu rezultate estetice remarcabile și funcționalitate optimă.',
      details: 'Planificarea tratamentului se face cu ajutorul tehnologiilor 3D, permițând o vizualizare precisă a rezultatelor finale înainte de începerea tratamentului.',
      features: ['Planuri personalizate', 'Tehnologii 3D', 'Pentru toate vârstele', 'Rezultate predictibile']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container-custom">
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
              Ortodonție
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Corectăm alinierea dinților cu soluții moderne și discrete pentru toate vârstele.
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
                      <span className="text-6xl">🦷🎯</span>
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
              Gata să-ți Aliniezi Zâmbetul?
            </h2>
            <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
              Programează o consultație gratuită pentru a descoperi cum ortodonția modernă 
              îți poate oferi alinierea perfectă și zâmbetul pe care îl dorești.
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

export default Ortodontie; 