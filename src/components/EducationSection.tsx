import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const EducationSection: React.FC = () => {
  const education = [
    {
      school: "The Catholic University of America",
      degree: "Master of Science in Computer Science",
      period: "2023 - 2025",
      location: "Washington, D.C., USA",
      description:
        "Completed my Master’s with a perfect 3.8 GPA, focusing on full-stack development, AI, and blockchain applications in public policy and automation.",
    },
    {
      school: "Lords Institute of Engineering and Technology, JNTUH",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      period: "2017 - 2021",
      location: "Hyderabad, Telangana, India",
      description:
        "Completed a comprehensive undergraduate program in Computer Science with a GPA of 7.72, gaining foundational knowledge in programming, algorithms, and system design.",
    },
    {
      school: "OSM Junior College",
      degree: "Intermediate",
      period: "2015 - 2017",
      location: "Hyderabad, Telangana, India",
      description: "Specialized in Maths, Physics, and Chemistry",
    },
    {
      school: "Hyderabad Islamic School",
      degree: "High School",
      period: "2015",
      location: "Hyderabad, Telangana, India",
      description:
        "Completed my high school with a strong foundation in English, Maths, and Science",
    },
  ];

  return (
    <section className="h-[calc(100vh-12rem)] overflow-y-auto">
      <div className="sticky top-0 bg-gray-900 pb-6 z-10">
        <SectionTitle>Education</SectionTitle>
      </div>
      <div className="space-y-8 pb-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-amber-400">
              {edu.school}
            </h3>
            <p className="text-lg font-medium mt-2">{edu.degree}</p>
            <p className="text-gray-400 mt-1">{edu.period}</p>
            <p className="text-gray-400 mt-1">{edu.location}</p>
            <p className="text-gray-300 mt-3">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
