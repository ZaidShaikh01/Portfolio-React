import { useState } from 'react';
import PageItems from './page-items';
import GradualBlur from '~/components/ui/GradualBlur';
import { projectDemo } from '~/data/project/project';

// Crating Id for the tabs

const ProjectPage = () => {
  const technologies = [
    'React',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Flutter',
    'Firebase',
  ];

  // I will try to set selected option from the option thing
  const [selectedOption, setSelectedOption] = useState<string[]>([]);

  const projectsData = projectDemo;

  const filteredProjectData = projectsData.filter((project) => {
    return selectedOption.every((tech) => project.projectType.includes(tech));
  });

  return (
    <div className='flex flex-col lg:flex-row w-full h-full'>
      {/* Left side container */}
      <PageItems
        setSelectedOptions={setSelectedOption}
        technologies={technologies}
      />

      {/* Project Container */}
      <div className='p-10 w-full relative'>
        {/* Details Tab will be here */}

        {/* Projects Details will be here */}

        <div className='grid lg:grid-cols-3  gap-6 w-full h-full overflow-y-auto '>
          {filteredProjectData.map((project, i) => (
            <div className='flex  flex-col gap-2 h-full '>
              {/* Label Text */}
              <p>
                <span className='text-indigo-500 mr-1'>Project {i + 1} </span>
                <span className='text-gray-400'>// {project.projectName}</span>
              </p>
              {/* Actual Project Container */}
              <div className='bg-black rounded-2xl flex flex-col h-full max-h-90'>
                {/* Image container */}
                <div className='flex mt-5 items-center justify-center w-full'>
                  <img
                    src={project.imgUrl}
                    alt='project-image'
                    className='w-32 h-32 object-cover'
                  />
                </div>
                {/* Details contailer */}

                <div className='m-6 flex flex-col flex-1 justify-start items-start gap-4'>
                  <p className='text-gray-400 text-sm flex-1'>
                    {project.summary}
                  </p>
                  {/* GitHub Link Button */}
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 text-sm bg-stroke rounded-xl text-center hover:bg-indigo-600 transition-colors duration-200'
                  >
                    View Project
                  </a>
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
