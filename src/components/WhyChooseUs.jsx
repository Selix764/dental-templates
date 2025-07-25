import React from 'react';
import { 
  ShieldCheckIcon, 
  ClockIcon, 
  UserGroupIcon,
  StarIcon,
  HeartIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer, fadeInUp, scaleIn } from '../hooks/useScrollAnimation';

const WhyChooseUs = () => {
  const { ref, isInView } = useScrollAnimation();

  const reasons = [
    {
      icon: ShieldCheckIcon,
      title: 'Îngrijire Expertă',
      description: 'Echipa noastră de profesioniști dentari cu experiență oferă cea mai înaltă calitate de îngrijire.'
    },
    {
      icon: ClockIcon,
      title: 'Program Convenabil',
      description: 'Programare flexibilă pentru a se adapta stilului tău de viață aglomerat și nevoilor familiei.'
    },
    {
      icon: UserGroupIcon,
      title: 'Prietenoasă cu Familia',
      description: 'Îngrijire dentară completă pentru întreaga familie într-un mediu primitor.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Ani de Experiență', icon: StarIcon },
    { number: '5000+', label: 'Pacienți Mulțumiți', icon: HeartIcon },
    { number: '100%', label: 'Rată de Satisfacție', icon: ShieldCheckIcon },
    { number: '24/7', label: 'Îngrijire de Urgență', icon: Cog6ToothIcon }
  ];

  return (
    <section className="section-padding bg-light-gray">
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
            <span>+ DE CE SĂ NE ALEGI</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl lg:text-5xl font-bold text-text-dark mb-6"
          >
            De Ce Pacienții Ne Aleg
            <span className="block text-primary">Clinica Dentaire</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-text-light max-w-2xl mx-auto"
          >
            Combinăm tehnologia avansată cu îngrijirea compasiunată pentru a oferi experiențe 
            dentare excepționale care depășesc așteptările tale.
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={scaleIn}
              className="bg-white rounded-2xl p-8 shadow-soft card-hover text-center"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6"
              >
                <reason.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-text-dark mb-4">
                {reason.title}
              </h3>
              <p className="text-text-light leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4"
              >
                <stat.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <div className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-text-light font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 