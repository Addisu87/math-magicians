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
  height: 50px;
  padding: 0 1rem;
  margin-bottom: 20px;
  width: 80%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  text-decoration: none;
  color: #000;
  display: flex;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
  margin-right: 20px;
  & Link {
    justify-content: space-evenly;
  }
`;
