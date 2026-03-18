import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsPlaying(false);
  };

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
            See Our Work in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch how we transform construction visions into reality
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {/* Video Thumbnail */}
            <div className="relative">
              <img
                src="/images/construction-thumbnail.jpg"
                alt="KNOOZ ALHARAM Construction Work"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Play Button Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button
                    onClick={handlePlayVideo}
                    className="w-20 h-20 bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                  >
                    <Play 
                      className="text-white ml-1" 
                      size={32}
                      fill="white"
                    />
                  </button>
                </div>
              )}
            </div>

            {/* Video Modal */}
            {isPlaying && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
                <div className="relative w-full max-w-4xl">
                  <button
                    onClick={handleCloseVideo}
                    className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors duration-200"
                  >
                    <X size={32} />
                  </button>
                  
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      className="w-full h-[500px] rounded-lg"
                      src="https://www.youtube.com/embed/Tn9fvNi8otQ?autoplay=1"
                      title="KNOOZ ALHARAM Construction Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Video Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience our commitment to quality construction and innovative solutions. 
              From concrete works to finishing touches, see how we deliver excellence 
              in every project across the UAE.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Video;
