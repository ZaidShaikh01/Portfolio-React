import { Link } from 'react-router';
import { useLocation } from 'react-router';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from './ui/DropDown';
import { FaBars } from 'react-icons/fa6';

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className='flex lg:flex-1 justify-between border-b border-b-stroke  '>
      <div className='flex flex-1 items-center justify-around lg:justify-start'>
        <div className='name cursor-pointer text-text-foreground mr-7 p-5 lg:p-3 text-2xl lg:text-sm '>
          zaid-shaikh
        </div>

        {/* Phone layout header */}
        <div className='flex  items-center  lg:hidden '>
          <DropdownMenu
            trigger={
              <button className='px-4 py-2  text-gray-500 rounded'>
                <FaBars className='text-3xl' />
              </button>
            }
          >
            <div className='border-b border-b-stroke'>
              <DropdownMenuItem >
                <span className='text-gray-400 text-lg '># navigate:</span>
              </DropdownMenuItem>
            </div>
            <DropdownMenuItem>
              <Link className='text-white text-lg' to='/'>
                _hello
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className='text-white text-lg' to='/about'>
                _about-me
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className='text-white text-lg' to='/projects'>
                _projects
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className='text-white text-lg' to='/certificates'>
                _certificates
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className='text-white text-lg' to='/contacts'>
                _contact-me
              </Link>
            </DropdownMenuItem>
          </DropdownMenu>
        </div>

        {/* Web Layout header */}
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
          <div
            className={`p-3 cursor-pointer hover:border-b hover:border-b-cyan-500 text-text-foreground text-sm border-r border-r-stroke transition-opacity duration-700 ease-in-out
               ${pathname === '/certificates' ? 'border-b border-b-cyan-500' : ''}`}
          >
            <Link to='/certificates'>_certificates</Link>
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
