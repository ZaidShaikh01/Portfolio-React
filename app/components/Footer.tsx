import { FaTwitter, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { FaGithub, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='flex  md:justify-between border-t border-t-stroke'>
      <div className='flex '>
        <p className='p-3 text-sm text-text-foreground'>Find me in: </p>
        <p className='p-3 cursor-pointer text-lg border-l border-l-stroke text-text-foreground'>
          <a href='https://www.linkedin.com/in/zaidshaikh01/' target='_blank'>
            <FaLinkedinIn className='hover:text-amber-50' />
          </a>
        </p>
        <p className='p-3 cursor-pointer text-lg border-l border-l-stroke text-text-foreground'>
          <a href='https://www.instagram.com/zaids1406/' target='_blank'>
            <FaInstagram className='hover:text-amber-50' />
          </a>
        </p>
        <p className='p-3 cursor-pointer text-lg border-r  border-r-stroke border-l border-l-stroke text-text-foreground'>
          <a href='https://github.com/ZaidShaikh01' target='_blank'>
            <FaGithub className='hover:text-amber-50' />
          </a>
        </p>
      </div>
      <div className='hidden md:block'>
        <p className='p-3 cursor-pointer text-sm border-l border-l-stroke text-text-foreground'>
          <a href='https://github.com/ZaidShaikh01' className='hover:text-amber-50' target='_blank'>
            @ZaidShaikh01
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
