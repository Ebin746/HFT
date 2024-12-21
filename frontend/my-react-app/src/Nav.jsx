// Nav.jsx
import React from 'react';
import styles from './Nav.module.css'; // Importing the module stylesheet

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Scholarship Knight</div>
      <ul className={styles.navLinks}>
        <li><a href="#home" className={styles.navLink}>Home</a></li>
        <li><a href="#about" className={styles.navLink}>About</a></li>
        <li><a href="#services" className={styles.navLink}>Services</a></li>
        <li><a href="#contact" className={styles.navLink}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
