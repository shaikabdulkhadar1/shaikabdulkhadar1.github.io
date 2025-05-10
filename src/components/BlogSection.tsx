import React from 'react';
import SectionTitle from './SectionTitle';

const BlogSection: React.FC = () => {
  return (
    <section className="space-y-16">
      <SectionTitle>Blog</SectionTitle>
      <div className="text-gray-300">
        <p>Blog content coming soon...</p>
      </div>
    </section>
  );
};

export default BlogSection;