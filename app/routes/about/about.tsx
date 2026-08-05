import PageItems from './page-items';
import PersonalInfo from './personal-info';
import { useState } from 'react';

const AboutPage = () => {
  
  return (
    <div className='h-full w-full flex '>
      <PageItems />
      <PersonalInfo />
    </div>
  );
};

export default AboutPage;
