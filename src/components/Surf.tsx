import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Sun, Wind, Users } from 'lucide-react';
import BlurText from './BlurText';
import StarBorder from './StarBorder';

const Surf = () => {
  const surfSpots = [
    {
      name: "Coconut Tree Hill",
      difficulty: "Beginner",
      description: "Perfect gentle waves for learning, with stunning palm tree backdrop",
      bestTime: "Morning"
    },
    {
      name: "Lighthouse Point",
      difficulty: "Intermediate",
      description: "Consistent reef break with long rides and crystal clear water",
      bestTime: "All Day"
    },
    {
      name: "Secret Bay",
      difficulty: "Advanced",
      description: "Powerful waves for experienced surfers, uncrowded and pristine",
      bestTime: "Dawn"
    }
  ];

  const services = [
    {
      icon: Waves,
      title: "Surf Lessons",
      description: "Professional instruction for all levels with certified local guides"
    },
    {
      icon: Sun,
      title: "Board Rental",
      description: "Premium surfboards and equipment available for daily or weekly rental"
    },
    {
      icon: Wind,
      title: "Surf Forecasting",
      description: "Daily wave reports and optimal timing recommendations"
    },
    {
      icon: Users,
      title: "Surf Tours",
      description: "Guided trips to hidden breaks and local surf culture experiences"
    }
  ];

  return (
    <section id="surf" className="py-20 bg-gradient-to-b from-sage/10 to-teal/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <BlurText
            text="Surf Paradise"
            className="text-5xl md:text-6xl font-serif font-light text-sage mb-6"
            delay={150}
            animateBy="words"
          />
          <BlurText
            text="Discover world-class waves on Sri Lanka's pristine southern coast"
            className="text-xl text-sage/80 font-light max-w-2xl mx-auto"
            delay={100}
            animateBy="words"
          />
        </div>

        {/* Hero Image */}
        <motion.div
          className="relative mb-20 rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Surfing in Sri Lanka"
            className="w-full h-96 md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sage/60 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <BlurText
              text="Ride the perfect wave in paradise"
              className="text-3xl md:text-4xl font-serif text-cream font-light"
              delay={100}
              animateBy="words"
            />
          </div>
        </motion.div>

        {/* Surf Spots */}
        <div className="mb-20">
          <BlurText
            text="Local Surf Spots"
            className="text-4xl font-serif font-bold text-sage text-center mb-12"
            delay={100}
            animateBy="words"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {surfSpots.map((spot, index) => (
              <motion.div
                key={spot.name}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <BlurText
                    text={spot.name}
                    className="text-xl font-serif font-bold text-sage"
                    delay={50}
                    animateBy="words"
                  />
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    spot.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    spot.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {spot.difficulty}
                  </span>
                </div>
                
                <BlurText
                  text={spot.description}
                  className="text-sage/70 mb-4 leading-relaxed"
                  delay={30}
                  animateBy="words"
                />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-sage/60">Best Time:</span>
                  <span className="text-sm font-medium text-terracotta">{spot.bestTime}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <service.icon className="w-10 h-10 text-sage" />
              </div>
              <BlurText
                text={service.title}
                className="text-xl font-serif font-bold text-sage mb-3"
                delay={50}
                animateBy="words"
              />
              <BlurText
                text={service.description}
                className="text-sage/70 leading-relaxed"
                delay={30}
                animateBy="words"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <BlurText
            text="Ready to catch some waves?"
            className="text-3xl font-serif font-light text-sage mb-8"
            delay={100}
            animateBy="words"
          />
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <StarBorder
              color="#20B2AA"
              speed="4s"
            >
              Book Surf Lesson
            </StarBorder>
            
            <StarBorder
              color="#CD853F"
              speed="5s"
            >
              Rent Equipment
            </StarBorder>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Surf;