import { useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6';
import type { ProjectData } from '~/types/ProjectData';
import type { Tab } from '~/types/Tabs';

type PageItemsProps = {
  technologies: string[];
  handleSection: (data: ProjectData) => void;
};

const PageItems = ({ technologies, handleSection }: PageItemsProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className='w-45 border-r border-r-stroke'>
      <div className='personal-accordian'>
        <button
          className='w-full flex items-center p-3 gap-1 text-sm text-gray-300 border-b border-b-stroke'
          onClick={handleClick}
        >
          {' '}
          {isOpen ? <FaAngleDown /> : <FaAngleRight />}
          {'Personal'}
        </button>
        <div
          className={`${isOpen ? '' : 'hidden'} border-b border-b-stroke pb-1`}
        >
          {technologies.map((tech: string) => (
            <div
              key={tech}
              className='flex gap-2 items-center justify-start p-2'
            >
              <input
                type='checkbox'
                name={tech}
                id={tech}
                onChange={() => handleSection}
              />
              <label className='text-gray-400 ml-4' htmlFor={tech}>
                {tech}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageItems;
