import { Link } from 'react-router';

const Header = () => {
  return (
    <div className='flex flex-1 justify-between border-b border-b-stroke  '>
      <div className=' flex '>
        <div className='name cursor-pointer text-text-foreground mr-7 p-3 text-sm '>
          _zaid-shaikh
        </div>
        <div className='hidden md:flex'>
          <div className='p-3 border-l cursor-pointer border-l-stroke text-sm border-r text-text-foreground border-r-stroke'>
            <Link to='/'>_hello</Link>
          </div>
          <div className='p-3 cursor-pointer  text-text-foreground text-sm border-r border-r-stroke'>
            <Link to='/about'>_about-me</Link>
          </div>
          <div className='p-3 cursor-pointer text-text-foreground  text-sm border-r border-r-stroke'>
            <Link to='/projects'>_projects</Link>
          </div>
        </div>
      </div>
      <div className='hidden md:block'>
        <div className='p-3 cursor-pointer text-text-foreground  border-l border-l-stroke text-sm '>
          <Link to='/contacts'>_contact-me</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
