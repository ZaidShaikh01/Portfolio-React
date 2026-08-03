import { FaTwitter, FaFacebook, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='flex  md:justify-between border-t border-t-stroke'>
      <div className='flex '>
        <p className='p-3 text-sm text-text-foreground'>Find me in: </p>
        <p className='p-3 cursor-pointer text-lg border-l border-l-stroke text-text-foreground'>
          <FaLinkedinIn />
        </p>
        <p className='p-3 cursor-pointer text-lg border-l border-l-stroke text-text-foreground'>
          <FaFacebook />
        </p>
        <p className='p-3 cursor-pointer text-lg border-r border-r-stroke border-l border-l-stroke text-text-foreground'>
          <FaTwitter />
        </p>
      </div>
      <div className='hidden md:block'>
        <p className='p-3 cursor-pointer text-sm border-l border-l-stroke text-text-foreground'>
          @ZaidShaikh01
        </p>
      </div>
    </div>
  );
};

export default Footer;
