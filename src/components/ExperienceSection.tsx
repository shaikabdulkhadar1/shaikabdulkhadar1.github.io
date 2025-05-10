import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      company: "The Catholic University of America",
      position: "Student Assistant (Micro-job)",
      period: "Nov 2023 - Dec 2024",
      location: "Washington, DC, USA",
      description:
        "Assisted in the development and deployment of the Public Goods Game to support behavioral economics research Collaborated on designing experiments for student engagement, including a rollout in Ghana. Co-curated a graduate-level syllabus on Blockchain and Public Policy, integrating emerging tech into education.",
    },
    {
      company: "Events and Conference Services @ CUA",
      position: "Operations Assistant",
      period: "Sep 2023 - Oct 2024",
      location: "Washington, DC, USA",
      description:
        "Coordinated logistics for 20+ campus events including conferences and workshops. Used tools like When2Work, 25Live, and Trello to streamline scheduling and communication. Ensured smooth event setup and breakdown while managing operational deliverables effectively.",
    },
    {
      company: "Indian Student Association @ CUA",
      position: "Treasurer / Public Relations Director",
      period: "Sep 2023 - Apr 2024",
      location: "Washington, DC, USA",
      description:
        "Managed financial planning and budgeting for 10+ cultural and community events. Represented ISA at university-level meetings to foster collaboration and visibility. Led digital engagement strategy and improved online presence through UX improvements.",
    },
    {
      company: "KC Overseas Education Pvt. Ltd.",
      position: "IT Consultant",
      period: "Oct 2021 - Jun 2023",
      location: "Hyderabad, TS, India",
      description:
        "Led a team in developing scalable web applications using React and Node.js for student services. Collaborated with cross-functional departments to automate workflows and enhance digital platforms. Provided technical consultation for system upgrades, integrations, and process improvements.",
    },
    {
      company: "IIT Bombay",
      position: "Intern Campus Ambassador",
      period: "Jul 2020 - Jul 2021",
      location: "Hyderabad, TS, India",
      description:
        "Acted as a liaison between IIT Bombay and local institutions to promote technical events and workshops. Drove student participation by conducting outreach, presentations, and promotional campaigns. Enhanced event visibility through social media and on-campus engagement initiatives.",
    },
    {
      company: "HouseItt & WeSettle",
      position: "Intern Business Development Associate",
      period: "Oct 2020 - Nov 2020",
      location: "Hyderabad, TS, India",
      description:
        "Assisted in lead generation and client acquisition strategies for housing and relocation services. Engaged with customers to understand needs and recommend tailored solutions. Supported market research efforts and pitched service offerings to potential partners.",
    },
  ];

  return (
    <section className="h-[calc(100vh-12rem)] overflow-y-auto">
      <div className="sticky top-0 bg-gray-900 pb-6 z-10">
        <SectionTitle>Experience</SectionTitle>
      </div>
      <div className="space-y-8 pb-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-amber-400">
              {exp.company}
            </h3>
            <p className="text-lg font-medium mt-2">{exp.position}</p>
            <p className="text-gray-400 mt-1">{exp.period}</p>
            <p className="text-gray-400 mt-1">{exp.location}</p>
            <p className="text-gray-300 mt-3">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
