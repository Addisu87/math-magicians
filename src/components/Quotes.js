import React from 'react';
import { Link } from 'react-router-dom';

const Quotes = () => (
  <>
    <nav>
      <Link to="/quotes">Quotes</Link>
    </nav>

    <main>
      <p>
        Mathematics is not about numbers, equations, computations, of
        algorithms: it is about understanding. - William Paul Thurston
      </p>
    </main>
  </>
);

export default Quotes;
