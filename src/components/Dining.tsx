import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Coffee, Wine, Leaf } from 'lucide-react';
import BlurText from './BlurText';
import StarBorder from './StarBorder';

const Dining = () => {
  const menuHighlights = [
    {
      category: "Fresh Catch",
      items: [
        { name: "Grilled Red Snapper", description: "Locally caught, served with coconut rice and curry leaves" },
        { name: "Prawn Curry", description: "Traditional Sri Lankan spices with fresh prawns" },
        { name: "Fish Tacos", description: "Surf-style tacos with mango salsa" }
      ]
    },
    {
      category: "Garden Fresh",
      items: [
        { name: "Tropical Buddha Bowl", description: "Quinoa, fresh fruits, and tahini dressing" },
        { name: "Coconut Dal", description: "Creamy lentils with aromatic spices" },
        { name: "Jackfruit Curry", description: "Local jackfruit in rich coconut curry" }
      ]
    }
  ];

  const diningExperiences = [
    {
      icon: Utensils,
      title: "Beachfront Restaurant",
      description: "Dine with your toes in the sand while watching the sunset paint the sky"
    },
    {
      icon: Coffee,
      title: "Surf Café",
      description: "Grab a quick bite and fresh coffee before hitting the waves"
    },
    {
      icon: Wine,
      title: "Sunset Bar",
      description: "Craft cocktails and local arrack with panoramic ocean views"
    },
    {
      icon: Leaf,
      title: "Garden Kitchen",
      description: "Farm-to-table dining featuring ingredients from our organic garden"
    }
  ];

  return (
    <section id="dining" className="py-20 bg-gradient-to-b from-teal/20 to-cream">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <BlurText
            text="Culinary Journey"
            className="text-5xl md:text-6xl font-serif font-light text-sage mb-6"
            delay={150}
            animateBy="words"
          />
          <BlurText
            text="Savor the authentic flavors of Sri Lanka with a modern twist"
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
            src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Beachfront Dining"
            className="w-full h-96 md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sage/60 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <BlurText
              text="Where every meal is a celebration"
              className="text-3xl md:text-4xl font-serif text-cream font-light"
              delay={100}
              animateBy="words"
            />
          </div>
        </motion.div>

        {/* Dining Experiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {diningExperiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <experience.icon className="w-10 h-10 text-sage" />
              </div>
              <BlurText
                text={experience.title}
                className="text-xl font-serif font-bold text-sage mb-3"
                delay={50}
                animateBy="words"
              />
              <BlurText
                text={experience.description}
                className="text-sage/70 leading-relaxed"
                delay={30}
                animateBy="words"
              />
            </motion.div>
          ))}
        </div>

        {/* Menu Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {menuHighlights.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
              initial={{ opacity: 0, x: categoryIndex === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <BlurText
                text={category.category}
                className="text-3xl font-serif font-bold text-sage mb-8 text-center"
                delay={100}
                animateBy="words"
              />
              
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    className="border-b border-sage/20 pb-4 last:border-b-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: itemIndex * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <BlurText
                      text={item.name}
                      className="text-xl font-serif font-bold text-sage mb-2"
                      delay={50}
                      animateBy="words"
                    />
                    <BlurText
                      text={item.description}
                      className="text-sage/70 leading-relaxed"
                      delay={30}
                      animateBy="words"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Features */}
        <motion.div
          className="bg-gradient-to-r from-sage/10 to-teal/10 rounded-3xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <BlurText
            text="Special Dining Experiences"
            className="text-4xl font-serif font-bold text-sage mb-8"
            delay={100}
            animateBy="words"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <BlurText
                text="Sunset Dinner"
                className="text-xl font-serif font-bold text-sage mb-3"
                delay={50}
                animateBy="words"
              />
              <BlurText
                text="Private beachfront dining as the sun sets over the Indian Ocean"
                className="text-sage/70"
                delay={30}
                animateBy="words"
              />
            </div>
            
            <div className="text-center">
              <BlurText
                text="Cooking Classes"
                className="text-xl font-serif font-bold text-sage mb-3"
                delay={50}
                animateBy="words"
              />
              <BlurText
                text="Learn to prepare authentic Sri Lankan dishes with our chef"
                className="text-sage/70"
                delay={30}
                animateBy="words"
              />
            </div>
            
            <div className="text-center">
              <BlurText
                text="Spice Garden Tour"
                className="text-xl font-serif font-bold text-sage mb-3"
                delay={50}
                animateBy="words"
              />
              <BlurText
                text="Discover the secrets of Sri Lankan spices in our organic garden"
                className="text-sage/70"
                delay={30}
                animateBy="words"
              />
            </div>
          </div>

          <StarBorder
            color="#8FBC8F"
            speed="5s"
          >
            Reserve Your Table
          </StarBorder>
        </motion.div>
      </div>
    </section>
  );
};

export default Dining;