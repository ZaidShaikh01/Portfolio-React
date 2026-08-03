import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div className='flex justify-center items-center  gap-55 p-19 h-full w-full'>
      {/* About Container */}
      <div className='flex flex-col gap-12'>
        {/* Introduction container */}
        <div className=''>
          <p className='text-l text-text-foreground  '>Hi all. I am</p>
          <div className='flex flex-col gap-1'>
            <div className='text-8xl'>Zaid Shaikh</div>
            <div className='text-4xl text-indigo-500 '>
              {' '}
              {'>'} Front-end developer
            </div>
          </div>
        </div>
        {/* Link Container */}
        <div className='flex flex-col gap-1'>
          <p className='text-l text-text-foreground'>
            // complete the game to continue
          </p>
          <p className='text-l text-text-foreground'>
            // find my profile on Github:{' '}
          </p>
          <p className='flex gap-1'>
            <span className='text-l text-indigo-500'>const</span>
            <span className='text-teal-400'>githubLink</span>
            <span className='text-foreground'>=</span>
            <span className='text-link-forward cursor-pointer hover:text-link-hover-forward'>
              "https://Somebullshit.com/example/url"
            </span>
          </p>
        </div>
      </div>
      {/* Snake Game */}
      <div className='h-full '>
        <img
          src='/images/profile.jpg'
          alt='img'
          className='h-full  rounded-lg object-cover'
        />
      </div>
    </div>
  );
}
