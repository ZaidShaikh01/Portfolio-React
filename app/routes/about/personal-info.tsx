import BorderGlow from '~/components/BorderGlow';
import DetailsTab from '~/components/DetailsTabs';
import TiltedCard from '~/components/TiltedCard';
import AboutDetailsArea from './about-details-area';

const PersonalInfo = () => {
  return (
    <div className='flex flex-col w-full h-full'>
      {/* Tabs section */}
      <DetailsTab />

      {/* About Area */}
      <AboutDetailsArea />
    </div>
  );
};

export default PersonalInfo;
