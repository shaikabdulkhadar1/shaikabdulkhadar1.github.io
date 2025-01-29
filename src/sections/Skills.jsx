import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 65 },
      { name: "MongoDB", level: 60 },
      { name: "SQL", level: 55 },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Docker", level: 50 },
      { name: "Kubernetes", level: 45 },
      { name: "CI/CD", level: 40 },
      { name: "AWS", level: 35 },
    ],
  },
  {
    category: "Other Skills",
    skills: [
      { name: "Git", level: 90 },
      { name: "Agile Methodologies", level: 85 },
      { name: "Problem Solving", level: 80 },
      { name: "Communication", level: 75 },
    ],
  },
];

const Skills = () => {
  return (
    <motion.div
      className="main-div px-6 pt-8 pb-8 md:h-[600px] lg:h-[620px] overflow-auto"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
    >
      <div className="skills-cards grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {skillsData.map((category, index) => (
          <div className="skill-card p-4 rounded-lg " key={index}>
            <h2 className="text-xl font-bold font-outfit mb-4 text-fontColor">
              {category.category}
            </h2>
            {category.skills.map((skill, index) => (
              <div className="skill mb-2 text-fontColor opacity-85" key={index}>
                <i className="ri-arrow-right-s-fill ri-xs"></i>
                <span className="text-sm font-poppins">{skill.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
