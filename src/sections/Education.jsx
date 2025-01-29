import { motion } from "framer-motion";

const Education = () => {
  const educationList = [
    {
      title: "M.S. in Computer Science",
      school: "The Catholic University of America",
      location: "Washington, D.C.",
      date: "2023 - 2025",
      cgpa: "3.8/4.0",
    },
    {
      title: "B.Tech in Computer Science & Engineering",
      school: "Lords Institute of Engineering & Technology",
      location: "Hyderabad, TS, India",
      date: "2017 - 2021",
      cgpa: "7.72/10.0",
    },
    {
      title: "Intermediate (M.P.C)",
      school: "OSM Junior College",
      location: "Hyderabad, TS, India",
      date: "2015 - 2017",
      cgpa: "8.8/10.0",
    },
    {
      title: "Secondary School Certificate (SSC)",
      school: "Hyderabad Islamic School",
      location: "Hyderabad, TS, India",
      date: "2015",
      cgpa: "7.7/10.0",
    },
  ];

  return (
    <motion.div
      className="main-div px-6 pt-8 pb-8 md:h-[600px] lg:h-[620px] overflow-auto"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
    >
      {educationList.map((education, index) => (
        <div className="education-card p-3 mb-6 text-fontColor" key={index}>
          <div className="card-header flex flex-row justify-between">
            <div className="left">
              <h2 className="text-xl font-bold font-outfit">
                {education.title}
              </h2>
              <p className="text-md font-poppins opacity-85">
                {education.school}
              </p>
              <p className="text-md font-poppins opacity-85">
                {education.location}
              </p>
            </div>
            <div className="right">
              <p className="text-md font-poppins opacity-85">
                {education.date}
              </p>
              <p className="text-md font-poppins opacity-85">
                {education.cgpa}
              </p>
            </div>
          </div>
          <hr className="mt-4 mb-0 border-t border-gray-400" />
        </div>
      ))}
    </motion.div>
  );
};

export default Education;
