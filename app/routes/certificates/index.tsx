import { useState } from 'react';
import PageItems from './page-items';
import CertificateDetails from './certificate-details';
import type { certificateData } from '~/types/certificateData';
import BlurText from '~/components/ui/BlurText';
import {
  internships,
  technologies,
} from '~/data/Certificate/certificateInternshipsList';

const CertificatePage = () => {
  // To set the items close or open
  const [section, setSeciton] = useState<certificateData | null>(null);

  const [intenshipIsOpen, setInternshipOpen] = useState(true);
  const [technIsOpen, setTechOpen] = useState(true);

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
    <div className='w-full h-full flex flex-col lg:flex-row '>
      {/* Side bar */}
      <div className='flex-1  border-r border-r-stroke h-full w-full'>
        <PageItems pageList={pageList} setSection={setSeciton} />
      </div>

      {/* If section is null we need to get something */}
      {section ? (
        // {/* Main Content */}
        <CertificateDetails section={section} />
      ) : (
        // When nothing is there
        <div className='flex-9 lg:h-full w-full p-5'>
          {' '}
          <BlurText
            text='Select a certificate.'
            className='w-full lg:h-full flex lg:justify-center items-center text-5xl lg:text-6xl text-gray-300'
          />
        </div>
      )}
    </div>
  );
};

export default CertificatePage;
