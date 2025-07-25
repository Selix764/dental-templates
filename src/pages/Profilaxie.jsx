import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CheckIcon } from '@heroicons/react/24/outline';
import { useScrollAnimation, fadeInUp } from '../hooks/useScrollAnimation';
import { useAppointment } from '../context/AppointmentContext';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Profilaxie = () => {
  const { ref, isInView } = useScrollAnimation();
  const { openModal } = useAppointment();
  
  // Ensure page scrolls to top
  useScrollToTop();

  const treatments = [
    {
      title: 'Igienizare Profesională Completă',
      description: 'Prevenția este fundamentul unei sănătăți orale optime. Oferim servicii complete de igienizare profesională, incluzând detartraj cu ultrasunete de ultimă generație, periaj profesional și tehnici avansate de curățare.',
      details: 'Echipamentele noastre moderne asigură o curățare eficientă și confortabilă, eliminând placa bacteriană și tartrul din zonele greu accesibile.',
      features: ['Igienizare Profesională', 'Detartraj cu Ultrasunete', 'Terapii Inovatoare', 'Prevenție Completă']
    },
    {
      title: 'Air-Flow și Fluorizare',
      description: 'Tehnologia Air-Flow permite îndepărtarea eficientă a petelor și depunerilor de pe suprafața dinților, oferind o curățare superioară. Fluorizarea profesională întărește smalțul dentar și oferă protecție împotriva cariilor.',
      details: 'Procedura Air-Flow este complet indoloroasă și oferă rezultate vizibile imediat, permițând o curățare profundă fără afectarea smalțului dentar.',
      features: ['Tehnologie Air-Flow', 'Fluorizare profesională', 'Curățare profundă', 'Protecție împotriva cariilor']
    },
    {
      title: 'Ozonoterapie și Pachetul Oral Detox',
      description: 'Oferim terapii inovatoare precum ozonoterapia pentru dezinfecția naturală și vindecarea accelerată a țesuturilor. Pachetul nostru Oral Detox combină tehnicile tradiționale cu terapiile moderne pentru o detoxifiere completă a cavității orale.',
      details: 'Ozonoterapia este o metodă naturală și eficientă de combatere a bacteriilor și virusurilor, accelerând procesul de vindecare și reducând inflamația gingivală.',
      features: ['Ozonoterapie naturală', 'Oral Detox complet', 'Vindecare accelerată', 'Detoxifiere orală']
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
              Profilaxie
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Prevenție dentară completă cu tehnologii moderne pentru o sănătate orală optimă.
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
                      <span className="text-6xl">🦷🛡️</span>
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
              Gata să-ți Protejezi Zâmbetul?
            </h2>
            <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
              Programează o consultație gratuită pentru a descoperi cum profilaxia modernă 
              îți poate oferi protecția completă și sănătatea orală pe care o dorești.
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

export default Profilaxie; 