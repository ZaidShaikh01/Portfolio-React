import { useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6';
import type { ProjectData } from '~/types/ProjectData';
import type { Tab } from '~/types/Tabs';

type PageItemsProps = {
  technologies: string[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
};

const PageItems = ({ technologies, setSelectedOptions }: PageItemsProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className='w-full lg:w-45 lg:border-r lg:border-r-stroke'>
      <div className='personal-accordian'>
        <button
          className='w-full flex items-center p-3 gap-1 text-2xl lg:text-sm text-gray-300 border-b border-b-stroke'
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
              className='flex gap-2  items-center justify-start p-2'
            >
              <input
                type='checkbox'
                name={tech}
                id={tech}
                value={tech}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedOptions((prev) => [...prev, e.target.value]);
                  } else {
                    setSelectedOptions((prev) =>
                      prev.filter((item) => item !== e.target.value),
                    );
                  }
                }}
              />
              <label className='text-gray-400 text-xl lg:text-base ml-4' htmlFor={tech}>
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
