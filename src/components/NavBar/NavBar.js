
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
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
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorite"
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
              >
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
