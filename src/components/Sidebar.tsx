import React from "react";
import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
  Link,
  Github,
} from "lucide-react";
import { motion } from "framer-motion";
import profile from "../images/profile.png";

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <aside className="w-full md:w-[400px] bg-gray-800 rounded-2xl p-8 mx-4 my-4 md:mx-8 md:my-8 h-[100%] max-h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="flex flex-col min-h-full">
        <div className="flex-1">
          <div className="flex flex-col items-center">
            <motion.div
              className="w-48 h-48 bg-gray-700 rounded-3xl overflow-hidden mb-6 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full overflow-hidden bg-amber-100">
                  <img
                    src={profile}
                    alt="Abdul Khadar Shaik"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.h1
              className="text-3xl font-bold mb-1 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Abdul Khadar Shaik
            </motion.h1>
            <div className="bg-gray-700 text-sm px-4 py-1.5 rounded-full mb-8 mt-2">
              Software Developer
            </div>

            <div className="w-full border-t border-gray-700 my-6"></div>

            <div className="w-full space-y-5">
              <ContactItem
                icon={<Mail size={20} />}
                label="EMAIL"
                value="shaikabdulkhadar1.shaik@gmail.com"
              />
              <ContactItem
                icon={<Phone size={20} />}
                label="PHONE"
                value="+1 (571) 561-4356"
              />
              <ContactItem
                icon={<Calendar size={20} />}
                label="BIRTHDAY"
                value="Dec 06, 1999"
              />
              <ContactItem
                icon={<MapPin size={20} />}
                label="LOCATION"
                value="Fairfax, Virginia, USA"
              />
            </div>
          </div>
        </div>

        <div className="mt-auto pt-8 border-t border-gray-700">
          <div className="flex justify-center space-x-6">
            <SocialIcon
              icon={<Linkedin size={22} />}
              url="https://www.linkedin.com/in/shaikabdulkhadar1/"
            />
            <SocialIcon
              icon={<Twitter size={22} />}
              url="https://x.com/S_A_Khadar"
            />
            <SocialIcon
              icon={<Link size={22} />}
              url="https://linktr.ee/shaikabdulkhadar"
            />
            <SocialIcon
              icon={<Github size={22} />}
              url="https://github.com/shaikabdulkhadar1"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

const ContactItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
}> = ({ icon, label, value }) => {
  return (
    <motion.div
      className="flex items-start"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="bg-gray-700 p-2.5 rounded-lg text-amber-400 mr-4">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-0.5">{label}</p>
        <p className="text-sm">{value}</p>
      </div>
    </motion.div>
  );
};

const SocialIcon: React.FC<{
  icon: React.ReactNode;
  url: string;
}> = ({ icon, url }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-700 p-3 rounded-full text-gray-300 hover:text-amber-400 transition-colors duration-300"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
};

export default Sidebar;
