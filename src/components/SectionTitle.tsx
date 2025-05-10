import React, { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="mb-6 relative">
      <h2 className="text-2xl md:text-3xl font-bold">{children}</h2>
      <div className="mt-3 flex items-center">
        <div className="w-12 h-1 bg-amber-400 rounded"></div>
        <div className="w-2 h-1 bg-amber-400 rounded ml-1"></div>
        <div className="w-1 h-1 bg-amber-400 rounded ml-1"></div>
      </div>
    </div>
  );
};

export default SectionTitle;