import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Waves } from 'lucide-react';
import BlurText from './BlurText';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'Rooms', 'Surf', 'Dining', 'Experience', 'Contact'];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#F2542D] backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div 
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
  className="flex items-center space-x-3"
>
  <img 
    src="public/tahinilogo.jpg" 
    alt="Logo"
    className="w-10 h-10 object-contain"
  />
  
</motion.div>

            <BlurText
              text="Tahini & Friends"
              className="text-2xl font-serif font-bold text-white"
              delay={100}
              animateBy="letters"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-terracotta transition-colors duration-300 font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
          initial={false}
          animate={{ 
            maxHeight: isMenuOpen ? 384 : 0,
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <nav className="pt-4 pb-2">
            {menuItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-white hover:text-terracotta transition-colors duration-300"
                initial={{ x: -20, opacity: 0 }}
                animate={{ 
                  x: isMenuOpen ? 0 : -20, 
                  opacity: isMenuOpen ? 1 : 0 
                }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
