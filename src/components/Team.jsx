import React from 'react';
import { 
  StarIcon,
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer, fadeInUp, scaleIn } from '../hooks/useScrollAnimation';

const Team = () => {
  const { ref, isInView } = useScrollAnimation();

  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Stomatologie Generală',
      experience: '15+ Ani',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="35" r="15" fill="%23e5f3ff"/><path d="M25 80 Q50 60 75 80" fill="%23e5f3ff"/><circle cx="40" cy="30" r="2" fill="%230ea5e9"/><circle cx="60" cy="30" r="2" fill="%230ea5e9"/><path d="M35 40 Q50 45 65 40" fill="none" stroke="%230ea5e9" stroke-width="1"/></svg>',
      rating: 4.9,
      reviews: 250
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Ortodonție',
      experience: '12+ Ani',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="35" r="15" fill="%23f0f9ff"/><path d="M25 80 Q50 60 75 80" fill="%23f0f9ff"/><circle cx="40" cy="30" r="2" fill="%2306b6d4"/><circle cx="60" cy="30" r="2" fill="%2306b6d4"/><path d="M35 40 Q50 45 65 40" fill="none" stroke="%2306b6d4" stroke-width="1"/></svg>',
      rating: 4.8,
      reviews: 180
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Stomatologie Pediatrică',
      experience: '10+ Ani',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="35" r="15" fill="%23fef3c7"/><path d="M25 80 Q50 60 75 80" fill="%23fef3c7"/><circle cx="40" cy="30" r="2" fill="%23f59e0b"/><circle cx="60" cy="30" r="2" fill="%23f59e0b"/><path d="M35 40 Q50 45 65 40" fill="none" stroke="%23f59e0b" stroke-width="1"/></svg>',
      rating: 4.9,
      reviews: 320
    },
    {
      name: 'Dr. David Thompson',
      specialty: 'Chirurgie Orală',
      experience: '18+ Ani',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="35" r="15" fill="%23f3e8ff"/><path d="M25 80 Q50 60 75 80" fill="%23f3e8ff"/><circle cx="40" cy="30" r="2" fill="%238b5cf6"/><circle cx="60" cy="30" r="2" fill="%238b5cf6"/><path d="M35 40 Q50 45 65 40" fill="none" stroke="%238b5cf6" stroke-width="1"/></svg>',
      rating: 4.7,
      reviews: 150
    }
  ];

  const stats = [
    { number: '15+', label: 'Ani de Experiență', icon: StarIcon },
    { number: '5000+', label: 'Pacienți Mulțumiți', icon: HeartIcon },
    { number: '100%', label: 'Rată de Satisfacție', icon: ShieldCheckIcon },
    { number: '24/7', label: 'Îngrijire de Urgență', icon: UserGroupIcon }
  ];

  return (
    <section id="team" className="section-padding bg-white">
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
            <span>+ ECHIPA NOASTRĂ</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl lg:text-5xl font-bold text-text-dark mb-6"
          >
            Cunoaște Echipa Noastră
            <span className="block text-primary">Expertă de Dentist</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-text-light max-w-2xl mx-auto"
          >
            Echipa noastră de profesioniști dentari cu experiență este dedicată oferirii 
            de îngrijire excepțională și creării de zâmbete frumoase pentru pacienții noștri.
          </motion.p>
        </motion.div>

        {/* Doctors Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              variants={scaleIn}
              className="bg-white rounded-2xl p-6 shadow-soft card-hover text-center"
            >
              {/* Doctor Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-24 h-24 bg-light-gray rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden"
              >
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Doctor Info */}
              <h3 className="font-heading text-lg font-semibold text-text-dark mb-2">
                {doctor.name}
              </h3>
              <p className="text-primary font-medium mb-2">
                {doctor.specialty}
              </p>
              <p className="text-text-light text-sm mb-4">
                {doctor.experience} Experience
              </p>

              {/* Rating */}
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(doctor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-text-light text-sm">
                {doctor.rating} ({doctor.reviews} reviews)
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            View All Team Members
          </motion.button>
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

export default Team; 