import PageItems from './page-items';
import PersonalInfo from './personal-info';
import { useEffect, useEffectEvent, useState } from 'react';
import BlurText from '~/components/BlurText';
import type { AboutData } from '~/types/aboutData';
import type { Tab } from '~/types/Tabs';
import ContactForm from './contacts-form';

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
    if (!loaded) return;
    localStorage.setItem('contact-tabs', JSON.stringify(tabs));
    localStorage.setItem('contact-section', JSON.stringify(section));
  }, [tabs, section, loaded]);

  const handleSection = (data: AboutData | null) => {
    setSection(data);

    // If there is some data, I will set tab or I will just remove everything in the tab by setting it to null

    if (data) {
      setTabs([
        ...(tabs || []),
        {
          id: nextTab++,
          section: data,
        },
      ]);
    } else {
      setTabs(null);
    }
  };
  console.log(tabs);


  // A seciton is set accoring to tabs section
  const onTabSelect = (tab: Tab) => {
    setSection(tab.section);
  };

  // removing the tabs
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
      {/* handle section can also return null */}
      <PageItems setSection={handleSection} />
      {/* if everyhing is null it will open the form page */}
      {!section ? (
        <div className='h-full w-full'>
          <ContactForm />
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
