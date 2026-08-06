import { div, h1 } from 'motion/react-client';
import { useState } from 'react';
import { FaX } from 'react-icons/fa6';
import { demoData } from '~/data/about/demo';
import type { AboutData } from '~/types/aboutData';
import type { Tab } from '~/types/Tabs';

type DetailsTabProp = {
  tabs: Tab[] | null;
  onTabSelect: (tab: Tab) => void;
};

const DetailsTab = ({ tabs, onTabSelect }: DetailsTabProp) => {
  console.log('Here in Details Tab ', tabs);

  const handleOnClick = (currentItem: Tab) => {
    // if (tabs) {
    //   setTabs(
    //     tabs.filter((item) => {
    //       return item !== currentItem ? item : false;
    //     }),
    //   );
    // }
  };

  if (!tabs || tabs.length === 0) {
    return null;
  }
  
  return (
    <div>
      <div className='flex border-b border-b-stroke w-full'>
        {/* A single tab */}
        {tabs.map((item) => (
          <button
            onClick={() => onTabSelect(item)}
            className='p-3 text-sm text-gray-300 flex justify-between items-center w-50 h-full border-r border-r-stroke '
          >
            <span>{item.section.tabName}</span>
            <button className='border-none' onClick={() => handleOnClick(item)}>
              <FaX />
            </button>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DetailsTab;
