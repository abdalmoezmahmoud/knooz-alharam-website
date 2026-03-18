import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Clock, 
  Eye, 
  FileText, 
  Sun,
  Moon
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Star,
      title: 'High Quality Finish',
      description: 'Premium workmanship on every project'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Respect for deadlines and schedules'
    },
    {
      icon: Eye,
      title: 'Full Supervision',
      description: 'Complete project oversight and management'
    },
    {
      icon: FileText,
      title: 'Flexible Contracts',
      description: 'Customized solutions for your needs'
    },
    {
      icon: Sun,
      title: 'Day Work',
      description: 'Regular business hours operations'
    },
    {
      icon: Moon,
      title: 'Night Work',
      description: '24/7 availability for urgent projects'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose KNOOZ ALHARAM
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for construction excellence in the UAE
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group-hover:bg-orange-50">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                  <feature.icon 
                    className="text-orange-600 group-hover:text-white transition-colors duration-300" 
                    size={32} 
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
