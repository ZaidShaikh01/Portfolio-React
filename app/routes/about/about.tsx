import { demoData } from '~/data/about/demo';
import PageItems from './page-items';
import PersonalInfo from './personal-info';
import { useState } from 'react';
import type { AboutData } from '~/types/aboutData';

const AboutPage = () => {
  // A single particular section
  const [section, setSection] = useState<AboutData | null>(null);
  
  const handleSection = (data: AboutData) => {
    setSection(data);
    console.log(section);
  };

  console.log(section);

  return (
    <div className='h-full w-full flex '>
      <PageItems setSection={handleSection} />

      {!section ? (
        <p className='w-full h-full flex justify-center items-center text-6xl text-gray-300'>
          Select a section.
        </p>
      ) : (
        <PersonalInfo section={section} />
      )}
    </div>
  );
};

export default AboutPage;
