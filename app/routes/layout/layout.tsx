import { Outlet } from 'react-router';
import ClickSpark from '~/components/ClickSpark';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { SmoothCursor } from '~/components/SmoothCursor';

const LayoutPage = () => {
  return (
    <div className='flex p-10 cursor-none  h-screen'>
      <div className='flex flex-col w-full h-full border rounded-xl bg-background border-stroke'>
        <header>
          <Header />
        </header>

        <main className='flex-1 overflow-auto md:overflow-hidden  h-full'>
          <ClickSpark>
            <SmoothCursor />
            <Outlet />
          </ClickSpark>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default LayoutPage;
