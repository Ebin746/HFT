// Nav.jsx
import React from 'react';
import styles from './Nav.module.css'; // Importing the module stylesheet
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Scholarship Knight</div>
      <ul className={styles.navLinks}>
        <li><Link to="/home" className={styles.navLink}>Home</Link></li>
        <li><Link to="/login" className={styles.navLink}>login</Link></li>
        <li><Link to="/signUp" className={styles.navLink}>Signup</Link></li>
        
      </ul>
    </nav>
  );
};

export default Nav;
