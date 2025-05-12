import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import SectionTitle from "./SectionTitle";
import AiImage from "../images/ai-chatbot.webp";
import WeatherImage from "../images/weather-app.png";
import CmsImage from "../images/cms.webp";
import NetflixImage from "../images/netflix-clone.jpg";
import DeepfakeImage from "../images/deep-fake-using-python.webp";
import MlCloudImage from "../images/cloud-service-provider.jpeg";
import EncrytedImage from "../images/encrypted-fs.png";
import JarvisImage from "../images/jarvis.jpg";

const ProjectsSection: React.FC = () => {
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);

  const toggleDescription = (index: number) => {
    setExpandedProjects((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const projects = [
    {
      title: "AI Code Assistant",
      description:
        "Developed a full-stack AI-powered assistant using the MERN stack with real-time chatting powered by sockets. Designed and built a ReactJs & Tailwind CSS frontend, integrated NodeJs & Express for backend logic, and implemented Gemini API for AI-based tasks. Gained hands-on experience in authentication, data retrieval from multiple databases, and efficient socket-based communication. The project is available on GitHub.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "API",
        "Sockets",
        "Google Gemini",
      ],
      image: AiImage,
      github: "https://github.com/shaikabdulkhadar1/ai-assistant",
    },
    {
      title: "Weather App",
      description:
        "I built a responsive Weather App using the MERN stack, TailwindCSS, and a third-party Weather API. The app allows users to search for any city and get real-time weather updates including temperature, humidity, wind speed, and forecast. The sleek UI built with TailwindCSS ensures a smooth user experience across devices, while React handles dynamic updates efficiently. Node.js and Express serve as the backend, fetching weather data through API calls, and MongoDB logs recent searches for a personalized experience.",
      technologies: ["React", "Express", "API", "TailwindCSS"],
      image: WeatherImage,
      github: "https://github.com/shaikabdulkhadar1/weather-app",
    },
    {
      title: "Contact Management System (CMS)",
      description:
        "I developed a full-stack Contact Management System (CRM) using the MERN stack (MongoDB, Express.js, React, Node.js). Implemented core CRUD (Create, Read, Update, Delete) functionalities for effective contact management. I also integrated robust authorization system utilizing Authentication Tokens to safeguard user data.",
      technologies: ["React", "Express", "Node", "MongoDB", "Tailwind CSS"],
      image: CmsImage,
      github: "https://github.com/shaikabdulkhadar1/mernstack-crm-system",
    },
    {
      title: "Netflix Clone",
      description:
        "I coded a Netflix-clone platform leveraging the TMDb API, demonstrating leadership as the primary Developer and Programmer. I developed the application utilizing React, Node.js, Express, Firebase, MongoDB, and Redux Toolkit for a comprehensive and efficient tech stack. I also developed genre-based movie streaming functionalities, tailoring content delivery and fostering a 40% boost in user engagement.",
      technologies: [
        "React",
        "Redux Toolkit",
        "Firebase",
        "Axios",
        "Node",
        "Express",
        "MongoDB",
      ],
      image: NetflixImage,
      github: "https://github.com/shaikabdulkhadar1/Netflix-Clone",
    },
    {
      title: "DeepFake Detection using Python",
      description:
        "I led the development team as the Lead Developer, steering a project pivotal to HacktoberFest 2022 organized by CodeForIndia Foundation. I contributed to over 70% of the project's codebase, shaping its core logic and functionalities.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
      image: DeepfakeImage,
      github:
        "https://github.com/shaikabdulkhadar1/Deepfake-Detection-with-Python",
    },
    {
      title: "ML-based Cloud Service Provider",
      description:
        "The project was an ML-based Smart Cloud Storage Service that reduces the user’s bill by analyzing and removing unused and unnecessary features. I implemented the KNN Machine Learning algorithm, achieving a notable 55% reduction in time complexity and a 68% improvement in efficiency. I contributed significantly to the project's success, leading to a significant 30% reduction in cloud storage expenses for users.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
      image: MlCloudImage,
      github: "https://github.com/shaikabdulkhadar1/cloudServiceProvider",
    },
    {
      title: "Encrypted File Storage System",
      description:
        "I developed a secure file storage system utilizing hybrid cryptography, combining the strengths of Blowfish, DES, and RSA encryption algorithms. I implemented a robust encryption mechanism employing three distinct private keys, safeguarding sensitive data against unauthorized access. I also optimized the decryption process, leading to a 32% improvement in decryption speed.",
      technologies: ["Python", "RSA", "Blowfish", "DES"],
      image: EncrytedImage,
      github: "https://github.com/shaikabdulkhadar1/File-Storage",
    },
    {
      title: "J.A.R.V.I.S - An AI Virtual Assistant",
      description:
        "Led the development of an AI-based virtual voice assistant using Python. The project aimed at developing a virtual voice assistant which operates on your voice commands. Implemented robust code that met stringent performance and scalability requirements. Prioritized efficiency and quick execution in the development process, resulting in a 35% reduction in code complexity and a 10% increase in developer productivity. Demonstrated great leadership and technical expertise in the role of Lead Developer and Programmer.",
      technologies: ["Python", "TensorFlow", "Keras", "NLTK"],
      image: JarvisImage,
      github: "https://github.com/shaikabdulkhadar1/JARVIS",
    },
  ];

  const getDescriptionPreview = (description: string) => {
    const sentences = description.split(".");
    return sentences.slice(0, 1).join(".") + "...";
  };

  return (
    <section className="h-[calc(100vh-12rem)] overflow-y-auto">
      <div className="sticky top-0 bg-gray-900 pb-6 z-10">
        <SectionTitle>Projects</SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden transform-gpu perspective-1000"
            initial={{ opacity: 0, y: 20, rotateX: -20 }}
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
            <motion.div
              className="h-48 overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="p-6">
              <motion.h3
                className="text-xl font-semibold text-amber-400"
                whileHover={{ scale: 1.05 }}
              >
                {project.title}
              </motion.h3>
              <div className="text-gray-300 mt-2">
                {expandedProjects.includes(index) ? (
                  <p>{project.description}</p>
                ) : (
                  <p>{getDescriptionPreview(project.description)}</p>
                )}
                <motion.button
                  onClick={() => toggleDescription(index)}
                  className="text-amber-400 hover:text-amber-300 mt-2 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {expandedProjects.includes(index) ? "Show Less" : "Read More"}
                </motion.button>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="bg-gray-700 text-amber-300 text-sm px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: "#2D2E32" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="flex gap-4 mt-6">
                <motion.a
                  href={project.github}
                  className="flex items-center gap-2 text-gray-300 hover:text-amber-400"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                  <span>Code</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
