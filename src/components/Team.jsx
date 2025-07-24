import React from 'react';
import { 
  ArrowRightIcon,
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
      specialty: 'General Dentistry',
      experience: '15+ Years',
      image: '👩‍⚕️',
      rating: 4.9,
      reviews: 250
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Orthodontics',
      experience: '12+ Years',
      image: '👨‍⚕️',
      rating: 4.8,
      reviews: 180
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatric Dentistry',
      experience: '10+ Years',
      image: '👩‍⚕️',
      rating: 4.9,
      reviews: 320
    },
    {
      name: 'Dr. David Thompson',
      specialty: 'Oral Surgery',
      experience: '18+ Years',
      image: '👨‍⚕️',
      rating: 4.7,
      reviews: 150
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience', icon: StarIcon },
    { number: '5000+', label: 'Happy Patients', icon: HeartIcon },
    { number: '100%', label: 'Satisfaction Rate', icon: ShieldCheckIcon },
    { number: '24/7', label: 'Emergency Care', icon: UserGroupIcon }
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
            <span>+ OUR TEAM</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl lg:text-5xl font-bold text-text-dark mb-6"
          >
            Meet Our Expert
            <span className="block text-primary">Dental Team</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-text-light max-w-2xl mx-auto"
          >
            Our team of experienced dental professionals is dedicated to providing 
            exceptional care and creating beautiful smiles for our patients.
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
                className="w-24 h-24 bg-light-gray rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-4xl">{doctor.image}</span>
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
            <ArrowRightIcon className="w-5 h-5 ml-2" />
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