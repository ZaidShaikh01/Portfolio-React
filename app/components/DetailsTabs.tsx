import { div, h1 } from 'motion/react-client';
import { useState } from 'react';
import { FaX } from 'react-icons/fa6';
import { demoData } from '~/data/about/demo';
import type { AboutData } from '~/types/aboutData';

const DetailsTab = () => {
    // This is for list of tabs
  const [aboutData, setAboutData] = useState([]);

  const handleOnClick = (currentItem: AboutData) => {
    setAboutData(
      aboutData.filter((item) => {
        return item !== currentItem ? item : false;
      }),
    );
  };
  if (aboutData.length === 0) {
    return null;
  }
  return (
    <div>
      <div className='flex border-b border-b-stroke w-full'>
        {/* A single tab */}
        {aboutData.map((item) => (
          <div className='p-3 text-sm text-gray-300 flex justify-between items-center w-50 h-full border-r border-r-stroke '>
            <span>{item.tabName}</span>
            <button className='border-none' onClick={() => handleOnClick(item)}>
              <FaX />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsTab;
