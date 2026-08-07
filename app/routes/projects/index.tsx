import { useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6';

const ProjectPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='flex w-full h-full'>
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
          ></div>
        </div>
      </div>
      <div className='project-container'></div>
    </div>
  );
};

export default ProjectPage;
