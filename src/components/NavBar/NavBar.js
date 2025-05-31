// src/components/NavBar/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbarContent}>
          <Link to="/" className={styles.icon}>
            <FontAwesomeIcon icon={faTasks} />
          </Link>
          <ul className={styles.links}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favorite">Favorite</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
