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
            className='w-full flex text-sm justify-center items-center border-b border-b-stroke  text-gray-400 p-2'
          >
            {/* Drop down Icon  */}
            <span>{item.isOpen ? <FaAngleDown /> : <FaAngleRight />}</span>
            <span className='ml-2'>{item.sectionName}</span>
          </button>
          {/* DropDown Items */}
          {item.isOpen && (
            <div className='dropdown items'>
              {/* Company Drop down */}
              {item.setcionList.map((item) => (
                <button
                  onClick={() => {
                    setSection(item.sectionData);
                  }}
                  className='flex justify-around w-full my-3 items-center'
                >
                  <div className='w-5'>
                    <img
                      src={item.companyLogoUrl}
                      className='object-fit w-full'
                      alt={item.companyName}
                    />
                  </div>
                  <div className='text-sm  text-gray-400'>
                    {item.companyName}
                  </div>
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
