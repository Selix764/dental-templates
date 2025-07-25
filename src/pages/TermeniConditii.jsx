import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CheckIcon } from '@heroicons/react/24/outline';
import { useScrollAnimation, fadeInUp } from '../hooks/useScrollAnimation';
import { useAppointment } from '../context/AppointmentContext';
import { useNavigate } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

const TermeniConditii = () => {
  const { ref, isInView } = useScrollAnimation();
  const { openModal } = useAppointment();
  const navigate = useNavigate();
  
  // Ensure page scrolls to top
  useScrollToTop();

  const sections = [
    {
      title: '1. Acceptarea Termenilor',
      content: 'Prin accesarea și utilizarea acestui site web, acceptați să respectați acești termeni și condiții în totalitate. Dacă nu sunteți de acord cu orice parte a acestor termeni, vă rugăm să nu utilizați serviciile noastre.'
    },
    {
      title: '2. Serviciile Noastre',
      content: 'Oferim servicii stomatologice complete, inclusiv consultații, tratamente preventive, cosmetice și de urgență. Toate serviciile sunt furnizate de medici autorizați și personal calificat.'
    },
    {
      title: '3. Programarea Consultațiilor',
      content: 'Programările se fac prin intermediul site-ului nostru, telefon sau email. Vă rugăm să anulați programarea cu cel puțin 24 de ore înainte dacă nu vă puteți prezenta la consultație.'
    },
    {
      title: '4. Plata și Facturarea',
      content: 'Plata se face la data consultației sau conform planului de tratament stabilit. Acceptăm plăți în numerar, cu cardul sau prin transfer bancar. Facturile sunt emise conform legislației în vigoare.'
    },
    {
      title: '5. Confidențialitatea',
      content: 'Toate informațiile medicale sunt confidențiale și sunt protejate conform legislației GDPR. Informațiile sunt utilizate exclusiv pentru furnizarea serviciilor medicale și nu sunt partajate cu terți fără consimțământul dumneavoastră.'
    },
    {
      title: '6. Responsabilitatea Medicală',
      content: 'Deși ne străduim să oferim cele mai bune servicii medicale, nu putem garanta rezultate specifice. Fiecare pacient răspunde diferit la tratamente, iar rezultatele pot varia.'
    },
    {
      title: '7. Limitarea Răspunderii',
      content: 'Clinica nu poate fi trasă la răspundere pentru daune indirecte, incidentale sau consecvente care pot rezulta din utilizarea serviciilor noastre, cu excepția cazurilor de neglijență medicală dovedită.'
    },
    {
      title: '8. Proprietatea Intelectuală',
      content: 'Toate conținuturile acestui site web, inclusiv textele, imaginile, logotipurile și designul, sunt protejate de drepturile de autor și aparțin clinicii noastre sau licențiatorilor noștri.'
    },
    {
      title: '9. Modificări ale Termenilor',
      content: 'Ne rezervăm dreptul de a modifica acești termeni în orice moment. Modificările vor fi comunicate prin intermediul site-ului web sau prin email. Utilizarea continuă a serviciilor după modificări reprezintă acceptarea noilor termeni.'
    },
    {
      title: '10. Legea Aplicabilă',
      content: 'Acești termeni și condiții sunt guvernați de legislația română. Orice dispută va fi rezolvată prin negocieri amiabile sau prin instanțele competente din România.'
    }
  ];

  const rights = [
    'Dreptul la informare despre tratamente',
    'Dreptul la consimțământul informat',
    'Dreptul la confidențialitate',
    'Dreptul la accesul la datele medicale',
    'Dreptul la portabilitatea datelor',
    'Dreptul la ștergerea datelor'
  ];

  const obligations = [
    'Să furnizați informații corecte și complete',
    'Să respectați programările stabilite',
    'Să urmați recomandările medicale',
    'Să plătiți serviciile conform tarifelor',
    'Să anulați programările în timp util',
    'Să respectați regulamentul clinicii'
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
              <span>Înapoi</span>
            </motion.button>
            
            <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">
              Termeni și Condiții
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Condițiile de utilizare a serviciilor noastre stomatologice
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            ref={ref}
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-text-dark mb-6">
              Introducere
            </h2>
            <p className="text-lg text-text-light leading-relaxed mb-6">
              Acești termeni și condiții guvernează utilizarea serviciilor oferite de Clinica Dentaire. 
              Prin accesarea site-ului nostru și utilizarea serviciilor noastre, acceptați să respectați 
              acești termeni în totalitate.
            </p>
            <p className="text-lg text-text-light leading-relaxed">
              Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
            </p>
          </motion.div>

          {/* Terms Sections */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8 mb-12"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-light-gray rounded-2xl p-8"
              >
                <h3 className="font-heading text-2xl font-semibold text-text-dark mb-4">
                  {section.title}
                </h3>
                <p className="text-text-light leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Rights and Obligations */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Rights */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white rounded-2xl p-8 shadow-soft"
            >
              <h3 className="font-heading text-2xl font-semibold text-text-dark mb-6">
                Drepturile Dumneavoastră
              </h3>
              <div className="space-y-4">
                {rights.map((right, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-text-light">{right}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Obligations */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white rounded-2xl p-8 shadow-soft"
            >
              <h3 className="font-heading text-2xl font-semibold text-text-dark mb-6">
                Obligațiile Dumneavoastră
              </h3>
              <div className="space-y-4">
                {obligations.map((obligation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-text-light">{obligation}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-primary/10 rounded-2xl p-8 text-center"
          >
            <h3 className="font-heading text-2xl font-semibold text-text-dark mb-4">
              Aveți Întrebări?
            </h3>
            <p className="text-text-light mb-6">
              Dacă aveți întrebări despre acești termeni și condiții, nu ezitați să ne contactați.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Contactați-ne
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.history.back()}
                className="btn-outline"
              >
                Înapoi la Site
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermeniConditii; 