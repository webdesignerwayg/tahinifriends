import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Coffee, Waves, TreePine } from 'lucide-react';
import BlurText from './BlurText';
import StarBorder from './StarBorder';
import Stack from './Stack';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Ocean Breeze Suite",
      description: "Wake up to panoramic ocean views in our signature suite featuring a private balcony and direct beach access.",
      price: "$180",
      images: [
        { id: 1, img: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { id: 2, img: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { id: 3, img: "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { id: 4, img: "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=500" }
      ]
    },
    {
      id: 2,
      name: "Surf Shack Deluxe",
      description: "Perfect for surf enthusiasts with board storage, wetsuit drying area, and steps from the best breaks.",
      price: "$120",
      images: [
        { id: 1, img: "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { id: 2, img: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { id: 3, img: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { id: 4, img: "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=500" }
      ]
    },
    {
      id: 3,
      name: "Garden Villa",
      description: "Secluded retreat surrounded by tropical gardens with outdoor shower and private meditation space.",
      price: "$200",
      images: [
        { id: 1, img: "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { id: 2, img: "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { id: 3, img: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=500" },
        { id: 4, img: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=500" }
      ]
    }
  ];

  const amenities = [
    { icon: Wifi, name: "High-Speed WiFi" },
    { icon: Coffee, name: "Coffee Station" },
    { icon: Waves, name: "Ocean Access" },
    { icon: TreePine, name: "Garden Views" }
  ];

  return (
    <section id="rooms" className="py-20 bg-gradient-to-b from-cream to-sage/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <BlurText
            text="Our Rooms"
            className="text-5xl md:text-6xl font-serif font-light text-sage mb-6"
            delay={150}
            animateBy="words"
          />
          <BlurText
            text="Each space thoughtfully designed to connect you with the natural beauty of Sri Lanka"
            className="text-xl text-sage/80 font-light max-w-2xl mx-auto"
            delay={100}
            animateBy="words"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                <div className="flex justify-center mb-8">
                  <Stack
                    randomRotation={true}
                    sensitivity={150}
                    sendToBackOnClick={true}
                    cardDimensions={{ width: 200, height: 200 }}
                    cardsData={room.images}
                  />
                </div>
                
                <div className="text-center">
                  <BlurText
                    text={room.name}
                    className="text-2xl font-serif font-bold text-sage mb-4"
                    delay={100}
                    animateBy="words"
                  />
                  <BlurText
                    text={room.description}
                    className="text-sage/70 mb-6 leading-relaxed"
                    delay={80}
                    animateBy="words"
                  />
                  
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl font-bold text-terracotta">{room.price}</span>
                    <span className="text-sage/60">per night</span>
                  </div>

                  <StarBorder
                    className="w-full"
                    color="#8FBC8F"
                    speed="6s"
                  >
                    Reserve Now
                  </StarBorder>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Amenities */}
        <motion.div
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <BlurText
            text="Room Amenities"
            className="text-3xl font-serif font-bold text-sage text-center mb-12"
            delay={100}
            animateBy="words"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.name}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sage/20 transition-colors duration-300">
                  <amenity.icon className="w-8 h-8 text-sage" />
                </div>
                <BlurText
                  text={amenity.name}
                  className="text-sage font-medium"
                  delay={50}
                  animateBy="words"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Rooms;