import {
  FaAngleDown,
  FaAngleRight,
  FaCircle,
  FaGamepad,
  FaTerminal,
} from 'react-icons/fa';
import FileTree2 from '~/components/FileTree';
import { useState } from 'react';

const PageItems = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='flex '>
      <div className='flex flex-col gap-5 p-3 border-r border-r-stroke '>
        <FaTerminal className='w-5' />
        <FaCircle className='w-5' />
        <FaGamepad className='w-5' />
      </div>
      <div className='w-47 border-r border-r-stroke '>
        <button
          className='w-full flex items-center p-3 gap-1 text-sm text-gray-300 border-b border-b-stroke'
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {' '}
          {isOpen ? <FaAngleDown /> : <FaAngleRight />}
          Personal-Info
        </button>
        <div className={isOpen ? '' : 'hidden'}>
          <FileTree2
            fileTreeData={[
              {
                name: 'public',
                type: 'folder',
                children: [
                  { name: 'index.html', type: 'file' },
                  { name: 'favicon.ico', type: 'file' },
                ],
              },
              {
                name: 'src',
                type: 'folder',
                children: [
                  {
                    name: 'components',
                    type: 'folder',
                    children: [
                      { name: 'Button.jsx', type: 'file' },
                      { name: 'Modal.js', type: 'file' },
                    ],
                  },
                  {
                    name: 'hooks',
                    type: 'folder',
                    children: [{ name: 'useFetch.js', type: 'file' }],
                  },
                  { name: 'App.jsx', type: 'file' },
                  { name: 'index.js', type: 'file' },
                  { name: 'styles.css', type: 'file' },
                ],
              },
              { name: 'package.json', type: 'file' },
              { name: 'README.md', type: 'file' },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default PageItems;
