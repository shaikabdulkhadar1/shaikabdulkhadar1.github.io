"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Experience() {
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const experiences = [
    {
      sTitle: "OA",
      Cname: "Events and Conference Services @ CUA",
      role: "Operations Assistant",
      start: "Sep 2023",
      end: "Present",
      url: "",
      shortDescription: [
        "Provided logistical and administrative support for a wide range of on-campus events, including conferences, workshops, and seminars.",
      ],
    },
    {
      sTitle: "ISA",
      Cname: "Indian Students' Association @ CUA",
      role: "Treasurer, Ex-Public Relations Director",
      start: "Sep 2023",
      end: "Present",
      url: "https://www.linkedin.com/in/indian-student-association-0708a1292/",
      shortDescription: [
        "Managed ISA's website and social media channels, ensuring consistent and engaging content that attracted new members and promoted ISA's initiatives.",
        "Effectively represented ISA at ECS Association meetings and events, fostering collaboration and partnerships with other student organizations.",
      ],
    },
    {
      sTitle: "KC DSNR",
      Cname: "KC Overseas Education Pvt. Ltd., Dilsukhnagar Branch",
      role: "IT Consultant",
      start: "Oct 2021",
      end: "June 2023",
      url: "https://www.linkedin.com/in/krishna-consultancy-dsnr/",
      shortDescription: [
        "Managed the company's database and server environment, ensuring its security, performance, and availability.",
        "Managed company's MySQL Database and server, provided maintenance and security to the DB and server using Cisco ASA and Open SSL",
        "Implemented efficient IT services encompassing the development, deployment, and upkeep of the company's CRM platform, resulting in a 25% reduction in response time and a 30% increase in customer satisfaction.",
        "Organized the successful development and implementation of a Web Application that drove a 25% increase in revenue and reduced manual processes, saving the company 20+ hours per week.",
      ],
    },
    {
      sTitle: "Internship",
      Cname: "HouseItt & WeSettle",
      role: "Intern Business Development Associate",
      start: "Oct 2020",
      url: "https://drive.google.com/file/d/17H1Us5Oarmt4knzVbi2XqdtJcHwrsouA/view",
      end: "November 2020",
      shortDescription: [
        "Helped 100+ students in acquiring PGs and Rental Rooms during the Pandemic.",
        "Generated 100+ leads for new business opportunities by leveraging social media, networking with industry professionals, and attending trade shows.",
        "Collaborated with marketing teams to develop and implement business strategies, design and produce promotional materials, and execute marketing campaigns to promote the company.",
        "Increased website traffic by 20% by developing and executing SEO and PPC campaigns.",
        "Boosted social media engagement by 30% by creating and sharing engaging content.",
      ],
    },
    {
      sTitle: "Internship",
      Cname: "Internshala",
      role: "Intern Campus Ambassador",
      start: "July 2020",
      url: "https://drive.google.com/file/d/1C1_MUqiRaFUyZZTw_s6dES6OoLMLxM-v/view",
      end: "September 2021",
      shortDescription: [
        "Represented my college at Techfest by IIT Bombay.",
        "Led a team of students in organizing 6 seminars on emerging technologies and cybersecurity at my college campus, effectively managing the logistics, promoting the events, and engaging with speakers and attendees.",
        "Collaborated with a team of engineers to develop 10+ projects at Techfest, an IIT Bombay event.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Where I&apos;ve worked</h2>
        <div className="container">
          <ul className="exp-slider">
            <div className="underline"></div>
            {experiences.map((experience, index) => {
              return (
                <li
                  key={index}
                  className={`exp-slider-item ${
                    index === selected && "exp-slider-item-selected"
                  }`}
                  onClick={() => setSelected(index)}
                >
                  <span>{experience.sTitle}</span>
                </li>
              );
            })}
          </ul>
          <div className="exp-details">
            <div className="exp-details-position">
              <h3>
                <span>{experiences[selected].role}</span>
                <span className="exp-details-position-company">
                  <br />
                  <Link
                    className="link"
                    style={{
                      textDecoration: "none",
                      color: "var(--theme-color)",
                    }}
                    href={experiences[selected].url}
                  >
                    {experiences[selected].Cname}
                  </Link>
                </span>
              </h3>
              <p className="exp-details-range">
                {experiences[selected].start} - {experiences[selected].end}
              </p>
              <ul className="exp-details-list">
                {experiences[selected].shortDescription.map(
                  (description, index) => (
                    <li key={index} className="exp-details-list-item">
                      {description}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
