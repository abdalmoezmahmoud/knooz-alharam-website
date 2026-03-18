import React from 'react';
import { motion } from 'framer-motion';
import { 
  Hammer, 
  Layers, 
  Sparkles, 
  Truck
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: 'Concrete Works',
      description: 'Structural concrete, foundations, and reinforced concrete solutions',
      features: ['Foundations', 'Slabs', 'Columns', 'Beams']
    },
    {
      icon: Layers,
      title: 'Flooring Solutions',
      description: 'Premium flooring systems for industrial and commercial spaces',
      features: ['Epoxy Flooring', 'Polished Concrete', 'Tiles', 'Industrial Coatings']
    },
    {
      icon: Sparkles,
      title: 'Finishing & Surface Treatment',
      description: 'Expert surface preparation and high-quality finishing works',
      features: ['Surface Preparation', 'Decorative Finishes', 'Waterproofing', 'Sealing']
    },
    {
      icon: Truck,
      title: 'Site Preparation',
      description: 'Complete site preparation and ground works for construction',
      features: ['Excavation', 'Grading', 'Compaction', 'Site Clearance']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction solutions delivered with precision and excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 h-full">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                  <service.icon 
                    className="text-orange-600 group-hover:text-white transition-colors duration-300" 
                    size={32} 
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
