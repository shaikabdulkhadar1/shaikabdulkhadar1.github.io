import { useEffect, useRef, useState } from "react";
import AboutMe from "../sections/AboutMe";
import Education from "../sections/Education";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import ContactMe from "../sections/ContactMe";
import Skills from "../sections/Skills";
import { label } from "framer-motion/client";

const tabsData = [
  {
    label: "About Me",
    content: <AboutMe />,
  },
  {
    label: "Education",
    content: <Education />,
  },
  {
    label: "Experience",
    content: <Experience />,
  },
  {
    label: "Projects",
    content: <Projects />,
  },
  {
    label: "Skills",
    content: <Skills />,
  },
  {
    label: "Contact Me",
    content: <ContactMe />,
  },
];

export function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div>
      <div className="relative">
        <div className="rounded-lg p-1 font-poppins shadow-lg bg-navBar flex justify-between">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className="p-2 px-4 text-[#FFFFFF] m-2 my-0 text-md opacity-70 hover:opacity-90"
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <span
          className="absolute bottom-0 block h-1 bg-bg1 opacity-70 transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="py-4">
        <p>{tabsData[activeTabIndex].content}</p>
      </div>
    </div>
  );
}

export default Tabs;
