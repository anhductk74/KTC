import { Outlet } from 'react-router';
import NavBar from '../NavBar';

const Layout = () => {
  return (
    <>
    <div className="w-5/6 mx-auto">
      <NavBar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
    </>
  );
};

export default Layout;
