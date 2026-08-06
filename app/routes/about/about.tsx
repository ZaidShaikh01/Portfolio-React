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

  const onTabRemove = (tab: Tab) => {
    if (tabs) {
      let newTabs = [];
      newTabs = tabs.filter((item) => {
        return item !== tab;
      });
      if (newTabs.length === 0) {
        setSection(null);
        setTabs(null);
      } else {
        setSection(newTabs[newTabs.length - 1].section);
        setTabs(newTabs);
      }
    }
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
          onTabRemove={onTabRemove}
        />
      )}
    </div>
  );
};

export default AboutPage;
