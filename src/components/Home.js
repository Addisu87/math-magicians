import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <main>
        <h2>Math Magicians</h2>
        <h4>Welcome to our page!</h4>
        <p>Hi Addisu</p>
      </main>
    </>
  );
}

export default Home;
