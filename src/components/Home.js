import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <HomeContainer>
      <h4>Welcome to our page!</h4>
      <p>
        Emmet Abbreviation Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Praesentium facere numquam nobis minus ipsam quaerat doloremque
        aliquam suscipit vero, vitae dolorem ab laboriosam laudantium voluptatum
        magni libero iusto error eos?
      </p>

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
  justify-content: center;
  align-items: center;
  height: 80vh;
  & h4 {
    font-weight: 700;
  }

  & p {
    width: 70%;
    font-weight: lighter;
  }
`;
