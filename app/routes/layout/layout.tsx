import { Outlet } from 'react-router';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

const LayoutPage = () => {
  return (
    <div className='flex flex-col h-185 border rounded-xl bg-background border-stroke m-10 '>
      <header className='flex-1'>
        <Header />
      </header>

      <main className='flex-8 overflow-auto'>
        <Outlet />
      </main>

      <footer className='flex-1'>
        <Footer />
      </footer>
    </div>
  );
};

export default LayoutPage;
