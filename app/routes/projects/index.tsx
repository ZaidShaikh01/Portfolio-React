import { useState } from 'react';
import PageItems from './page-items';
import type { Tab } from '~/types/Tabs';
import type { ProjectData } from '~/types/ProjectData';
import DetailsTab from '~/components/DetailsTabs';
import GradualBlur from '~/components/GradualBlur';

// Crating Id for the tabs

const ProjectPage = () => {
  const technologies = [
    'React',
    'HTML',
    'CSS',
    'Vue',
    'Angular',
    'Gatsby',
    'Flutter',
  ];

  return (
    <div className='flex w-full h-full'>
      {/* Left side container */}
      <PageItems technologies={technologies} />

      {/* Project Container */}
      <div className='p-10 w-full relative o'>
        {/* Details Tab will be here */}

        {/* Projects Details will be here */}
        <div className='grid grid-cols-3 gap-6 w-full h-full '>
          <div className='flex flex-col gap-2'>
            {/* Label Text */}
            <p>
              <span className='text-indigo-500 mr-1'>Project 1</span>
              <span className='text-gray-400'>// _ui-animations</span>
            </p>
            {/* Actual Project Container */}
            <div className='bg-black  rounded-2xl'>
              <div className='upper-image'>
                <img
                  src='/images/image.png'
                  alt='project-image'
                  className='w-full object-cover'
                />
              </div>

              <div className='m-6 flex flex-col justify-start items-start gap-4'>
                <p className='text-gray-400 text-sm'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit, nesciunt natus velit repellat delectus,{' '}
                </p>
                <button className='p-2 text-sm bg-stroke rounded-xl'>
                  View-project
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            {/* Label Text */}
            <p>
              <span className='text-indigo-500 mr-1'>Project 1</span>
              <span className='text-gray-400'>// _ui-animations</span>
            </p>
            {/* Actual Project Container */}
            <div className='bg-black  rounded-2xl'>
              <div className='upper-image'>
                <img
                  src='/images/image.png'
                  alt='project-image'
                  className='w-full object-cover'
                />
              </div>

              <div className='m-6 flex flex-col justify-start items-start gap-4'>
                <p className='text-gray-400 text-sm'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit, nesciunt natus velit repellat delectus,{' '}
                </p>
                <button className='p-2 text-sm bg-stroke rounded-xl'>
                  View-project
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            {/* Label Text */}
            <p>
              <span className='text-indigo-500 mr-1'>Project 1</span>
              <span className='text-gray-400'>// _ui-animations</span>
            </p>
            {/* Actual Project Container */}
            <div className='bg-black  rounded-2xl'>
              <div className='upper-image'>
                <img
                  src='/images/image.png'
                  alt='project-image'
                  className='w-full object-cover'
                />
              </div>

              <div className='m-6 flex flex-col justify-start items-start gap-4'>
                <p className='text-gray-400 text-sm'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit, nesciunt natus velit repellat delectus,{' '}
                </p>
                <button className='p-2 text-sm bg-stroke rounded-xl'>
                  View-project
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            {/* Label Text */}
            <p>
              <span className='text-indigo-500 mr-1'>Project 1</span>
              <span className='text-gray-400'>// _ui-animations</span>
            </p>
            {/* Actual Project Container */}
            <div className='bg-black  rounded-2xl'>
              <div className='upper-image'>
                <img
                  src='/images/image.png'
                  alt='project-image'
                  className='w-full object-cover'
                />
              </div>

              <div className='m-6 flex flex-col justify-start items-start gap-4'>
                <p className='text-gray-400 text-sm'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit, nesciunt natus velit repellat delectus,{' '}
                </p>
                <button className='p-2 text-sm bg-stroke rounded-xl'>
                  View-project
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            {/* Label Text */}
            <p>
              <span className='text-indigo-500 mr-1'>Project 1</span>
              <span className='text-gray-400'>// _ui-animations</span>
            </p>
            {/* Actual Project Container */}
            <div className='bg-black  rounded-2xl'>
              <div className='upper-image'>
                <img
                  src='/images/image.png'
                  alt='project-image'
                  className='w-full object-cover'
                />
              </div>

              <div className='m-6 flex flex-col justify-start items-start gap-4'>
                <p className='text-gray-400 text-sm'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit, nesciunt natus velit repellat delectus,{' '}
                </p>
                <button className='p-2 text-sm bg-stroke rounded-xl'>
                  View-project
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            {/* Label Text */}
            <p>
              <span className='text-indigo-500 mr-1'>Project 1</span>
              <span className='text-gray-400'>// _ui-animations</span>
            </p>
            {/* Actual Project Container */}
            <div className='bg-black  rounded-2xl'>
              <div className='upper-image'>
                <img
                  src='/images/image.png'
                  alt='project-image'
                  className='w-full object-cover'
                />
              </div>

              <div className='m-6 flex flex-col justify-start items-start gap-4'>
                <p className='text-gray-400 text-sm'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit, nesciunt natus velit repellat delectus,{' '}
                </p>
                <button className='p-2 text-sm bg-stroke rounded-xl'>
                  View-project
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            {/* Label Text */}
            <p>
              <span className='text-indigo-500 mr-1'>Project 1</span>
              <span className='text-gray-400'>// _ui-animations</span>
            </p>
            {/* Actual Project Container */}
            <div className='bg-black  rounded-2xl'>
              <div className='upper-image'>
                <img
                  src='/images/image.png'
                  alt='project-image'
                  className='w-full object-cover'
                />
              </div>

              <div className='m-6 flex flex-col justify-start items-start gap-4'>
                <p className='text-gray-400 text-sm'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit, nesciunt natus velit repellat delectus,{' '}
                </p>
                <button className='p-2 text-sm bg-stroke rounded-xl'>
                  View-project
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            {/* Label Text */}
            <p>
              <span className='text-indigo-500 mr-1'>Project 1</span>
              <span className='text-gray-400'>// _ui-animations</span>
            </p>
            {/* Actual Project Container */}
            <div className='bg-black  rounded-2xl'>
              <div className='upper-image'>
                <img
                  src='/images/image.png'
                  alt='project-image'
                  className='w-full object-cover'
                />
              </div>

              <div className='m-6 flex flex-col justify-start items-start gap-4'>
                <p className='text-gray-400 text-sm'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit, nesciunt natus velit repellat delectus,{' '}
                </p>
                <button className='p-2 text-sm bg-stroke rounded-xl'>
                  View-project
                </button>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            {/* Label Text */}
            <p>
              <span className='text-indigo-500 mr-1'>Project 1</span>
              <span className='text-gray-400'>// _ui-animations</span>
            </p>
            {/* Actual Project Container */}
            <div className=' bg-black  rounded-2xl'>
              <div className='upper-image'>
                <img
                  src='/images/image.png'
                  alt='project-image'
                  className='w-full object-cover'
                />
              </div>
              <div className='m-6 flex flex-col justify-start items-start gap-4'>
                <p className='text-gray-400 text-sm'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit, nesciunt natus velit repellat delectus,{' '}
                </p>
                <button className='p-2 text-sm bg-stroke rounded-xl'>
                  View-project
                </button>
              </div>
            </div>
          </div>
        </div>

        <GradualBlur />
      </div>
    </div>
  );
};

export default ProjectPage;
