import DetailsTab from '~/components/DetailsTabs';
import AboutDetailsArea from './about-details-area';
import { useState } from 'react';
import { demoData } from '~/data/about/demo';
import type { AboutData } from '~/types/aboutData';
import type { Tab } from '~/types/Tabs';

type PersonalInfoProps = {
  section: AboutData;
  tabs: Tab[]|null;
  setTabSection:(tab:Tab)=>void
};

let nextTab = 0;

const PersonalInfo = ({ section, tabs,setTabSection }: PersonalInfoProps) => {
  console.log('Here in Personal-info',tabs);
  const handleTabSelect = (tab: Tab) => {
    
  };

  return (
    <div className='flex flex-col w-full h-full'>
      {/* Tabs section */}
      {/* I need to pass the tabs list and event handler thats it */}
      <DetailsTab tabs={tabs} onTabSelect={setTabSection}  />

      {/* About Area */}
      <AboutDetailsArea section={section} />
    </div>
  );
};

export default PersonalInfo;
