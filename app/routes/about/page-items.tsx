import {
  FaAngleDown,
  FaAngleRight,
  FaCircle,
  FaGamepad,
  FaTerminal,
} from 'react-icons/fa';
import FileTree2 from '~/components/FileTree';
import { useState } from 'react';

import { personalFileTreeData } from '~/data/personal';
import { contactFileTreeData } from '~/data/contact';

const PageItems = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(true);

  const accordian = [
    {
      name: 'Personal-info',
      isOpen: isOpen,
      onClick: () => setIsOpen((prev) => !prev),
      fileTreeData: personalFileTreeData,
    },
    {
      name: 'Contact-info',
      isOpen: isContactOpen,
      onClick: () => setIsContactOpen((prev) => !prev),
      fileTreeData: contactFileTreeData,
    },
  ];

  const leftIcons = [<FaTerminal />, <FaCircle />, <FaGamepad />];

  return (
    <div className='flex '>
      {/* Left icons */}
      <div className='flex flex-col gap-5 p-3 border-r border-r-stroke '>
        {leftIcons.map((item) => item)}
      </div>
      {/*Accordian Container */}

      <div className='w-52 border-r border-r-stroke '>
        {accordian.map((item) => (
          <div className='personal-accordian'>
            <button
              className='w-full flex items-center p-3 gap-1 text-sm text-gray-300 border-b border-b-stroke'
              onClick={item.onClick}
            >
              {' '}
              {item.isOpen ? <FaAngleDown /> : <FaAngleRight />}
              {item.name}
            </button>
            <div
              className={`${item.isOpen ? '' : 'hidden'} border-b border-b-stroke pb-1`}
            >
              <FileTree2 fileTreeData={item.fileTreeData} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageItems;
