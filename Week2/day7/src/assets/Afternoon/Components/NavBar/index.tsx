import styles from './NavBar.module.css';
import { ShoppingCart } from 'lucide-react';
import { NavLink } from 'react-router';

const NavBar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <h2>Magazines</h2>
      </div>
      <div className={styles.header_right}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? styles.activeLink : styles.link}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => isActive ? styles.activeLink : styles.link}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category"
              className={({ isActive }) => isActive ? styles.activeLink : styles.link}
            >
              Category
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => isActive ? styles.activeLink : styles.link}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/customer"
              className={({ isActive }) => isActive ? styles.activeLink : styles.link}
            >
              Customer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => isActive ? styles.activeLink : ''}
            >
              <ShoppingCart />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
