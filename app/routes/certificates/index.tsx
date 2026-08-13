import { section } from 'motion/react-client';
import { useState } from 'react';
import { FaAngleDown, FaAngleRight, FaArrowDown } from 'react-icons/fa6';
import PageItems from './page-items';
import { InteractiveHoverButton } from '~/components/ui/interactive-hover-button';

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
      <div className='flex-1  border-r border-r-stroke h-full w-full'>
        <PageItems pageList={pageList} />
      </div>
      {/* Main Conten */}
      <div className='flex-9 flex justify-center items-center flex-col gap-8 h-full w-full p-5'>
        <div className='text-3xl text-center'>
          Internship Certificate Endava
        </div>
        <div className='flex  w-full justify-around'>
          <div>
            <span className='text-xl'>From - </span>
            <span className='text-indigo-500 text-xl'>13th jan 2026</span>
          </div>
          <div>
            <span className='text-xl'>To - </span>
            <span className='text-indigo-500 text-xl'>13th jan 2026</span>
          </div>
        </div>

        {/* Details of certificate & Image preview*/}
        <div className='flex justify-center items-center gap-20 w-full px-30 '>
          <div className='detials w-2/4 '>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            accusantium facilis explicabo est praesentium dolore. Vitae nisi
            necessitatibus quos iure porro animi quo error beatae, accusamus,
            non eligendi enim dolorum? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quae perspiciatis animi totam placeat repellendus
            incidunt corrupti quaerat similique adipisci soluta. Aliquid
            exercitationem consequatur temporibus fugiat eveniet assumenda,
            tempora non placeat. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Magni, labore dignissimos? Sed rerum, rem a
            molestiae quam sapiente accusamus laboriosam distinctio officiis
            voluptatem animi nobis, esse placeat ea optio amet.
          </div>
          <div className='image-container w-1/4'>
            <img
              src='/images/DAVA.png'
              className=' w-full object-cover'
              alt='endava-logo'
            />
          </div>
        </div>
        {/* link to certificate */}
        <InteractiveHoverButton className='w-60 text-sm h-13'>
          {' '}
          Download certificate
        </InteractiveHoverButton>
      </div>
    </div>
  );
};

export default CertificatePage;
