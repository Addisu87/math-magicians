import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
  return (
    <Nav>
      <Title>Math Magicians</Title>
      <Links>
        <Link to="/">Home |</Link>
        <Link to="/calculator">Calculator |</Link>
        <Link to="/quotes">Quotes</Link>
      </Links>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 10px 30px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 20px;
  text-decoration: none;
  color: palevioletred;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
`;
