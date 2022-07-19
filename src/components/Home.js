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
  margin: 50px auto 0 auto;
  padding: 10px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  & p {
    width: 100%;
    font-weight: lighter;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }

  @media (min-width: 601px) and (max-width: 1200px) {
    padding: 20px 30px;
    width: 100%;
  }
`;

const HomeTitle = styled.h4`
  font-size: 2.6rem;
  letter-spacing: 2px;
  color: whitesmoke;
  margin-bottom: 20px;

  @media (min-width: 601px) and (max-width: 1200px) {
    font-size: 2rem;
    letter-spacing: normal;
  }
`;
