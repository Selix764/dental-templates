import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CheckIcon, StarIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { useScrollAnimation, staggerContainer, fadeInUp } from '../../hooks/useScrollAnimation';
import { useAppointment } from '../../context/AppointmentContext';

const Preturi = () => {
  const { ref, isInView } = useScrollAnimation();
  const { openModal } = useAppointment();

  const pricingCategories = [
    {
      title: 'CONSULTAȚII',
      services: [
        { name: 'Consultație', price: '200 RON' }
      ]
    },
    {
      title: 'ODONTOLOGIE',
      services: [
        { name: 'Obturație Clasa 1', price: '350 RON' },
        { name: 'Obturație Clasa 2', price: '500 RON' }
      ]
    },
    {
      title: 'PROFILAXIE',
      services: [
        { name: 'Periaj Air Flow', price: '200 RON' },
        { name: 'Igienizare profesională', price: '400 RON' }
      ]
    },
    {
      title: 'PROTETICĂ',
      services: [
        { name: 'Ablație lucrare', price: '150 RON' },
        { name: 'Capă de vindecare', price: '250 RON' },
        { name: 'Coroană provizorie', price: '350 RON' },
        { name: 'Coroană zirconiu', price: '1750 RON' },
        { name: 'Fațetă', price: '1750 RON' }
      ]
    },
    {
      title: 'ENDODONȚIE',
      services: [
        { name: 'Tratament endo dinte monoradicular + obturație', price: '1000 RON' },
        { name: 'Tratament endo dinte pluriradicular + obturație', price: '1250 RON' },
        { name: 'Retratament endo dinte monoradicular + obturație', price: '1100 RON' },
        { name: 'Retratament endo dinte pluriradicular + obturație', price: '1350 RON' },
        { name: 'Drenaj', price: '400 RON' }
      ]
    },
    {
      title: 'ESTETICĂ DENTARĂ',
      services: [
        { name: 'Albire dentară cu lampă 1 ședință', price: '1200 RON' },
        { name: 'Albire dentară cu lampă + igienizare', price: '1600 RON' }
      ]
    },
    {
      title: 'CHIRURGIE',
      services: [
        { name: 'Implant dentar', price: '1750 RON' },
        { name: 'Extracție molar de minte erupt', price: '400 RON' },
        { name: 'Extracție molar de minte inclus poziție verticală', price: '800 RON' },
        { name: 'Extracție molar de minte inclus poziție oblică / orizontală', price: '1200 RON' },
        { name: 'Extracție dinte', price: '350 RON' },
        { name: 'Extracție rest radicular', price: '250 RON' },
        { name: 'Sinus lift intern', price: '2250 RON' },
        { name: 'Sinus lift extern', price: '3500 RON' },
        { name: 'Os neresorbabil BIO - OSS 0.25 g', price: '800 RON' },
        { name: 'Os neresorbabil BIO - OSS 0.5 g', price: '900 RON' },
        { name: 'Os neresorbabil BIO - OSS 1 g', price: '1500 RON' },
        { name: 'Os neresorbabil BIO - OSS 2 g', price: '2600 RON' }
      ]
    }
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Calitate Garantată',
      description: 'Folosim doar materialele cele mai bune pentru tratamentele dumneavoastră'
    },
    {
      icon: UserGroupIcon,
      title: 'Experiență Profesională',
      description: 'Echipă de medici cu peste 15 ani de experiență în stomatologie'
    },
    {
      icon: StarIcon,
      title: 'Rezultate Rapide',
      description: 'Tratamente eficiente cu recuperare rapidă și confortabilă'
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
              <span>Înapoi la site</span>
            </motion.button>
            
            <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">
              Prețuri Servicii
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Tarife transparente pentru servicii de calitate
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom px-6 py-16">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4"
          >
            <span>+ PREȚURI SERVICII</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl lg:text-5xl font-bold text-text-dark mb-6"
          >
            Tarife Transparente
            <span className="block text-primary">Pentru Servicii de Calitate</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-text-light max-w-2xl mx-auto"
          >
            Oferim servicii stomatologice complete cu prețuri competitive și transparente. Investiți în sănătatea dumneavoastră dentară cu încredere.
          </motion.p>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {pricingCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100"
            >
              <h3 className="font-heading text-2xl font-semibold text-text-dark mb-6">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.services.map((service, idx) => (
                  <li key={idx} className="flex justify-between items-center border-b border-border-gray pb-3 last:border-b-0 last:pb-0">
                    <span className="text-text-dark font-medium">{service.name}</span>
                    <span className="text-primary font-semibold">{service.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer and CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center bg-light-gray rounded-2xl p-12 mb-16"
        >
          <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
            Prețurile afișate sunt orientative. Pentru o evaluare precisă și un plan de tratament personalizat, programează o consultație cu specialiștii noștri.
          </p>
          <motion.button
            onClick={openModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Programează o Consultație
          </motion.button>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-soft card-hover text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-text-dark mb-4">
                {benefit.title}
              </h3>
              <p className="text-text-light leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center bg-primary/10 rounded-2xl p-12"
        >
          <h2 className="font-heading text-3xl font-bold text-text-dark mb-6">
            Ai Întrebări despre Prețuri?
          </h2>
          <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
            Pentru informații detaliate despre prețuri sau pentru a programa o consultație, 
            nu ezitați să ne contactați. Suntem aici să vă ajutăm!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Programează Consultația
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
  );
};

export default Preturi; 