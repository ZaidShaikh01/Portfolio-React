import { section } from 'motion/react-client';
import { useState } from 'react';
import { FaAngleDown, FaAngleRight, FaArrowDown } from 'react-icons/fa6';

const CertificatePage = () => {
  const [intenshipIsOpen, setInternshipOpen] = useState(true);
  const internsships = [
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

  const pageList = [
    {
      sectionName: 'Internships',
      onClick: () => setInternshipOpen((prev) => !prev),
      isOpen: intenshipIsOpen,
      setcionList: internsships,
    },
    {
      sectionName: 'Technologies',
      onClick: () => setInternshipOpen((prev) => !prev),
      isOpen: intenshipIsOpen,
      setcionList: internsships,
    },
  ];

  return (
    <div className='w-full h-full flex '>
      {/* Side bar */}
      <div className='flex-1   border-r border-r-stroke h-full w-full'>
        {pageList.map((item) => (
          <div className='border-b border-b-stroke'>
            <button
              onClick={item.onClick}
              className='w-full flex text-sm justify-center items-center border-b border-b-stroke  text-gray-400 p-2'
            >
              {/* Drop down Icon  */}
              <span>{item.isOpen ? <FaAngleDown /> : <FaAngleRight />}</span>
              <span className='ml-2'>{item.sectionName}</span>
            </button>
            {/* DropDown Items */}
            {intenshipIsOpen && (
              <div className='dropdown items'>
                {/* Company Drop down */}
                {item.setcionList.map((item) => (
                  <div className='flex justify-around w-full my-3 items-center'>
                    <div className='w-5'>
                      <img
                        src={item.companyLogoUrl}
                        className='object-fit w-full'
                        alt={item.companyName}
                      />
                    </div>
                    <div className='text-sm  text-gray-400'>
                      {item.companyName}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Main Conten */}
      <div className='flex-9 h-full w-full'></div>
    </div>
  );
};

export default CertificatePage;
