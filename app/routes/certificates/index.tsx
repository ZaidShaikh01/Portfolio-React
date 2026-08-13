import { section } from 'motion/react-client';
import { useState } from 'react';
import { FaAngleDown, FaAngleRight, FaArrowDown } from 'react-icons/fa6';
import PageItems from './page-items';

const CertificatePage = () => {
  // To set the items close or open
  const [intenshipIsOpen, setInternshipOpen] = useState(true);
  const [technIsOpen, setTechOpen] = useState(true);
  //   Items in the internship section
  const internships = [
    {
      companyName: 'Endava',
      companyLogoUrl: '/images/DAVA.png',
    },
    {
      companyName: 'Techlyverse',
      companyLogoUrl: '/images/DAVA.png',
    },
    {
      companyName: 'Ester',
      companyLogoUrl: '/images/DAVA.png',
    },
  ];
  const technologies = [
    {
      companyName: 'Endava',
      companyLogoUrl: '/images/OReilly_logo_rgb.png',
    },
    {
      companyName: 'Techlyverse',
      companyLogoUrl: '/images/udemy_icon.png',
    },
    {
      companyName: 'Ester',
      companyLogoUrl: '/images/udemy_icon.png',
    },
  ];
  //   Items in the pageList

  const pageList = [
    {
      sectionName: 'Internships',
      onClick: () => setInternshipOpen((prev) => !prev),
      isOpen: intenshipIsOpen,
      setcionList: internships,
    },
    {
      sectionName: 'Technologies',
      onClick: () => setTechOpen((prev) => !prev),
      isOpen: technIsOpen,
      setcionList: technologies,
    },
  ];

  return (
    <div className='w-full h-full flex '>
      {/* Side bar */}
      <div className='flex-1   border-r border-r-stroke h-full w-full'>
        <PageItems pageList={pageList} />
      </div>
      {/* Main Conten */}
      <div className='flex-9 h-full w-full'></div>
    </div>
  );
};

export default CertificatePage;
