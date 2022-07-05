import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
  return (
    <NavBar>
      <Title>Math Magicians</Title>
      <Nav>
        <Link to="/">Home |</Link>
        <Link to="/calculator">Calculator |</Link>
        <Link to="/quotes">Quotes</Link>
      </Nav>
    </NavBar>
  );
}

export default Navbar;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 32px;
  margin: 0 auto;
  width: 80%;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  text-decoration: none;
  color: palevioletred;
  display: flex;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  margin: 0 auto;
`;
