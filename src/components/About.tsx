import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Trusted Construction Excellence
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            With years of expertise in the UAE construction industry, KNOOZ ALHARAM delivers 
            superior concrete works and finishing solutions. Our commitment to quality, 
            precision, and timely execution has established us as a reliable partner for 
            prestigious projects across Abu Dhabi and Dubai.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
            <p className="text-gray-600">Premium materials and expert craftsmanship</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">On Time</h3>
            <p className="text-gray-600">Efficient project management and delivery</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
            <p className="text-gray-600">Skilled professionals dedicated to excellence</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
