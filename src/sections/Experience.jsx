import { motion } from "framer-motion";

const Experience = () => {
  const experienceList = [
    {
      title: "Treasurer, Public Relations Director",
      company: "Indian Stdents Association @ CUA",
      location: "Washington, D.C.",
      date: "Sep 2023 - Present",
      description: [
        {
          p: "Manage and allocate funds to support cultural events, community activities, and essential resources for members.",
        },
        {
          p: "Collaborate with executive board members to plan and raise funds for events through sponsorships and donations.",
        },
        {
          p: "Managing ISA's website and social media channels, ensuring consistent and engaging content that attracted new members and promoted ISA's initiatives.",
        },
        {
          p: "Represent ISA at ECS Association meetings, fostering partnerships with student organizations, enhancing collaboration, and expanding ISA's reach within the community.",
        },
      ],
    },
    {
      title: "Student Assistant (Micro job)",
      company: "The Catholic University of America",
      location: "Washington, D.C.",
      date: "Sep 2023 - Present",
      description: [
        {
          p: "Developed and optimized the Public Goods Game for the Dept. of Public Policy, leveraging behavioral economics research to enhance engagement and educational outcomes.",
        },
        {
          p: "Conducted a Public Goods Game experiment with 20+ students, validating its effectiveness, and strategized deployment for a 50+ student cohort in Ghana, scaling its impact internationally.",
        },
        {
          p: "Collaborated with team members to analyze gameplay data and refine mechanics, improving the game's relevance for public policy education.",
        },
        {
          p: "Co-curated the syllabus for Blockchain, Cryptoeconomics, and Public Policy, integrating innovative blockchain applications for public policy analysis.",
        },
      ],
    },
    {
      title: "Operations Assistant",
      company: "Events and Conference Services @ CUA",
      location: "Washington, D.C.",
      date: "Sep 2023 - Oct 2024",
      description: [
        {
          p: "Provided logistical and administrative support for a wide range of on-campus events, including conferences, workshops, and seminars.",
        },
        {
          p: "Coordinated event setup and teardown, including arranging furniture, audio-visual equipment, and signage as per event requirements.",
        },
        {
          p: "Collaborated with event organizers and team members to address event needs and troubleshoot issues promptly.",
        },
      ],
    },
    {
      title: "IT Consultant",
      company: "KC Overseas Education Dilsukhnagar",
      location: "Hyderabad, TS, India",
      date: "Oct 2021 - Jun 2023",
      description: [
        {
          p: "Managed the company's database and server environment, ensuring its security, performance, and availability.",
        },
        {
          p: "Implemented efficient IT services encompassing the development, deployment, and upkeep of the company's CRM platform, resulting in a 25% reduction in response time and a 30% increase in customer satisfaction.",
        },
        {
          p: "Organized the successful development and implementation of a Web Application that drove a 25% increase in revenue and reduced manual processes, saving the company 20+ hours per week.",
        },
      ],
    },
    {
      title: "Campus Ambassador Internship",
      company: "Internshala",
      location: "Hyderabad, TS, India",
      date: "Jul 2020 - Sep 2021",
      description: [
        {
          p: "Represented my college at Techfest by IIT Bombay and contributed to 10+ projects.",
        },
        {
          p: "Led a team of students in organizing 6 seminars on emerging technologies and cybersecurity at my college campus, effectively managing the logistics, promoting the events, and engaging with speakers and attendees.",
        },
        {
          p: "Collaborated with a team of engineers to develop 10+ projects at Techfest, an IIT Bombay event, successfully delivering all projects on time and within budget.",
        },
      ],
    },
    {
      title: "Business Development Associate Intern",
      company: "HouseItt",
      location: "Hyderabad, TS, India",
      date: "Oct 2020 - Nov 2020",
      description: [
        {
          p: "Helped 100+ students in acquiring PGs and Rental Rooms during the Pandemic.",
        },
        {
          p: "Generated 100+ leads for new business opportunities by leveraging social media, networking with industry professionals, and attending trade shows.",
        },
        {
          p: "Collaborated with marketing teams to develop and implement business strategies, design and produce promotional materials, and execute marketing campaigns to promote the company.",
        },
        {
          p: "Increased website traffic by 20% by developing and executing SEO and PPC campaigns.",
        },
        {
          p: "Boosted social media engagement by 30% by creating and sharing engaging content.",
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
      {experienceList.map((experience, index) => (
        <div className="experience-card p-3 mb-6 text-fontColor" key={index}>
          <div className="card-header flex flex-row justify-between">
            <div className="left">
              <h2 className="text-xl font-bold font-outfit">
                {experience.title}
              </h2>
              <p className="text-md font-poppins opacity-85">
                {experience.company}
              </p>
              <p className="text-md font-poppins opacity-85">
                {experience.location}
              </p>
            </div>
            <div className="right">
              <p className="text-md font-poppins opacity-85">
                {experience.date}
              </p>
            </div>
          </div>
          <div className="description">
            <h1 className="text-fontColor font-outfit opacity-85 font-bold">
              Description:
            </h1>
            {experience.description.map((desc, index) => (
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

export default Experience;
