import AnimatedContent from '~/components/AnimatedContent';
import type { Route } from './+types/home';
import BlurText from '~/components/BlurText';
import BorderGlow from '~/components/BorderGlow';
import TiltedCard from '~/components/TiltedCard';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div className='flex flex-col lg:flex-row gap-5  justify-center items-center lg:gap-30  xl:gap-55 md:p-19 h-full w-full'>
      {/* About Container */}
      <div className='flex flex-col gap-5 xl:gap-12 '>
        <AnimatedContent
          distance={100}
          direction='vertical'
          reverse={true}
          duration={0.8}
          ease='power3.out'
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
        >
          <div>
            {/* Introduction container */}
            <div className=''>
              <p className='text-base md:text-base lg:text-l text-text-foreground '>
                Hi all. I am
              </p>

              <div className='flex flex-col gap-1'>
                <BlurText
                  text='Zaid Shaikh'
                  className='text-3xl md:text-6xl xl:text-8xl'
                />

                <BlurText
                  text='> Front-end Developer'
                  className='text-xl  md:text-3xl xl:text-4xl text-indigo-500'
                />
              </div>
            </div>
            {/* Link Container */}
            <div className='flex flex-col gap-1'>
              <p className='text-sm text-text-foreground'>
                // complete the game to continue
              </p>
              <p className='text-sm text-text-foreground'>
                // find my profile on Github:{' '}
              </p>
              <p className='flex gap-1'>
                <span className='text-sm text-indigo-500'>const</span>
                <span className='text-sm text-teal-400'>githubLink</span>
                <span className='text-sm text-foreground'>=</span>
                <span className='text-sm text-link-forward cursor-pointer hover:text-link-hover-forward'>
                  "https://Somebullshit.com/example/url"
                </span>
              </p>
            </div>
          </div>
        </AnimatedContent>
      </div>

      {/* Snake Game */}
      <div className='hidden lg:visible relative lg:flex items-center justify-center h-2/3 lg:h-full'>
        <img
          src='/images/background_blurs.png'
          alt='background_blurs'
          className='absolute  scale-200'
        />
        <BorderGlow className='relative  h-4/5 rounded-lg'>
          <TiltedCard
            imageSrc='/images/profile.jpg'
            altText='Berserk'
            captionText='Berserk'
            containerHeight='100%'
            containerWidth='320px'
            imageHeight='100%'
            imageWidth='320px'
            rotateAmplitude={12}
            scaleOnHover={1}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent
            overlayContent={
              <p className='tilted-card-demo-text'>Berserk</p>
            }
          />

          {/* <img
            src='/images/profile.jpg'
            alt='img'
            className='relative h-full rounded-lg object-cover'
          /> */}
        </BorderGlow>
      </div>
    </div>
  );
}
