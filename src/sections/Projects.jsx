import { motion } from "framer-motion";

const Projects = () => {
  const projectsList = [
    {
      title: "CMS System",
      company: "Indian Stdents Association @ CUA",
      location: "Washington, D.C.",
      date: "2023 - Present",
      description: [
        {
          p: "Currently pursuing a Master's degree in Computer Science with a focus on Artificial Intelligence and Blockchain.",
        },
        {
          p: "Relevant coursework includes Data Structures, Algorithms, Machine Learning, and Blockchain Technologies.",
        },
        {
          p: "Relevant coursework includes Data Structures, Algorithms, Machine Learning, and Blockchain Technologies.",
        },
        {
          p: "Relevant coursework includes Data Structures, Algorithms, Machine Learning, and Blockchain Technologies.",
        },
        {
          p: "Relevant coursework includes Data Structures, Algorithms, Machine Learning, and Blockchain Technologies.",
        },
      ],
    },
    {
      title: "Netflix Clone",
      company: "Events and Conference Services @ CUA",
      location: "Washington, D.C.",
      date: "2023 - 2024",
      description: [
        {
          p: "Currently pursuing a Master's degree in Computer Science with a focus on Artificial Intelligence and Blockchain.",
        },
        {
          p: "Relevant coursework includes Data Structures, Algorithms, Machine Learning, and Blockchain Technologies.",
        },
        {
          p: "Relevant coursework includes Data Structures, Algorithms, Machine Learning, and Blockchain Technologies.",
        },
        {
          p: "Relevant coursework includes Data Structures, Algorithms, Machine Learning, and Blockchain Technologies.",
        },
        {
          p: "Relevant coursework includes Data Structures, Algorithms, Machine Learning, and Blockchain Technologies.",
        },
      ],
    },
    {
      title: "DeepFake Detector",
      company: "KC Overseas Education Dilsukhnagar",
      location: "Hyderabad, TS, India",
      date: "2021 - 2023",
      description: [
        {
          p: "Currently pursuing a Master's degree in Computer Science with a focus on Artificial Intelligence and Blockchain.",
        },
        {
          p: "Relevant coursework includes Data Structures, Algorithms, Machine Learning, and Blockchain Technologies.",
        },
        {
          p: "Relevant coursework includes Data Structures, Algorithms, Machine Learning, and Blockchain Technologies.",
        },
        {
          p: "Relevant coursework includes Data Structures, Algorithms, Machine Learning, and Blockchain Technologies.",
        },
        {
          p: "Relevant coursework includes Data Structures, Algorithms, Machine Learning, and Blockchain Technologies.",
        },
      ],
    },
  ];

  return (
    <motion.div
      className="main-div px-6 pt-8 pb-8 md:h-[600px] lg:h-[620px] overflow-auto"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
    >
      {projectsList.map((project, index) => (
        <div className="project-card p-3 mb-6 text-fontColor" key={index}>
          <div className="card-header flex flex-row justify-between">
            <div className="left">
              <h2 className="text-xl font-bold font-outfit">{project.title}</h2>
              <p className="text-md font-poppins opacity-85">
                {project.company}
              </p>
              <p className="text-md font-poppins opacity-85">
                {project.location}
              </p>
            </div>
            <div className="right">
              <p className="text-md font-poppins opacity-85">{project.date}</p>
            </div>
          </div>
          <div className="description">
            <h1 className="text-fontColor font-outfit opacity-85 font-bold">
              Description:
            </h1>
            {project.description.map((desc, index) => (
              <div
                className="flex flex-row items-center opacity-85"
                key={index}
              >
                <i className="ri-arrow-right-s-fill ri-xs"></i>
                <p className="font-poppins text-sm">{desc.p}</p>
              </div>
            ))}
          </div>
          <hr className="mt-4 mb-0 border-t border-gray-400" />
        </div>
      ))}
    </motion.div>
  );
};

export default Projects;
