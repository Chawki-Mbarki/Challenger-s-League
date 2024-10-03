import React from 'react';
import Link from '../../components/Link/Link'
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>Challenger's League</h1>
      <Link />
    </nav>
  );
};

export default Navbar;
