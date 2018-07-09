import React from 'react';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    padding:0;
    margin:0;
  }
`;

const Container  = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Game = ({match}) => {
    return(
        <Container>
            <h1>{match.params.subjects} Game Page</h1>
        </Container>
    );
};

export default Game;