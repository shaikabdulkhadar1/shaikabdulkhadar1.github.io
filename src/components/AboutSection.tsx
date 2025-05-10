import React from "react";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import { Code, Laptop, Smartphone, Camera } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section className="h-[calc(100vh-12rem)] overflow-y-auto">
      <div className="sticky top-0 bg-gray-900 pb-6 z-10">
        <SectionTitle>About Me</SectionTitle>
      </div>
      <div className="space-y-16 pb-8">
        <div>
          <p className="mb-4 text-gray-300 leading-relaxed">
            I’m a passionate and solution-driven Computer Science graduate
            student at The Catholic University of America, with hands-on
            experience in full-stack development, AI integration, and cloud
            technologies. With a strong foundation in the MERN stack, cloud
            platforms like AWS and Azure, and modern frameworks such as
            TensorFlow and Docker, I aim to build scalable, real-world
            applications that create impact. I’ve developed AI-powered
            assistants, contact management systems, and web automation
            workflows.
          </p>
          <p className="text-gray-300 leading-relaxed">
            As a Student Assistant, I’ve also collaborated on behavioral
            economics research and contributed to blockchain-based course
            development. My leadership role as Treasurer of the Indian Students
            Association has helped me strengthen communication, budgeting, and
            event management skills. I thrive in agile environments and
            constantly seek opportunities to merge technology with meaningful
            social and academic contributions.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">What I'm Doing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard
              icon={<Laptop className="text-amber-400" size={40} />}
              title="Web Design"
              description="The most modern and high-quality design made at a professional level."
            />

            <ServiceCard
              icon={<Code className="text-amber-400" size={40} />}
              title="Web Development"
              description="High-quality development of sites at the professional level."
            />

            <ServiceCard
              icon={<Smartphone className="text-amber-400" size={40} />}
              title="Mobile Apps"
              description="Professional development of applications for iOS and Android."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
