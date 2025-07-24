import React, { useState } from 'react';
import { 
  ArrowLeftIcon, 
  ArrowRightIcon,
  StarIcon,
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, scaleIn } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const { ref, isInView } = useScrollAnimation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Patient',
      rating: 5,
      text: 'The dental care I received at Dentaire was exceptional. The staff was professional, caring, and made me feel comfortable throughout my entire visit. I highly recommend their services!',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="35" r="15" fill="%23fef3c7"/><path d="M25 80 Q50 60 75 80" fill="%23fef3c7"/><circle cx="40" cy="30" r="2" fill="%23f59e0b"/><circle cx="60" cy="30" r="2" fill="%23f59e0b"/><path d="M35 40 Q50 45 65 40" fill="none" stroke="%23f59e0b" stroke-width="1"/></svg>'
    },
    {
      name: 'Michael Chen',
      role: 'Patient',
      rating: 5,
      text: 'Dr. Sarah and her team are amazing! They took the time to explain everything clearly and made sure I was comfortable during my treatment. The results exceeded my expectations.',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="35" r="15" fill="%23e5f3ff"/><path d="M25 80 Q50 60 75 80" fill="%23e5f3ff"/><circle cx="40" cy="30" r="2" fill="%230ea5e9"/><circle cx="60" cy="30" r="2" fill="%230ea5e9"/><path d="M35 40 Q50 45 65 40" fill="none" stroke="%230ea5e9" stroke-width="1"/></svg>'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Patient',
      rating: 5,
      text: 'I was nervous about my dental procedure, but the team at Dentaire made me feel so relaxed. Their expertise and gentle approach made all the difference. Thank you!',
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="35" r="15" fill="%23f3e8ff"/><path d="M25 80 Q50 60 75 80" fill="%23f3e8ff"/><circle cx="40" cy="30" r="2" fill="%238b5cf6"/><circle cx="60" cy="30" r="2" fill="%238b5cf6"/><path d="M35 40 Q50 45 65 40" fill="none" stroke="%238b5cf6" stroke-width="1"/></svg>'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience', icon: StarIcon },
    { number: '5000+', label: 'Happy Patients', icon: HeartIcon },
    { number: '100%', label: 'Satisfaction Rate', icon: ShieldCheckIcon },
    { number: '24/7', label: 'Emergency Care', icon: UserGroupIcon }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="section-padding bg-white relative">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="quote-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"><text x="50" y="50" text-anchor="middle" dy=".35em" font-family="serif" font-size="40" fill="%230ea5e9">"</text></pattern></defs><rect width="100%" height="100%" fill="url(%23quote-pattern)"/></svg>')`
        }}
      ></div>
      <div className="container-custom relative z-10">
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
            <span>+ TESTIMONIALS</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl lg:text-5xl font-bold text-text-dark mb-6"
          >
            What Our Patients
            <span className="block text-primary">Say About Us</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-text-light max-w-2xl mx-auto"
          >
            Read testimonials from our satisfied patients who have experienced 
            exceptional dental care and outstanding service at Dentaire.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto mb-16"
        >
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-soft border border-border-gray relative overflow-hidden"
          >
            {/* Quote Background */}
            <div className="absolute top-4 right-4 text-6xl text-primary/10 font-serif">
              "
            </div>
            {/* Testimonial Content */}
            <div className="text-center">
              {/* Patient Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-20 h-20 bg-light-gray rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden"
              >
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Rating */}
              <div className="flex items-center justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg text-text-dark mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Patient Info */}
              <div>
                <h4 className="font-heading text-xl font-semibold text-text-dark mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-text-light">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial 
                      ? 'bg-primary' 
                      : 'bg-border-gray hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={fadeInUp}
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

export default Testimonials; 