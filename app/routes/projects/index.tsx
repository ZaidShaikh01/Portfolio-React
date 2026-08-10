import { useState } from 'react';
import PageItems from './page-items';
import type { Tab } from '~/types/Tabs';
import type { ProjectData } from '~/types/ProjectData';
import DetailsTab from '~/components/DetailsTabs';
import GradualBlur from '~/components/GradualBlur';
import { projectDemo } from '~/data/project/project';

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

  // I will try to set selected option from the option thing
  const [selectedOption, setSelectedOption] = useState<string[]>([]);

  console.log(selectedOption);

  const projectsData = projectDemo;

  const filteredProjectData = projectsData.filter((project) => {
    return selectedOption.every((tech) => project.projectType.includes(tech));
  });

  return (
    <div className='flex w-full h-full'>
      {/* Left side container */}
      <PageItems
        setSelectedOptions={setSelectedOption}
        technologies={technologies}
      />

      {/* Project Container */}
      <div className='p-10 w-full relative'>
        {/* Details Tab will be here */}

        {/* Projects Details will be here */}

        <div className='grid grid-cols-3  gap-6 w-full h-full overflow-y-auto '>
          {filteredProjectData.map((project, i) => (
            <div className='flex flex-col gap-2'>
              {/* Label Text */}
              <p>
                <span className='text-indigo-500 mr-1'>Project {i + 1} </span>
                <span className='text-gray-400'>// {project.projectName}</span>
              </p>
              {/* Actual Project Container */}
              <div className='bg-black  rounded-2xl'>
                <div className='upper-image'>
                  <img
                    src={project.imgUrl}
                    alt='project-image'
                    className='w-full object-cover'
                  />
                </div>

                <div className='m-6 flex flex-col justify-start items-start gap-4'>
                  <p className='text-gray-400 text-sm'>{project.summary}</p>
                  <button className='p-2 text-sm bg-stroke rounded-xl'>
                    View-project
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Need to map all the items here */}
        </div>

        <GradualBlur />
      </div>
    </div>
  );
};

export default ProjectPage;
