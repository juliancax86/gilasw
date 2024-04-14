import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.navBar}>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : undefined}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/notify" className={({ isActive }) => isActive ? styles.active : undefined}>
            Send Notification
          </NavLink>
        </li>
        <li>
          <NavLink to="/logs" className={({ isActive }) => isActive ? styles.active : undefined}>
            Log History
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
