import { div, h1 } from 'motion/react-client';
import { useState } from 'react';
import { FaX } from 'react-icons/fa6';
import { demoData } from '~/data/about/demo';
import type { AboutData } from '~/types/aboutData';
import type { Tab } from '~/types/Tabs';

type DetailsTabProp = {
  tabs: Tab[] | null;
  onTabSelect: (tab: Tab) => void;
  onTabRemove: (tab: Tab) => void;
};

const DetailsTab = ({ tabs, onTabSelect, onTabRemove }: DetailsTabProp) => {
  if (!tabs || tabs.length === 0) {
    return null;
  }

  return (
    <div>
      <div className='flex border-b border-b-stroke w-full'>
        {/* A single tab */}
        {tabs.map((item) => (
          <div
            key={item.id}

            className='p-3 text-sm text-gray-300 flex justify-between items-center w-50 h-full border-r border-r-stroke '
          >
            <button onClick={() => onTabSelect(item)}>
              {item.section.tabName}
            </button>
            <button
              className='border-none z-10'
              onClick={() => onTabRemove(item)}
            >
              <FaX />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsTab;
