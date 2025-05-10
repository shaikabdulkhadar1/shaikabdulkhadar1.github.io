import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      avatar: "👨",
      name: "Dr. Pathan Ahmed Khan",
      relation: "Professor, Lords Institute of Engineering and Technology",
      quote:
        "I had the privilege of teaching Shaik Abdul Khadar during his 3rd year of engineering and taught him the course named Design and Analysis of Algorithms. Shaik's analytical prowess, commitment to excellence, and strong interpersonal skills set him apart. He consistently approached complex challenges with a structured and analytical mindset, and his teamwork, communication, and leadership abilities were commendable. I have no doubt that Shaik Abdul Khadar will continue to excel in his professional journey, and I whole heartedly recommend him..",
    },
    {
      avatar: "👨",
      name: "Sachin Padakanti",
      relation: "Managing Director, KC Overseas Education Pvt. Ltd.",
      quote:
        "I've had the pleasure of working closely with Abdul Khadar for two years, during which you've been an integral part of our team. Your contributions to our IT infrastructure has played a vital role in our company's growth. One standout moment was your exceptional work during our Education Fair. Your management skills, team collaboration, and attention to detail made a significant impact on the event's success. Beyond technical expertise, you've exceled at building strong relationships within our team. you are a natural leader, always ready to support his colleagues and share his knowledge. It's been a privilege working with you, and I'm confident you'll excel in any future role.",
    },
  ];

  return (
    <section className="h-[calc(100vh-12rem)] overflow-y-auto">
      <div className="sticky top-0 bg-gray-900 pb-6 z-10">
        <SectionTitle>Testimonials</SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 transform-gpu perspective-1000"
            initial={{ opacity: 0, y: 20, rotateX: -15 }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
              },
            }}
            whileHover={{
              scale: 1.02,
              rotateY: 5,
              transition: { duration: 0.3 },
            }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <motion.div
                className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center text-2xl mr-4"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 },
                }}
              >
                {testimonial.avatar}
              </motion.div>
              <div>
                <motion.h3
                  className="text-xl font-medium"
                  whileHover={{ scale: 1.05, color: "#FFC107" }}
                >
                  {testimonial.name}
                </motion.h3>
                <p className="text-gray-400 text-sm">{testimonial.relation}</p>
              </div>
            </div>
            <p className="text-gray-300 italic">"{testimonial.quote}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
