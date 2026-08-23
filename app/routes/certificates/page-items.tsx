import { FaAngleDown, FaAngleRight } from 'react-icons/fa6';
import type { certificateData } from '~/types/certificateData';

type pageItemsProps = {
  pageList: {
    sectionName: string;
    onClick: () => void;
    isOpen: boolean;
    setcionList: {
      companyName: string;
      companyLogoUrl: string;
      sectionData: certificateData;
    }[];
  }[];

  setSection: (data: certificateData) => void;
};

const PageItems = ({ pageList, setSection }: pageItemsProps) => {
  return (
    <div>
      {pageList.map((item) => (
        <div className='border-b border-b-stroke'>
          <button
            onClick={item.onClick}
            className='w-full flex text-xl lg:text-sm justify-start lg:justify-center items-center border-b border-b-stroke  text-gray-400 p-2'
          >
            {/* Drop down Icon  */}
            <span>{item.isOpen ? <FaAngleDown /> : <FaAngleRight />}</span>
            <span className='ml-2'>{item.sectionName}</span>
          </button>
          {/* DropDown Items */}
          {item.isOpen && (
            <div className=' w-full'>
              {item.setcionList.map((item) => (
                <button
                  key={item.companyName}
                  onClick={() => {
                    setSection(item.sectionData);
                  }}
                  className='flex items-center ml-3 gap-3 w-full my-3 px-5 lg:px-0'
                >
                  {/* Fixed width icon container */}
                  <div className='w-7 h-7 lg:w-5 lg:h-5 shrink-0'>
                    <img
                      src={item.companyLogoUrl}
                      className='w-full h-full object-contain'
                      alt={item.companyName}
                    />
                  </div>

                  {/* Company Name */}
                  <span className='text-xl lg:text-sm text-gray-400'>
                    {item.companyName}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PageItems;
