import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = '+971566681526';
  const whatsappMessage = encodeURIComponent('Hello, I would like to inquire about your construction services.');

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber.replace('+', '')}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        <MessageCircle size={24} />
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-24 z-40 bg-gray-800 hover:bg-gray-900 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        <ArrowUp size={24} />
      </button>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="flex items-center mb-4">
                <img 
                  src="/images/logo.png" 
                  alt="KNOOZ ALHARAM Logo" 
                  className="h-16 w-auto mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">KNOOZ ALHARAM</h3>
                  <p className="text-orange-400 text-sm font-medium">GENERAL CONTRACTING L.L.C</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for premium concrete works and finishing solutions 
                across the UAE. Delivering excellence in construction since our establishment.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Phone className="text-orange-400" size={18} />
                  <div>
                    <span className="text-white font-medium">+971 56 668 1526</span>
                    <p className="text-gray-300 text-sm">Call / WhatsApp</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-orange-400" size={18} />
                  <div>
                    <span className="text-white font-medium">knoozalharam4@gmail.com</span>
                    <p className="text-gray-300 text-sm">Email Contact</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-orange-400 mt-1" size={18} />
                  <div>
                    <span className="text-white font-medium">Abu Dhabi, UAE</span>
                    <p className="text-gray-300 text-sm">Head Office</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 mt-8 pt-8 text-center"
          >
            <p className="text-gray-300">
              © 2024 KNOOZ ALHARAM – GENERAL CONTRACTING L.L.C. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
