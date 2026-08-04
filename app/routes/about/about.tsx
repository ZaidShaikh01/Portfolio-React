import FileTree2 from '../../components/FileTree';
import PageItems from './page-items';
import PersonalInfo from './personal-info';

const AboutPage = () => {
  const fileTreeData = [];
  return (
    <div className='h-full w-full flex '>
      <PageItems />
      <PersonalInfo />
    </div>
  );
};

export default AboutPage;
