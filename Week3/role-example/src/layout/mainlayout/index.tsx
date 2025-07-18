import { Outlet } from 'react-router';
import Navbar from '../../componets/navbar';

export default function MainLayout() {
  
  return (
    <div>
      {/* Render Navigation Bar using plain html */}
      <Navbar />
      <div style={{ padding: '16px' }}>
        {/* Render the child routes */}
        <Outlet />
      </div>
    </div>
  );
}