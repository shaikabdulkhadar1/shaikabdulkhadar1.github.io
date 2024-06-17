"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/jarvis.png",
      projectName: "J.A.R.V.I.S",
      projectLink: "https://github.com/shaikabdulkhadar1/JARVIS",
      projectDescription:
        "It is an AI virtual assistant developed using Python. It takes your voice commands as input, analyse them and respond accordingly. If your command includes a google search, it will search your query on the google and displays result in a mini-window within the app.",
      projectTech: ["Python", "Speech Recognition"],
      projectExternalLinks: {
        github: "https://github.com/shaikabdulkhadar1/JARVIS",
        externalLink: "",
      },
    },
    {
      image: "/mlcloud.png",
      projectName: "Smart Cloud Services",
      projectLink: "https://github.com/shaikabdulkhadar1/cloudServiceProvider",
      projectDescription:
        "It is a Machine Learnign based cloud service provider. This model analyzes the user requirements on the basis of their usage and eliminates unnecessary services from the cloud reducing the overall price. This ML model used KNN Algorith to analyse and filter-out the services that are useless for the particular user.",
      projectTech: ["Python", "Machine Learning"],
      projectExternalLinks: {
        github: "https://github.com/shaikabdulkhadar1/cloudServiceProvider",
        externalLink: "",
      },
    },
    {
      image: "/storageprovider2.png",
      projectName: "File Storage System",
      projectLink: "https://github.com/shaikabdulkhadar1/File-Storage",
      projectDescription:
        "This is one of the most secured file storage system with Hybride Cryptography built solely using Python. This uses 3 unique encryption techniques, namely Blowfish, DES and RSA, which uses 3 unique private keys for encryption. ",
      projectTech: ["Python", "Blowfish Algo", "DES Algo", "RSA Algo"],
      projectExternalLinks: {
        github: "https://github.com/shaikabdulkhadar1/File-Storage",
        externalLink: "",
      },
    },
    {
      image: "/dfdetect.png",
      projectName: "DeepFake Detector",
      projectLink:
        "https://github.com/shaikabdulkhadar1/Deepfake-Detection-with-Python",
      projectDescription:
        "This project is used to detect tampered or virtually generated videos and images. This was developed during a Hackathon named HacktoberFest 2022 organised by CodeForIndia Foundation. It uses Python, Keras and TensorFlow to do its magic. ",
      projectTech: ["Python", "Keras", "TensorFlow"],
      projectExternalLinks: {
        github:
          "https://github.com/shaikabdulkhadar1/Deepfake-Detection-with-Python",
        externalLink: "",
      },
    },
    {
      image: "/project3.png",
      projectName: "Netflix App",
      projectLink: "https://github.com/shaikabdulkhadar1/Netflix-Clone",
      projectDescription:
        "I made a Netflix copy with TMBD Api. It has infinite scrolling and lets you watch movies by genre. You can also add movies to your favorites list.",
      projectTech: [
        "React",
        "Node.js",
        "Firebase",
        "MongoDB",
        "Express",
        "Redux Toolkit",
      ],
      projectExternalLinks: {
        github: "https://github.com/shaikabdulkhadar1/Netflix-Clone",
        externalLink: "",
      },
    },
    {
      image: "/cms.png",
      projectName: "Content Management System",
      projectLink: "https://github.com/shaikabdulkhadar1/mernstack-crm-system",
      projectDescription:
        "I built a personal Contact Management System (CMS) from scratch. This system centralizes all my contacts with details like names, emails, and phone numbers, eliminating the hassle of scattered information. It allows the users to create, update, read and delete the contacts.",
      projectTech: [
        "React",
        "Node.js",
        "Firebase",
        "MongoDB",
        "Express",
        "Redux Toolkit",
      ],
      projectExternalLinks: {
        github: "https://github.com/shaikabdulkhadar1/mernstack-crm-system",
        externalLink: "",
      },
    },
  ];
  return (
    <div className="projects" id="projects">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I&apos;ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    {/* <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
