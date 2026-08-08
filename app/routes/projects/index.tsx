import { useState } from 'react';
import PageItems from './page-items';
import type { Tab } from '~/types/Tabs';
import type { ProjectData } from '~/types/ProjectData';
import DetailsTab from '~/components/DetailsTabs';

// Crating Id for the tabs
let nextTab = 0;

const ProjectPage = () => {
  // A single particular section
  const [section, setSection] = useState<ProjectData | null>(null);

  // I need to handle tabs here only
  const [tabs, setTabs] = useState<Tab[] | null>(null);

  const handleSection = (data: ProjectData) => {
console.log(data);

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

  const technologies = [
    'React',
    'HTML',
    'CSS',
    'Vue',
    'Angular',
    'Gatsby',
    'Flutter',
  ];

  return (
    <div className='flex w-full h-full'>
      {/* Left side container */}
      <PageItems technologies={technologies} handleSection={handleSection} />

      {/* Project Container */}
      <div className='project-container'>
        {
          <DetailsTab
            onTabRemove={onTabRemove}
            onTabSelect={onTabSelect}
            tabs={tabs}
          />
        }
      </div>
    </div>
  );
};

export default ProjectPage;
