import DetailsTab from '~/components/DetailsTabs';
import AboutDetailsArea from './about-details-area';
import { useState } from 'react';
import { demoData } from '~/data/about/demo';

const PersonalInfo = () => {
  const [section, setSection] = useState([]);
  const aboutData = demoData;
  
  return (
    
    <div className='flex flex-col w-full h-full'>
      {/* Tabs section */}
      <DetailsTab />

      {/* About Area */}
      {/* <AboutDetailsArea /> */}

      

    </div>
  );
};

export default PersonalInfo;
