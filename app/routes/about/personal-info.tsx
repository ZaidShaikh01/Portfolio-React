import DetailsTab from '~/components/DetailsTabs';
import AboutDetailsArea from './about-details-area';
import { useState } from 'react';
import { demoData } from '~/data/about/demo';
import type { AboutData } from '~/types/aboutData';

const PersonalInfo = ({section}:{section:AboutData}) => {
 
  const aboutData = demoData;
  
  return (
    
    <div className='flex flex-col w-full h-full'>
      {/* Tabs section */}
      {/* <DetailsTab section={section} /> */}
      <h1>{section.tabName}</h1>

      {/* About Area */}
      {/* <AboutDetailsArea /> */}

      

    </div>
  );
};

export default PersonalInfo;
