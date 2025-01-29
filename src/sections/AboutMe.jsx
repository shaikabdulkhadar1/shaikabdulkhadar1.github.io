import { motion } from "framer-motion";

const AboutMe = () => {
  const items = [
    {
      text: "Proven results",
    },
    {
      text: "Tech-savvy problem solver",
    },
    {
      text: "Continuous learner",
    },
    {
      text: "Creative innovator with hands-on experience",
    },
    {
      text: "Team player",
    },
    {
      text: "Strong communication skills",
    },
    {
      text: "Proficient in a wide range of tools and technologies",
    },
    {
      text: "Experienced in both frontend and backend development",
    },
    {
      text: "Skilled in Agile methodologies",
    },
  ];

  return (
    <motion.div
      className="main-div px-6 pt-8 pb-8 h-[608px] overflow-auto"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
    >
      <div className="about-1">
        <h1 className="font-outfit font-bold text-xl m-2 text-fontColor">
          About Me
        </h1>
        <p className="font-poppins text-sm m-2 text-fontColor opacity-75">
          I am a Computer Science graduate from the Class of 2021 and currently
          pursuing my Master's degree at the Catholic University of America,
          with graduation expected in 2025. My coding journey began in 2020
          during the pandemic, where self-learning became my greatest strength.
          I immersed myself in various online programming courses, cultivating a
          passion for technology and problem-solving. With over 2 years of
          professional experience as an IT consultant, I have developed a strong
          foundation in the IT sector. My work has enabled me to hone my
          technical skills and contribute to impactful projects. Currently, I am
          focused on becoming a proficient Web3 developer while expanding my
          expertise in Blockchain and Artificial Intelligence. My aim is to
          leverage these transformative technologies to drive innovation and
          create meaningful solutions.
        </p>
      </div>
      <div className="about-2 mt-6">
        <h1 className="font-outfit font-bold text-xl m-2 text-fontColor">
          What I can do
        </h1>
        <p className="font-poppins text-sm m-2 text-fontColor opacity-85">
          With a solid foundation in software development and a passion for
          problem-solving, I bring ideas to life using cutting-edge
          technologies. Whether it's designing seamless user interfaces,
          building robust backend systems, or optimizing database performance, I
          ensure every project is efficient and impactful. From creating
          full-stack applications like a Contact Management System and Netflix
          Clone to implementing advanced features with MERN Stack, I thrive on
          delivering innovative solutions. As I continue to explore emerging
          fields like Blockchain and AI, I aim to craft future-ready solutions
          that not only meet today’s challenges but also anticipate tomorrow’s
          opportunities. Let's build something extraordinary together!
        </p>
      </div>
      <div className="about-3 mt-6">
        <h1 className="font-outfit font-bold text-xl m-2 text-fontColor">
          Why work with me
        </h1>
        <div className="grid grid-cols-2 gap-1 text-fontColor opacity-85">
          {items.map((item, index) => (
            <div className="flex font-poppins text-sm">
              <i className="ri-arrow-right-s-fill"></i>
              <p key={index}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
