import React from 'react';
import { Link } from 'react-router-dom';
import styled from './Navbar.module.css';

const Navigation = () => (
  <nav className={styled.navBar}>
    <h1 className={styled.title}>Math Magicians</h1>
    <ul className={styled.linksContainer}>
      <li className={styled.linkItems}>
        <Link to="/" className={styled.links}>
          Home
        </Link>
      </li>
      <div className={styled.separateDiv} />
      <li className={styled.linkItems}>
        <Link to="/calculator" className={styled.links}>
          Calculator
        </Link>
      </li>
      <div className={styled.separateDiv} />
      <li className={styled.linkItems}>
        <Link to="/quotes" className={styled.links}>
          Quotes
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
