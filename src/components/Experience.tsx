import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Compass, Heart, Star } from 'lucide-react';
import BlurText from './BlurText';
import StarBorder from './StarBorder';
import Stack from './Stack';

const Experience = () => {
  const experiences = [
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Capture the beauty of Sri Lanka with guided photo walks to hidden gems and scenic viewpoints.",
      images: [
        { id: 1, img: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { id: 2, img: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { id: 3, img: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { id: 4, img: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=500" }
      ]
    },
    {
      icon: Compass,
      title: "Cultural Immersion",
      description: "Connect with local communities, visit ancient temples, and experience authentic Sri Lankan traditions.",
      images: [
        { id: 1, img: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { id: 2, img: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { id: 3, img: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { id: 4, img: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=500" }
      ]
    },
    {
      icon: Heart,
      title: "Wellness Retreats",
      description: "Rejuvenate your mind and body with yoga sessions, meditation, and traditional Ayurvedic treatments.",
      images: [
        { id: 1, img: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { id: 2, img: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { id: 3, img: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { id: 4, img: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=500" }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "California, USA",
      text: "Tahini & Friends exceeded every expectation. The perfect blend of adventure and relaxation in paradise.",
      rating: 5
    },
    {
      name: "Marcus Chen",
      location: "Sydney, Australia", 
      text: "The surf breaks here are incredible, and the hospitality is unmatched. Already planning my return trip!",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      text: "A transformative experience. The wellness programs and cultural immersion changed my perspective on travel.",
      rating: 5
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-cream to-sage/10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <BlurText
            text="Unforgettable Experiences"
            className="text-5xl md:text-6xl font-serif font-light text-sage mb-6"
            delay={150}
            animateBy="words"
          />
          <BlurText
            text="Create memories that will last a lifetime with our curated experiences"
            className="text-xl text-sage/80 font-light max-w-2xl mx-auto"
            delay={100}
            animateBy="words"
          />
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 text-center">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sage/20 transition-colors duration-300">
                  <experience.icon className="w-8 h-8 text-sage" />
                </div>
                
                <BlurText
                  text={experience.title}
                  className="text-2xl font-serif font-bold text-sage mb-4"
                  delay={100}
                  animateBy="words"
                />
                
                <BlurText
                  text={experience.description}
                  className="text-sage/70 mb-8 leading-relaxed"
                  delay={80}
                  animateBy="words"
                />

                <div className="flex justify-center mb-8">
                  <Stack
                    randomRotation={true}
                    sensitivity={150}
                    sendToBackOnClick={true}
                    cardDimensions={{ width: 180, height: 180 }}
                    cardsData={experience.images}
                  />
                </div>

                <StarBorder
                  className="w-full"
                  color="#20B2AA"
                  speed="6s"
                >
                  Learn More
                </StarBorder>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          className="bg-gradient-to-r from-sage/10 to-teal/10 rounded-3xl p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <BlurText
            text="What Our Guests Say"
            className="text-4xl font-serif font-bold text-sage text-center mb-12"
            delay={100}
            animateBy="words"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                
                <BlurText
                  text={`"${testimonial.text}"`}
                  className="text-sage/80 italic mb-4 leading-relaxed"
                  delay={50}
                  animateBy="words"
                />
                
                <div className="text-center">
                  <BlurText
                    text={testimonial.name}
                    className="font-serif font-bold text-sage"
                    delay={30}
                    animateBy="words"
                  />
                  <BlurText
                    text={testimonial.location}
                    className="text-sage/60 text-sm"
                    delay={20}
                    animateBy="words"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <BlurText
            text="Ready for your Sri Lankan adventure?"
            className="text-3xl font-serif font-light text-sage mb-8"
            delay={100}
            animateBy="words"
          />
          
          <StarBorder
            color="#D4AF37"
            speed="4s"
          >
            Plan Your Experience
          </StarBorder>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;