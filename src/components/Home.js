import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <HomeContainer>
      <HomeTitle>Welcome to our page!</HomeTitle>
      <p>
        Emmet Abbreviation Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Praesentium facere numquam nobis minus ipsam quaerat doloremque
        aliquam suscipit vero, vitae dolorem ab laboriosam laudantium voluptatum
        magni libero iusto error eos?
      </p>
      <br />
      <p>
        Emmet Abbreviation Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Praesentium facere numquam nobis minus ipsam quaerat doloremque
        aliquam suscipit vero, vitae dolorem ab laboriosam laudantium voluptatum
        magni libero iusto error eos?
      </p>
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
