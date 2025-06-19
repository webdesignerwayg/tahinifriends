import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Heart } from 'lucide-react';
import BlurText from './BlurText';

const Footer = () => {
  const footerLinks = {
    "Quick Links": ["Home", "Rooms", "Surf", "Dining", "Experience", "Contact"],
    "Services": ["Surf Lessons", "Equipment Rental", "Photography Tours", "Wellness Retreats"],
    "Policies": ["Privacy Policy", "Terms of Service", "Cancellation Policy", "Sustainability"]
  };

  return (
    <footer className="bg-sage text-cream py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Waves className="w-8 h-8 text-cream" />
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Waves className="w-8 h-8 text-cream/30" />
                </motion.div>
              </div>
              <BlurText
                text="Tahini & Friends"
                className="text-2xl font-serif font-bold"
                delay={100}
                animateBy="letters"
              />
            </div>
            <BlurText
              text="Where the waves meet luxury. Experience the perfect blend of surf culture and boutique hospitality in Sri Lanka."
              className="text-cream/80 leading-relaxed"
              delay={50}
              animateBy="words"
            />
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <BlurText
                text={category}
                className="text-xl font-serif font-bold mb-6"
                delay={50}
                animateBy="words"
              />
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: linkIndex * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="text-cream/70 hover:text-cream transition-colors duration-300 hover:underline"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <BlurText
              text="© 2024 Tahini & Friends. Made with"
              className="text-cream/70"
              delay={30}
              animateBy="words"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            </motion.div>
            <BlurText
              text="in Sri Lanka"
              className="text-cream/70"
              delay={30}
              animateBy="words"
            />
          </div>
          
          <BlurText
            text="Mirissa Beach Road, Mirissa, Sri Lanka"
            className="text-cream/70"
            delay={30}
            animateBy="words"
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;