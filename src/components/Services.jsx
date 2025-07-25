import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Cog6ToothIcon, 
  HeartIcon, 
  ShieldCheckIcon, 
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer, fadeInUp, scaleIn } from '../hooks/useScrollAnimation';

const Services = () => {
  const { ref, isInView } = useScrollAnimation();
  const navigate = useNavigate();

  const services = [
    {
      icon: Cog6ToothIcon,
      title: 'Estetică Dentară',
      description: 'Transformăm zâmbetul dumneavoastră cu proceduri estetice avansate: albire profesională, fațete dentare din zirconiu și EMAX, și bijuterii dentare Swarovski pentru un look unic.',
      features: ['Albire Profesională', 'Fațete Dentare', 'Bijuterii Dentare', 'Smile Makeover']
    },
    {
      icon: HeartIcon,
      title: 'Protetică',
      description: 'Restaurări protetice de înaltă calitate, de la coroane și punți din zirconiu și ceramică, până la lucrări complexe pe implanturi. Utilizăm materiale premium pentru funcționalitate și estetică optimă.',
      features: ['Coroane Dentare', 'Punți Dentare', 'Lucrări pe Implanturi', 'Materiale Premium']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Implantologie și Chirurgie',
      description: 'Soluții avansate de implantologie cu sisteme premium (Bredent, Straumann, Nobel Biocare) și proceduri chirurgicale asistate pentru recuperare rapidă și confort sporit.',
      features: ['Implanturi Premium', 'Chirurgie Asistată', 'Recuperare Rapidă', 'Sisteme Avansate']
    },
    {
      icon: UserGroupIcon,
      title: 'Ortodonție',
      description: 'Corectăm alinierea dinților cu aparate dentare metalice, ceramice, safir și sisteme invizibile SPARK. Oferim soluții personalizate pentru toate vârstele, cu rezultate estetice remarcabile.',
      features: ['Aparate Metalice', 'Aparate Ceramice', 'Sisteme Invizibile', 'Soluții Personalizate']
    },
    {
      icon: Cog6ToothIcon,
      title: 'Profilaxie',
      description: 'Prevenție dentară completă prin igienizare profesională, detartraj cu ultrasunete, periaj profesional, air-flow, fluorizare și terapii inovatoare precum ozonoterapia și pachetul Oral Detox.',
      features: ['Igienizare Profesională', 'Detartraj Ultrasunete', 'Air-Flow', 'Ozonoterapie']
    },
    {
      icon: HeartIcon,
      title: 'Odontoterapie',
      description: 'Tratamente moderne pentru cariile dentare utilizând tehnologia laser, oferind precizie maximă și disconfort minim. Includem obturații laser standard și la microscop, și tehnici neinvazive ICON.',
      features: ['Tratamente Laser', 'Obturații Precise', 'Tehnici Neinvazive', 'Precizie Maximă']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Endodonție la Microscop',
      description: 'Tratamente de canal de înaltă precizie realizate la microscop. Oferim tratamente și retratamente endodontice pentru toate tipurile de dinți, cu rezultate predictibile și de durată.',
      features: ['Tratamente de Canal', 'Microscop Avansat', 'Retratamente', 'Rezultate Predictibile']
    },
    {
      icon: UserGroupIcon,
      title: 'Chirurgie Orală',
      description: 'Proceduri chirurgicale orale complexe cu tehnologie avansată și anestezie locală pentru confort maxim. Includem extractions, chirurgie periodontală și tratamente pentru afecțiuni orale.',
      features: ['Extractions Complexe', 'Chirurgie Periodontală', 'Anestezie Locală', 'Recuperare Grijulie']
    }
  ];

  const handleServiceClick = (serviceTitle) => {
    const servicePages = {
      'Estetică Dentară': '/estetica-dentara',
      'Protetică': '/protetica',
      'Implantologie și Chirurgie': '/implantologie-chirurgie',
      'Ortodonție': '/ortodontie',
      'Profilaxie': '/profilaxie',
      'Odontoterapie': '/odontoterapie',
      'Endodonție la Microscop': '/endodontie-microscop',
      'Chirurgie Orală': '/chirurgie-orala'
    };
    
    const page = servicePages[serviceTitle];
    if (page) {
      navigate(page);
    }
  };

  return (
    <section id="services" className="section-padding bg-light-gray">
      <div className="container-custom">
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
            <span>+ TRATAMENTELE NOASTRE</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl lg:text-5xl font-bold text-text-dark mb-6"
          >
            Îngrijirea dentară de care aveți nevoie cu o
            <span className="block text-primary">gamă largă de tratamente</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-text-light max-w-2xl mx-auto"
          >
            Suntem dedicați sustenabilității și inițiativelor eco-friendly.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={scaleIn}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl p-6 shadow-soft relative overflow-hidden group cursor-pointer"
              onClick={() => handleServiceClick(service.title)}
            >
              {/* Vector Illustration Background */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                {index === 0 && (
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M30 50 L45 65 L70 35" stroke="currentColor" strokeWidth="3" fill="none"/>
                  </svg>
                )}
                {index === 1 && (
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M50 20 Q70 20 70 40 Q70 60 50 60 Q30 60 30 40 Q30 20 50 20" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="40" cy="35" r="2" fill="currentColor"/>
                    <circle cx="60" cy="35" r="2" fill="currentColor"/>
                    <path d="M35 50 Q50 60 65 50" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
                {index === 2 && (
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect x="25" y="30" width="50" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="35" cy="40" r="3" fill="currentColor"/>
                    <circle cx="45" cy="40" r="3" fill="currentColor"/>
                    <circle cx="55" cy="40" r="3" fill="currentColor"/>
                    <circle cx="65" cy="40" r="3" fill="currentColor"/>
                  </svg>
                )}
                {index === 3 && (
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="35" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="35" cy="60" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="65" cy="60" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M35 60 Q50 70 65 60" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
                {index === 4 && (
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M30 30 L70 30 L70 70 L30 70 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="40" cy="40" r="3" fill="currentColor"/>
                    <circle cx="60" cy="40" r="3" fill="currentColor"/>
                    <path d="M35 55 Q50 65 65 55" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
                {index === 5 && (
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M30 60 L70 60" stroke="currentColor" strokeWidth="2"/>
                    <path d="M40 70 L60 70" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
                {index === 6 && (
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect x="30" y="25" width="40" height="50" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="45" cy="35" r="2" fill="currentColor"/>
                    <circle cx="55" cy="35" r="2" fill="currentColor"/>
                    <path d="M35 50 L65 50" stroke="currentColor" strokeWidth="2"/>
                    <path d="M35 60 L65 60" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
                {index === 7 && (
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M25 40 L75 40" stroke="currentColor" strokeWidth="3"/>
                    <path d="M25 50 L75 50" stroke="currentColor" strokeWidth="3"/>
                    <path d="M25 60 L75 60" stroke="currentColor" strokeWidth="3"/>
                    <circle cx="50" cy="30" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  backgroundColor: "rgb(60, 90, 153)",
                  transition: { duration: 0.3 }
                }}
                className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 relative z-10 group-hover:bg-primary transition-all duration-300"
              >
                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </motion.div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-text-dark mb-4">
                {service.title}
              </h3>
              <p className="text-text-light mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-text-light">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Read More Button */}
              <motion.button
                whileHover={{ x: 5 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleServiceClick(service.title);
                }}
                className="flex items-center text-primary font-semibold text-sm hover:text-primary/80 transition-colors"
              >
                Citește Mai Mult
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <p className="text-lg text-text-light mb-6">
            Nu găsiți serviciul de care aveți nevoie? Contactați-ne pentru a afla despre gama completă de servicii dentare.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Contactați-ne
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 