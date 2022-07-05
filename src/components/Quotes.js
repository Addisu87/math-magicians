import React from 'react';
import styled from 'styled-components';

function Quotes() {
  return (
    <Main>
      <QouteList>
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
      </QouteList>
    </Main>
  );
}

export default Quotes;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 77vh;
  margin: 10px 0;
`;

const QouteList = styled.ul`
  list-style-type: none;
`;
