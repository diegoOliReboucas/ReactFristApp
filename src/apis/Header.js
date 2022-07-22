import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

const Header = (props) => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink
            activeStyle={{ color: '#aaa' }}
            className={styles.link}
            to="/"
            end
          >
            Pokedex
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ color: '#aaa' }}
            className={styles.link}
            to="money"
          >
            Moedas
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
