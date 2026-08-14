import { section } from 'motion/react-client';
import { useState } from 'react';
import { FaAngleDown, FaAngleRight, FaArrowDown } from 'react-icons/fa6';
import PageItems from './page-items';
import { InteractiveHoverButton } from '~/components/ui/interactive-hover-button';
import CertificateDetails from './certificate-details';
import { endavaData, esterData, techlyverseData } from '~/data/Certificate/certificateData';
import type { certificateData } from '~/types/certificateData';

const CertificatePage = () => {
  // To set the items close or open
  const [section,setSeciton] = useState<certificateData | null>(null);

  const [intenshipIsOpen, setInternshipOpen] = useState(true);
  const [technIsOpen, setTechOpen] = useState(true);
  //   Items in the internship section
  const internships = [
    {
      companyName: 'Endava',
      companyLogoUrl: '/images/DAVA.png',
      sectionData: endavaData
    },
    {
      companyName: 'Techlyverse',
      companyLogoUrl: '/images/DAVA.png',
      sectionData: techlyverseData
    },
    {
      companyName: 'Ester',
      companyLogoUrl: '/images/DAVA.png',
      sectionData: esterData
    },
  ];
  const technologies = [
    {
      companyName: 'HTML/CSS',
      companyLogoUrl: '/images/OReilly_logo_rgb.png',
      sectionData: esterData
    },
    {
      companyName: 'Javascript',
      companyLogoUrl: '/images/OReilly_logo_rgb.png',
      sectionData: esterData
    },
    {
      companyName: 'Flutter',
      companyLogoUrl: '/images/udemy_icon.png',
      sectionData: esterData
    },
    {
      companyName: 'Flutter',
      companyLogoUrl: '/images/udemy_icon.png',
      sectionData: esterData
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

  console.log(section);

  return (
    <div className='w-full h-full flex '>

      {/* Side bar */}
      <div className='flex-1  border-r border-r-stroke h-full w-full'>
        <PageItems pageList={pageList} setSection={setSeciton} />
      </div>

      {/* If section is null we need to get something */}
      {
        section ? <CertificateDetails section={section} /> : <p>Set a section</p>
      }
      
      {/* Main Conten */}
     
    </div>
  );
};

export default CertificatePage;
