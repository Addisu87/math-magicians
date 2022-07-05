import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/home">Home |</Link>
      <Link to="/calculator">Calculator |</Link>
      <Link to="/quotes">Quotes</Link>
    </nav>
  );
}

export default Navbar;
