import { useState } from "react";
import { FaAngleDown, FaAngleRight, FaEnvelope } from "react-icons/fa6";
import FileTree2 from "~/components/FileTree";
import { contactFileTreeData } from "~/data/contact";
import { personalFileTreeData } from "~/data/personal";
import type { AboutData } from "~/types/aboutData";

type pageItemsProps = {
  setSection: (data: AboutData) => void;
};

const ContactPage = ({setSection}:pageItemsProps) => {

  const [isOpen, setIsOpen] = useState(true);
    const [isContactOpen, setIsContactOpen] = useState(true);
  
    const accordian = [
      {
        name: 'Contact-info',
        isOpen: isContactOpen,
        onClick: () => setIsContactOpen((prev) => !prev),
        fileTreeData: contactFileTreeData,
      },
      {
        name: 'Find-me-also-in',
        isOpen:isOpen,
        onClick: () => setIsOpen((prev) => !prev),
        fileTreeData: contactFileTreeData,
      }
    ];

  return <div className= 'flex w-full h-full '>

    {/* Left side, page items */}
    <div className=" w-full h-full flex-1 border-r border-r-stroke ">
     <div className='w-52 border-r border-r-stroke '>
             {accordian.map((item) => (
               <div key={item.name} className='personal-accordian'>
                 <button
                   className='w-full flex items-center p-3 gap-1 text-sm text-gray-300 border-b border-b-stroke'
                   onClick={item.onClick}
                 >
                   {' '}
                   {item.isOpen ? <FaAngleDown /> : <FaAngleRight />}
                   {item.name}
                 </button>
                 <div
                   className={`${item.isOpen ? '' : 'hidden'} border-b border-b-stroke pb-1`}
                 >
                   <FileTree2
                     onItemSelected={setSection}
                     fileTreeData={item.fileTreeData}
                   />
                 </div>
               </div>
             ))}
           </div>
    </div>

    {/* Contact container */}
    <div className="w-full h-full flex-18">

    </div>

  </div>;
};

export default ContactPage;
