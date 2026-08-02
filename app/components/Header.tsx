const Header = () => {
  return (
    <div className='flex flex-1 justify-between border-b border-b-stroke  '>
      <div className=' flex '>
        <div className='name cursor-pointer text-text-foreground mr-7 p-3 text-sm '>
          _zaid-shaikh
        </div>
        <div className='flex'>
          <div className='p-3 border-l cursor-pointer border-l-stroke text-sm border-r text-text-foreground border-r-stroke'>
            _hello
          </div>
          <div className='p-3 cursor-pointer  text-text-foreground text-sm border-r border-r-stroke'>
            _about-me
          </div>
          <div className='p-3 cursor-pointer text-text-foreground  text-sm border-r border-r-stroke'>
            _projects
          </div>
        </div>
      </div>
      <div className='menu-item'>
        <div className='p-3 cursor-pointer text-text-foreground  border-l border-l-stroke text-sm '>
          _contact-me
        </div>
      </div>
    </div>
  );
};

export default Header;
