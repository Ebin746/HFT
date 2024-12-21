import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './Nav.module.css'; // Importing the module stylesheet

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Scholarship Knight</div>
      <ul className={styles.navLinks}>
        <li><Link to="/" className={styles.navLink}>Home</Link></li> {/* Link to Home */}
        <li><Link to="/about" className={styles.navLink}>About</Link></li> {/* Link to About */}
        <li><Link to="/services" className={styles.navLink}>Services</Link></li> {/* Link to Services */}
        <li><Link to="/contact" className={styles.navLink}>Contact</Link></li> {/* Link to Contact */}
        <li><Link to="/login" className={styles.navLink}>Login</Link></li> {/* Link to Login page */}
      </ul>
    </nav>
  );
};

export default Nav;
