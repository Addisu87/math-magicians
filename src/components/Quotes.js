import React from 'react';

function Quotes() {
  return (
    <main>
      <div>
        <h2>Math Magicians</h2>
      </div>
      <ul>
        <li>
          <q>Pure mathematics is, in its way, the poetry of logical ideas.</q>
          {' '}
          -
          Albert Einstein
        </li>
        <li>
          <q>
            Mathematics is not about numbers, equations, computations, of
            algorithms: it is about understanding.
          </q>
          - William Paul Thurston
        </li>
        <li>
          <q>
            What is mathematics? It is only a systematic effort of solving
            puzzles posed by nature.
          </q>
          — Shakuntala Devi
        </li>
        <li>
          <q>
            Go down deep enough into anything and you will find mathematics.
          </q>
          — Dean Schlicter
        </li>
      </ul>
    </main>
  );
}

export default Quotes;
