import DetailsTab from '~/components/DetailsTabs';
import AboutDetailsArea from './about-details-area';
import type { AboutData } from '~/types/aboutData';
import type { Tab } from '~/types/Tabs';
import AnimatedContent from '~/components/ui/AnimatedContent';

type PersonalInfoProps = {
  section: AboutData;
  tabs: Tab[] | null;
  setTabSection: (tab: Tab) => void;
  onTabRemove: (tab: Tab) => void;
};

const PersonalInfo = ({
  section,
  tabs,
  setTabSection,
  onTabRemove,
}: PersonalInfoProps) => {
  console.log('Set Section ', section.details);

  return (
    <div className='flex flex-col w-full h-full'>
      {/* Tabs section */}
      {/* I need to pass the tabs list and event handler thats it */}
      <DetailsTab
        tabs={tabs}
        onTabSelect={setTabSection}
        onTabRemove={onTabRemove}
      />

      {/* About Area */}

      <AnimatedContent
        className='w-full h-full'
        direction='vertical'
        distance={50}
        reverse={true}
        duration={1.5}
        ease='power3.out'
        initialOpacity={0}
        animateOpacity
        scale={1}
        key={section.tabName}
        threshold={0.1}
      >
        <AboutDetailsArea section={section} />
      </AnimatedContent>
    </div>
  );
};

export default PersonalInfo;
