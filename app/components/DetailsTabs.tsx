import { FaX } from "react-icons/fa6";

const DetailsTab = () => {
    return ( <div className='border-b border-b-stroke w-full'>
        {/* A single tab */}
        <div className='p-3 text-sm text-gray-300 flex justify-between items-center w-50 h-full border-r border-r-stroke '>
          <span>education</span>
          <span>
            <FaX />
          </span>
        </div>
      </div> );
}
 
export default DetailsTab;