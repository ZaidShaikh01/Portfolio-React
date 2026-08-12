import PageItems from './page-items';
import PersonalInfo from './personal-info';
import { useEffect, useEffectEvent, useState } from 'react';
import BlurText from '~/components/BlurText';
import type { AboutData } from '~/types/aboutData';
import type { Tab } from '~/types/Tabs';

let nextTab = 0;

const ContactPage = () => {
  // A single particular section
  const [section, setSection] = useState<AboutData | null>(null);

  // I need to handle tabs here only
  const [tabs, setTabs] = useState<Tab[] | null>(null);
  const [loaded, setLoaded] = useState(false);

  // First use effect to initilaize the data, cuz localstorage didnt exist till now
  useEffect(() => {
    const tabsData = localStorage.getItem('contact-tabs');
    const sectionData = localStorage.getItem('contact-section');
    if (tabsData) {
      setTabs(JSON.parse(tabsData));
    }
    if (sectionData) {
      setSection(JSON.parse(sectionData));
    }
    setLoaded(true);
  }, []);

  // After loaded
  useEffect(() => {
    localStorage.setItem('contact-tabs', JSON.stringify(tabs));
    localStorage.setItem('contact-section', JSON.stringify(section));
  }, [tabs, section, loaded]);

  const handleSection = (data: AboutData) => {
    setSection(data);

    setTabs([
      ...(tabs || []),
      {
        id: nextTab++,
        section: data,
      },
    ]);
  };
  console.log(tabs);

  const onTabSelect = (tab: Tab) => {
    setSection(tab.section);
  };

  const onTabRemove = (tab: Tab) => {
    if (tabs) {
      let newTabs = [];
      newTabs = tabs.filter((item) => {
        return item !== tab;
      });
      if (newTabs.length === 0) {
        setSection(null);
        setTabs(null);
      } else {
        setSection(newTabs[newTabs.length - 1].section);
        setTabs(newTabs);
      }
    }
  };

  return (
    <div className='h-full w-full flex '>
      <PageItems setSection={handleSection} />

      {!section ? (
        <div className='h-full w-full'>
          <BlurText
            text='Select a section.'
            className='w-full h-full flex justify-center items-center text-6xl text-gray-300'
          />
        </div>
      ) : (
        <PersonalInfo
          tabs={tabs}
          section={section}
          setTabSection={onTabSelect}
          onTabRemove={onTabRemove}
        />
      )}
    </div>
  );
};

export default ContactPage;
