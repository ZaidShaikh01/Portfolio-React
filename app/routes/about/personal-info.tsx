import DetailsTab from '~/components/DetailsTabs';
import AboutDetailsArea from './about-details-area';
import type { AboutData } from '~/types/aboutData';
import type { Tab } from '~/types/Tabs';

type PersonalInfoProps = {
  section: AboutData;
  tabs: Tab[]|null;
  setTabSection:(tab:Tab)=>void
  onTabRemove:(tab:Tab)=>void
};


const PersonalInfo = ({ section, tabs,setTabSection,onTabRemove }: PersonalInfoProps) => {
 console.log('Set Section ',section.details);
  

  return (
    <div className='flex flex-col w-full h-full'>
      {/* Tabs section */}
      {/* I need to pass the tabs list and event handler thats it */}
      <DetailsTab tabs={tabs} onTabSelect={setTabSection}  onTabRemove={onTabRemove}/>

      {/* About Area */}
      <AboutDetailsArea section={section} />
    </div>
  );
};

export default PersonalInfo;
