import { Outlet } from 'react-router';
import NavBar from '../NavBar';

const Layout = () => {
  return (
    <>
    <div className="">
      <NavBar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
    </>
  );
};

export default Layout;
