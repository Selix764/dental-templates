import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CheckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { useScrollAnimation, fadeInUp } from '../hooks/useScrollAnimation';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { useAppointment } from '../context/AppointmentContext';

const PoliticaConfidentialitate = () => {
  const { ref, isInView } = useScrollAnimation();
  const { openModal } = useAppointment();
  
  // Ensure page scrolls to top
  useScrollToTop();

  const sections = [
    {
      title: '1. Informații Generale',
      content: 'Clinica Dentaire este operatorul de date cu caracter personal și este responsabilă pentru procesarea datelor dumneavoastră în conformitate cu Regulamentul General privind Protecția Datelor (GDPR) și legislația română în vigoare.'
    },
    {
      title: '2. Datele pe Care Le Colectăm',
      content: 'Colectăm următoarele tipuri de date: informații personale (nume, prenume, CNP), date de contact (telefon, email, adresă), date medicale (istoric medical, diagnostic, tratamente), date tehnice (IP, cookies, log-uri de acces).'
    },
    {
      title: '3. Scopul Procesării Datelor',
      content: 'Datele sunt procesate pentru: furnizarea serviciilor medicale, programarea consultațiilor, facturarea și plățile, comunicarea cu pacienții, îmbunătățirea serviciilor, conformitatea cu obligațiile legale și securitatea clinicii.'
    },
    {
      title: '4. Baza Legală pentru Procesare',
      content: 'Procesarea se bazează pe: execuția contractului (serviciile medicale), obligația legală (raportarea către autorități), interesul legitim (securitatea clinicii), consimțământul (marketing, comunicări).'
    },
    {
      title: '5. Păstrarea Datelor',
      content: 'Datele medicale sunt păstrate conform legislației medicale (minimum 10 ani), datele de contact pentru perioada relației contractuale plus 3 ani, datele tehnice pentru maximum 2 ani.'
    },
    {
      title: '6. Partajarea Datelor',
      content: 'Datele pot fi partajate cu: autorități medicale (obligație legală), furnizori de servicii IT (procesare în numele nostru), asigurători (cu consimțământul dumneavoastră), avocați (pentru protecția drepturilor noastre).'
    },
    {
      title: '7. Drepturile Dumneavoastră',
      content: 'Aveți dreptul la: accesul la date, rectificarea datelor, ștergerea datelor, restricționarea procesării, portabilitatea datelor, opoziția față de procesare, retragerea consimțământului, plângerea la autoritatea de supraveghere.'
    },
    {
      title: '8. Securitatea Datelor',
      content: 'Implementăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor: criptarea, accesul restricționat, backup-uri regulate, audituri de securitate, formarea personalului.'
    },
    {
      title: '9. Transferuri Internaționale',
      content: 'Datele sunt procesate în România și în Uniunea Europeană. Orice transfer internațional se face conform standardelor GDPR și cu garanții adecvate de protecție.'
    },
    {
      title: '10. Cookie-uri și Tehnologii Similar',
      content: 'Utilizăm cookie-uri pentru funcționalitatea site-ului, analiză și marketing. Puteți gestiona preferințele cookie-urilor prin setările browserului sau prin panoul nostru de consimțământ.'
    }
  ];

  const rights = [
    'Dreptul la informare despre procesarea datelor',
    'Dreptul la accesul la datele personale',
    'Dreptul la rectificarea datelor incorecte',
    'Dreptul la ștergerea datelor (dreptul la uitare)',
    'Dreptul la restricționarea procesării',
    'Dreptul la portabilitatea datelor',
    'Dreptul la opoziția față de procesare',
    'Dreptul la retragerea consimțământului'
  ];

  const securityMeasures = [
    'Criptarea datelor în repaus și în tranzit',
    'Accesul restricționat la datele personale',
    'Backup-uri regulate și securizate',
    'Audituri de securitate periodice',
    'Formarea personalului privind protecția datelor',
    'Politici de securitate documentate'
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
              <span>Înapoi</span>
            </motion.button>
            
            <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">
              Politica de Confidențialitate
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Protejarea datelor dumneavoastră personale este o prioritate pentru noi
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
              <div className="container-custom py-16">
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
              Această politică de confidențialitate descrie modul în care Clinica Dentaire colectează, 
              utilizează și protejează informațiile dumneavoastră personale. Suntem angajați să protejăm 
              confidențialitatea și să respectăm drepturile dumneavoastră conform GDPR.
            </p>
            <p className="text-lg text-text-light leading-relaxed">
              Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
            </p>
          </motion.div>

          {/* Privacy Sections */}
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

          {/* Rights and Security */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Rights */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white rounded-2xl p-8 shadow-soft"
            >
              <h3 className="font-heading text-2xl font-semibold text-text-dark mb-6">
                Drepturile Dumneavoastră GDPR
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

            {/* Security Measures */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-white rounded-2xl p-8 shadow-soft"
            >
              <h3 className="font-heading text-2xl font-semibold text-text-dark mb-6">
                Măsuri de Securitate
              </h3>
              <div className="space-y-4">
                {securityMeasures.map((measure, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <ShieldCheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-text-light">{measure}</span>
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
              Contact pentru Protecția Datelor
            </h3>
            <p className="text-text-light mb-6">
              Pentru orice întrebări privind protecția datelor sau pentru a vă exercita drepturile GDPR, 
              ne puteți contacta la adresa de email dedicată sau prin formularul nostru de contact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openModal}
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

export default PoliticaConfidentialitate; 