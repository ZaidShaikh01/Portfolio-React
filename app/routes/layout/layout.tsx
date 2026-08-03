import { Outlet } from 'react-router';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

const LayoutPage = () => {
  return (
    <div className='flex p-10  h-screen'>
      <div className='flex flex-col w-full h-full border rounded-xl bg-background border-stroke'>
        <header>
          <Header />
        </header>

        <main className='flex-1 overflow-auto  h-full'>
          <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default LayoutPage;
