import { demoData } from '~/data/about/demo';
import PageItems from './page-items';
import PersonalInfo from './personal-info';
import { useState } from 'react';
import type { AboutData } from '~/types/aboutData';
import type { Tab } from '~/types/Tabs';

let nextTab = 0;

const AboutPage = () => {
  // A single particular section
  const [section, setSection] = useState<AboutData | null>(null);

  // I need to handle tabs here only
  const [tabs, setTabs] = useState<Tab[] | null>(null);

  const handleSection = (data: AboutData) => {
    console.log(data.tabName);
    setSection(data);

    setTabs([
      ...(tabs || []),
      {
        id: nextTab++,
        section: data,
      },
    ]);
  };
  console.log(tabs);

  const onTabSelect = (tab: Tab) => {
    setSection(tab.section);
  };

  return (
    <div className='h-full w-full flex '>
      <PageItems setSection={handleSection} />

      {!section ? (
        <p className='w-full h-full flex justify-center items-center text-6xl text-gray-300'>
          Select a section.
        </p>
      ) : (
        <PersonalInfo
          tabs={tabs}
          section={section}
          setTabSection={onTabSelect}
        />
      )}
    </div>
  );
};

export default AboutPage;
