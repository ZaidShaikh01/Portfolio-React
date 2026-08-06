import BorderGlow from '~/components/BorderGlow';
import TiltedCard from '~/components/TiltedCard';
import type { AboutData } from '~/types/aboutData';

const AboutDetailsArea = ({ section }: { section: AboutData }) => {
  return (
    <div className='p-15 h-full w-full flex justify-center  items-start gap-18 '>
      <div className='flex flex-col w-2/5 gap-20 justify-center items-center'>
        <p className='text-xl font-bold text-indigo-500'>{section.summary}</p>
        <p className='text-sm'>{section.details}</p>
        <button className='w-50 p-3 text-white rounded-xl  bg-teal-600'>
          {section.downloadText}
        </button>
      </div>
      <div className='h-full'>
        <BorderGlow className='h-4/5 rounded-lg overflow-hidden'>
          <TiltedCard
            imageSrc={section.imgUrl}
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
            overlayContent={<p className='tilted-card-demo-text'>Berserk</p>}
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
};

export default AboutDetailsArea;
