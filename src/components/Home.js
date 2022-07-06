import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <HomeContainer>
      <HomeTitle>Welcome to our page!</HomeTitle>
      <article>
        <p>
          Math magicians is a website for all fans of mathematics. It is a
          Single Page App(SPA) that allow users to make simple calculations and
          read a random math-related quote.
        </p>
        <br />
        <p>
          This project was made by Addisu Haile, as part of the React module of
          Microverse school.
        </p>
      </article>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 77%;

  & p {
    width: 100%;
    font-weight: lighter;
    justify-content: center;
    align-items: center;
  }
`;

const HomeTitle = styled.h4`
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 20px;
  justify-content: center;
  text-align: flex-start;
`;
