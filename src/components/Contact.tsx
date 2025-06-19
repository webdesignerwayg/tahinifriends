import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import BlurText from './BlurText';
import StarBorder from './StarBorder';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Mirissa Beach Road", "Mirissa, Southern Province", "Sri Lanka 81740"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+94 77 123 4567", "+94 41 234 5678"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@tahiniandfriends.com", "reservations@tahiniandfriends.com"]
    },
    {
      icon: Clock,
      title: "Reception Hours",
      details: ["24/7 Front Desk", "Concierge: 7AM - 10PM"]
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", url: "#" },
    { icon: Facebook, name: "Facebook", url: "#" },
    { icon: Twitter, name: "Twitter", url: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-sage/10 to-sage/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <BlurText
            text="Get in Touch"
            className="text-5xl md:text-6xl font-serif font-light text-sage mb-6"
            delay={150}
            animateBy="words"
          />
          <BlurText
            text="We're here to help you plan your perfect Sri Lankan getaway"
            className="text-xl text-sage/80 font-light max-w-2xl mx-auto"
            delay={100}
            animateBy="words"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <BlurText
              text="Send us a Message"
              className="text-3xl font-serif font-bold text-sage mb-8"
              delay={100}
              animateBy="words"
            />
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sage font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-sage/20 focus:border-sage focus:outline-none transition-colors duration-300 bg-white/50"
                    placeholder="Your first name"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sage font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-sage/20 focus:border-sage focus:outline-none transition-colors duration-300 bg-white/50"
                    placeholder="Your last name"
                  />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-sage font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-sage/20 focus:border-sage focus:outline-none transition-colors duration-300 bg-white/50"
                  placeholder="your@email.com"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-sage font-medium mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-sage/20 focus:border-sage focus:outline-none transition-colors duration-300 bg-white/50">
                  <option>Room Reservation</option>
                  <option>Surf Lessons</option>
                  <option>Dining Reservation</option>
                  <option>Experience Booking</option>
                  <option>General Inquiry</option>
                </select>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-sage font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-sage/20 focus:border-sage focus:outline-none transition-colors duration-300 bg-white/50 resize-none"
                  placeholder="Tell us about your dream Sri Lankan vacation..."
                ></textarea>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <StarBorder
                  className="w-full"
                  color="#8FBC8F"
                  speed="5s"
                >
                  Send Message
                </StarBorder>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mr-4">
                      <info.icon className="w-6 h-6 text-sage" />
                    </div>
                    <BlurText
                      text={info.title}
                      className="text-lg font-serif font-bold text-sage"
                      delay={50}
                      animateBy="words"
                    />
                  </div>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <BlurText
                        key={detailIndex}
                        text={detail}
                        className="text-sage/70"
                        delay={30}
                        animateBy="words"
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <BlurText
                text="Find Us"
                className="text-xl font-serif font-bold text-sage mb-4"
                delay={50}
                animateBy="words"
              />
              <div className="w-full h-48 bg-sage/10 rounded-xl flex items-center justify-center">
                <BlurText
                  text="Interactive Map Coming Soon"
                  className="text-sage/60"
                  delay={30}
                  animateBy="words"
                />
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <BlurText
                text="Follow Our Journey"
                className="text-xl font-serif font-bold text-sage mb-6"
                delay={50}
                animateBy="words"
              />
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center hover:bg-sage/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-6 h-6 text-sage" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;