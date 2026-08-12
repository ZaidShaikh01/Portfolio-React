import PageItems from './page-items';
import PersonalInfo from './personal-info';
import { useEffect, useState } from 'react';
import BlurText from '~/components/BlurText';
import type { AboutData } from '~/types/aboutData';
import type { Tab } from '~/types/Tabs';

let nextTab = 0;

const AboutPage = () => {
  // A single particular section
  const [section, setSection] = useState<AboutData | null>(null);

  // I need to handle tabs here only
  const [tabs, setTabs] = useState<Tab[] | null>(null);
  const [loaded, setLoaded] = useState(false);

  // Then read from localStorage inside useEffect, because useEffect runs in the browser, Because localStorage only exists in the browser, but your component's state initializer can be executed during server rendering.
  useEffect(() => {
    const tabsData = localStorage.getItem('about-tabs');
    const sectionData = localStorage.getItem('section');

    if (sectionData) {
      setSection(JSON.parse(sectionData));
    }

    if (tabsData) {
      setTabs(JSON.parse(tabsData));
    }
    setLoaded(true);
  }, []);
  // Use effect to save all the tabs in the local storage
  useEffect(() => {
    if (!loaded) return;
    // Saving the tabs in the local storage
    localStorage.setItem('about-tabs', JSON.stringify(tabs));
    localStorage.setItem('section', JSON.stringify(section));
  }, [tabs, loaded, section]);

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
        <BlurText
          text='Select a section.'
          className='w-full h-full flex justify-center items-center text-6xl text-gray-300'
        />
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

export default AboutPage;
