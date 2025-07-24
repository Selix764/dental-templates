import React from 'react';
import { 
  CheckIcon, 
  StarIcon,
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer, fadeInUp, scaleIn } from '../hooks/useScrollAnimation';

const Pricing = () => {
  const { ref, isInView } = useScrollAnimation();

  const plans = [
    {
      name: 'Basic Care',
      price: '$99',
      period: 'per visit',
      description: 'Essential dental care for maintaining your oral health',
      features: [
        'Dental Examination',
        'Professional Cleaning',
        'X-Ray Imaging',
        'Cavity Filling (1)',
        'Oral Health Consultation'
      ],
      popular: false
    },
    {
      name: 'Comprehensive Care',
      price: '$199',
      period: 'per visit',
      description: 'Complete dental care package for optimal oral health',
      features: [
        'Everything in Basic Care',
        'Deep Cleaning',
        'Gum Disease Treatment',
        'Cavity Fillings (3)',
        'Teeth Whitening',
        'Emergency Care Access'
      ],
      popular: true
    },
    {
      name: 'Premium Care',
      price: '$299',
      period: 'per visit',
      description: 'Advanced dental treatments for a perfect smile',
      features: [
        'Everything in Comprehensive Care',
        'Root Canal Treatment',
        'Dental Crowns',
        'Cosmetic Procedures',
        'Invisalign Consultation',
        'Priority Scheduling'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience', icon: StarIcon },
    { number: '5000+', label: 'Happy Patients', icon: HeartIcon },
    { number: '100%', label: 'Satisfaction Rate', icon: ShieldCheckIcon },
    { number: '24/7', label: 'Emergency Care', icon: UserGroupIcon }
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
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
            <span>+ PRICING</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl lg:text-5xl font-bold text-text-dark mb-6"
          >
            Transparent
            <span className="block text-primary">Pricing Plans</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-text-light max-w-2xl mx-auto"
          >
            Choose the dental care plan that best fits your needs and budget. 
            All our plans include comprehensive care and exceptional service.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={scaleIn}
              className={`relative bg-white rounded-2xl p-8 shadow-soft card-hover border-2 ${
                plan.popular 
                  ? 'border-primary ring-2 ring-primary/20' 
                  : 'border-border-gray'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl font-semibold text-text-dark mb-4">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="font-heading text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-text-light ml-2">
                    {plan.period}
                  </span>
                </div>
                <p className="text-text-light">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-text-dark">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
                }`}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <p className="text-lg text-text-light mb-6">
            Need a custom plan? Contact us to discuss your specific dental care needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View All Services & Pricing
          </motion.button>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
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

export default Pricing; 