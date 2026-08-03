import { Link } from 'react-router';
import { useLocation } from 'react-router';

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);
  return (
    <div className='flex flex-1 justify-between border-b border-b-stroke  '>
      <div className=' flex '>
        <div className='name cursor-pointer  text-text-foreground mr-7 p-3 text-sm '>
          _zaid-shaikh
        </div>
        <div className='hidden md:flex'>
          <div
            className={`p-3 border-l cursor-pointer hover:border-b hover:border-b-cyan-500 border-l-stroke text-sm border-r text-text-foreground border-r-stroke 
transition-opacity duration-700 ease-in-out ${pathname === '/' ? 'border-b border-b-cyan-500' : ''}`}
          >
            <Link to='/'>_hello</Link>
          </div>
          <div
            className={`p-3 cursor-pointer hover:border-b hover:border-b-cyan-500 text-text-foreground text-sm border-r border-r-stroke 
               ${pathname === '/about' ? 'border-b border-b-cyan-500' : ''}`}
          >
            <Link to='/about'>_about-me</Link>
          </div>
          <div
            className={`p-3 cursor-pointer hover:border-b hover:border-b-cyan-500 text-text-foreground text-sm border-r border-r-stroke transition-opacity duration-700 ease-in-out
               ${pathname === '/projects' ? 'border-b border-b-cyan-500' : ''}`}
          >
            <Link to='/projects'>_projects</Link>
          </div>
        </div>
      </div>
      <div className='hidden md:block'>
        <div
          className={`p-3 cursor-pointer hover:border-b 
transition-opacity duration-2000 ease-in-out hover:border-b-cyan-500 text-text-foreground  border-l border-l-stroke text-sm ${pathname === '/contacts' ? 'border-b border-b-cyan-500' : ''} `}
        >
          <Link to='/contacts'>_contact-me</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
