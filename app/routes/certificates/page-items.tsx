import { FaAngleDown, FaAngleRight } from 'react-icons/fa6';

type pageItemsProps = {
  pageList: {
    sectionName: string;
    onClick: () => void;
    isOpen: boolean;
    setcionList: {
      companyName: string;
      companyLogoUrl: string;
    }[];
  }[];
  
};

const PageItems = ({ pageList }: pageItemsProps) => {
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
                <div className='flex justify-around w-full my-3 items-center'>
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
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PageItems;
