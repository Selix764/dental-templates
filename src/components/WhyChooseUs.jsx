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
      title: 'Expert Care',
      description: 'Our team of experienced dental professionals provides the highest quality care.'
    },
    {
      icon: ClockIcon,
      title: 'Convenient Hours',
      description: 'Flexible scheduling to accommodate your busy lifestyle and family needs.'
    },
    {
      icon: UserGroupIcon,
      title: 'Family Friendly',
      description: 'Comprehensive dental care for the entire family in a welcoming environment.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience', icon: StarIcon },
    { number: '5000+', label: 'Happy Patients', icon: HeartIcon },
    { number: '100%', label: 'Satisfaction Rate', icon: ShieldCheckIcon },
    { number: '24/7', label: 'Emergency Care', icon: Cog6ToothIcon }
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
            <span>+ WHY CHOOSE US</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl lg:text-5xl font-bold text-text-dark mb-6"
          >
            Why Patients Choose
            <span className="block text-primary">Dentaire Clinic</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-text-light max-w-2xl mx-auto"
          >
            We combine advanced technology with compassionate care to deliver exceptional 
            dental experiences that exceed your expectations.
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