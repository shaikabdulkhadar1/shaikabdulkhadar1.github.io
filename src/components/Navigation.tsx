import React from "react";
import { motion } from "framer-motion";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobile?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  setActiveTab,
  isMobile,
}) => {
  const tabs = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`flex ${
        isMobile ? "flex-col p-4 bg-gray-900" : "justify-end"
      }`}
    >
      <div
        className={`flex ${
          isMobile
            ? "flex-col space-y-1"
            : "bg-gray-800 rounded-xl p-1 flex space-x-1"
        }`}
      >
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-gray-700 text-amber-400"
                : "text-gray-300 hover:text-amber-300"
            } ${isMobile ? "w-full text-left" : ""}`}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
