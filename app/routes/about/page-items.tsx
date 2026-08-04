import {
  FaAngleDown,
  FaAngleRight,
  FaCircle,
  FaGamepad,
  FaTerminal,
} from 'react-icons/fa';
import FileTree2 from '~/components/FileTree';
import { useState } from 'react';

const PageItems = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(true);

  type FileTreeItem = {
    name: string;
    type: 'folder' | 'file';
    children?: FileTreeItem[];
  };

  const personalFileTreeData: FileTreeItem[] = [
    {
      name: 'bio',
      type: 'folder',
      children: [
        { name: 'index.html', type: 'file' },
        { name: 'favicon.ico', type: 'file' },
      ],
    },
    {
      name: 'interests',
      type: 'folder',
      children: [
        { name: 'index.html', type: 'file' },
        { name: 'favicon.ico', type: 'file' },
      ],
    },
    {
      name: 'education',
      type: 'folder',
      children: [
        { name: 'index.html', type: 'file' },
        { name: 'favicon.ico', type: 'file' },
      ],
    },
  ];

  const contactFileTreeData: FileTreeItem[] = [
    {
      name: 'szaid516@gmail.com',
      type: 'file',
    },
    {
      name: '+91-8208900954',
      type: 'file',
    },
  ];

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
