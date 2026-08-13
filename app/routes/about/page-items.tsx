import {
  FaAngleDown,
  FaAngleRight,

} from 'react-icons/fa';
import FileTree2 from '~/components/ui/FileTree';
import { useState } from 'react';

import { personalFileTreeData } from '~/data/FileTreeData/personal';
import { contactFileTreeData } from '~/data/FileTreeData/contact';
import type { AboutData } from '~/types/aboutData';

type pageItemsProps = {
  setSection: (data: AboutData) => void;
};

const PageItems = ({ setSection }: pageItemsProps) => {
  // States for left sectiton dropdown
  const [isOpen, setIsOpen] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(true);

  // Accordian list
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

  // const leftIcons = [<FaTerminal />, <FaCircle />, <FaGamepad />];

  return (
    <div className='flex '>
      {/* Left icons */}
      {/* <div className='flex flex-col gap-5 p-3 border-r border-r-stroke '>
        {leftIcons.map((item) => item)}
      </div> */}
      {/*Accordian Container */}

      <div className='w-52 border-r border-r-stroke '>
        {/* Using Map to display all the left Items */}
        {accordian.map((item) => (
          <div key={item.name} className='personal-accordian'>
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
              <FileTree2
                onItemSelected={setSection}
                fileTreeData={item.fileTreeData}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageItems;
