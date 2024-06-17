import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            I am a CS graduate of 2021 batch. I started my coding journey in
            2020, the pandamic time. Those days, the concept of online classes
            sky rocketed and self-learning became the only option for me to
            learn what I like the most, Coding. I started enrolling in various
            programming courses online.
          </p>

          <p className="about-grid-info-text">
            Self-learning became my power. And everything I know today is
            self-earned
          </p>

          <p className="about-grid-info-text">
            I completed my education in 2021 and have gained valuable experience
            in IT Sector. Now I aim to establish myself as a Web3 developer. And
            I am on my way to make my dream come true!
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">C</li>
            <li className="about-grid-info-list-item">C++</li>
            <li className="about-grid-info-list-item">Java</li>
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">MERN Stack</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">React Native</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/profile.jpg" alt="photo" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
