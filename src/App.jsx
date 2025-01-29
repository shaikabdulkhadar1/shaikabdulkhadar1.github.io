import React, { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import profilePhoto from "./assests/profile-photo.png";
import Tabs from "./component/Tabs";

function App() {
  const [activeTab, setActiveTab] = useState("#");

  const quickContact = [
    {
      icon: "ri-mail-ai-fill",
      content: "shaikabdulkhadar1.shaik@gmail.com",
    },
    {
      icon: "ri-phone-fill",
      content: "+1 (571)561-4356",
    },
    {
      icon: "ri-map-pin-2-fill",
      content: "Fairfax, Virginia, USA",
    },
  ];

  const socials = [
    {
      icon: "ri-github-fill",
      link: "https://github.com/shaikabdulkhadar1",
    },
    {
      icon: "ri-linkedin-box-fill",
      link: "https://www.linkedin.com/in/shaik-abdul-khadar-8001b81a4/",
    },
    {
      icon: "ri-twitter-fill",
      link: "https://twitter.com/S_A_Khadar",
    },
    {
      icon: "ri-instagram-fill",
      link: "https://www.instagram.com/shaikabdulkhadar1/",
    },
  ];

  return (
    <div className="flex items-stretch min-h-screen bg-bg1">
      <div className="main-section w-full rounded-2xl border-2 border-black p-4 m-4 sm:m-6 lg:md-10 mt-14 flex flex-col md:flex-row shadow-glow bg-bg2 motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur">
        <div className="info-section w-full md:w-[30%] h-full rounded-lg flex flex-col relative">
          <motion.div
            className="photo flex flex-row m-6 h-[40%] justify-center items-center"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
          >
            <img
              src={profilePhoto}
              className="h-full w-full object-scale-down"
            />
          </motion.div>
          <motion.p
            className="ml-4 text-md lg:text-md font-poppins text-fontColor"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
          >
            Hi! My name is
          </motion.p>
          <div className="personal-info mx-3 flex flex-col flex-grow justify-center items-center text-center text-fontColor">
            <motion.h1
              className="text-4xl font-outfit font-bold"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.55 }}
            >
              Abdul Khadar Shaik
            </motion.h1>
            <motion.h2
              className="text-xl font-outfit"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.55 }}
            >
              Web Developer
            </motion.h2>
            <motion.p
              className="font-poppins mt-3 text-md opacity-65"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
            >
              I believe that the best transition in life is the transition from
              a non-working state to a working state.
            </motion.p>
          </div>
          <div className="quick-contact-details mx-3 h-[30%] flex flex-col justify-center">
            {quickContact.map((contact, index) => (
              <motion.div
                className="flex items-center my-1 ml-3 text-fontColor cursor-default hover:opacity-1 hover:font-bold"
                key={index}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.65 }}
              >
                <i className={`${contact.icon} ri-md`}></i>
                <p className="font-poppins ml-1 md:ml-2 lg:ml-4 text-md ">
                  {contact.content}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="socials flex flex-grow mx-32 justify-between items-center mb-2 text-fontColor">
            {socials.map((social, index) => (
              <motion.a
                href={social.link}
                className="hover:h-[125%]"
                target="_blank"
                key={index}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
              >
                <i className={`${social.icon} ri-xl`}></i>
              </motion.a>
            ))}
          </div>
        </div>
        <motion.div
          class="h-full bg-black w-[2px] mx-6 bg-fontColor"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.45 }}
        ></motion.div>
        <div className="details-section w-full md:w-[70%] h-full rounded-lg flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.45 }}
          >
            <Tabs />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
