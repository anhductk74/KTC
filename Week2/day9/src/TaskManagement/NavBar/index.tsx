// components/Navbar.tsx
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import AuthContext from '../context';

const Navbar = () => {
    const { user, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('users')
        setUser(null)
        navigate('/')
    }
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/home">MyApp</Link>
      </div>
      <ul className="flex space-x-6 text-sm font-medium text-gray-700">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'hover:text-blue-500'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my_tasks"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'hover:text-blue-500'
            }
          >
            My Tasks
          </NavLink>
        </li>
      </ul>
      <div className='flex items-center gap-2'>
        <p className='text-sm font-medium text-gray-700'>{user?.email}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
