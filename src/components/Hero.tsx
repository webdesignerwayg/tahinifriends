import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import BlurText from './BlurText';
import StarBorder from './StarBorder';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img
            src="public/herobgggg.jpg"
            alt="Sri Lankan Beach Resort"
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Small subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6"
        >
          <BlurText
            text="Surf + Stay"
            className="text-sm md:text-base font-light text-white/90 tracking-[0.3em] uppercase"
            delay={100}
            animateBy="letters"
          />
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-8"
        >
          <BlurText
            text="Tahini & Friends"
            className="text-4xl md:text-5xl lg:text-8xl font-serif font-light text-white leading-none tracking-wide"
            delay={150}
            animateBy="letters"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-12"
        >
          <BlurText
            text="A Serene Escape by the Sea"
            className="text-lg md:text-xl text-white/90 font-light italic tracking-wide"
            delay={80}
            animateBy="words"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mb-16"
        >
          <StarBorder
            className="transform hover:scale-105 transition-transform duration-300"
            color="#ffffff"
            speed="4s"
          >
            Discover Paradise
          </StarBorder>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/70"
        >
          <div className="w-px h-12 bg-white/30 mb-3"></div>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      {/* Pagination dots (decorative) */}
      <motion.div
        className="absolute bottom-12 right-12 hidden md:flex flex-col space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white/40 rounded-full"></div>
        <div className="w-2 h-2 bg-white/40 rounded-full"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
